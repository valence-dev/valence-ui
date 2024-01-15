/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ValenceContext, ModalBackground, Flex, useDetectKeyDown, DefaultModalHeader, UnstyledButton, MakeResponsive, useResponsiveProps } from "@valence-ui/core";
import { GenericOverlayHeaderProps, } from "@valence-ui/utils";
import { useContext, forwardRef, CSSProperties } from "react";
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import { useLockedBody } from "usehooks-ts";
import { GenericSheetProps } from "../Generics";

export type BottomSheetProps = GenericSheetProps & {
  /** The offset the sheet must be from its original position before it will close. Defaults to 50% of the viewport height */
  releaseOffset?: number;
  /** The velocity the sheet must be moving at before it will close. Defaults to `500` */
  releaseVelocity?: number;
};

export const BottomSheet = forwardRef(function BottomSheet(
  props: MakeResponsive<BottomSheetProps>,
  ref: any
) {
  const theme = useContext(ValenceContext);
  const controls = useDragControls();


  // Defaults
  const {
    disclosure,
    title,
    header = (props: GenericOverlayHeaderProps) => <DefaultModalHeader
      disclosure={disclosure}
      {...props}
    />,

    releaseOffset = Math.round(window.innerHeight / 2),
    releaseVelocity = 500,

    closeOnOverlayClick = true,
    closeOnEscape = true,
    lockScroll = false,

    radius = "lg",
    withShadow = true,

    backgroundColor = theme.getColorHex("white"),
    color = theme.getColorHex("black"),

    padding = theme.sizeClasses.padding[theme.defaults.size],
    margin = 0,

    width,
    height = "100%",

    flexProps,
    overlayBackgroundProps = {
      padding: 0,
      style: {
        alignItems: "flex-end",
      }
    },

    style,
    children,
    ...rest
  } = useResponsiveProps<BottomSheetProps>(props);


  // Functions
  function handleDragEnd(e: any, { offset, velocity }: any) {

    if (
      offset.y > releaseOffset
      || velocity.y > releaseVelocity
    )
      disclosure.close();
  }


  // Styles
  const borderRadius = theme.sizeClasses.radius[radius];
  const ContainerStyles = css({
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,

    width: width,
    height: height,

    ...style,
  });
  const SheetStyle: CSSProperties = {
    height: "100%",
    width: "100%",

    backgroundColor: backgroundColor,
    color: color,

    padding: padding,
    margin: margin,

    borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
    boxShadow: withShadow ? theme.defaults.shadow : undefined,

    overflowX: "hidden",
    overflowY: "auto",
  }
  const DragStyle: CSSProperties = {
    width: "100%",
    height: 25,
    touchAction: "none",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
    cursor: "grab",
  }
  const PillStyle: CSSProperties = {
    width: 50,
    height: 5,
    borderRadius: 5,
    backgroundColor: theme.getColorHex("white", "strong"),
  }

  // Hooks
  useLockedBody(disclosure.opened && lockScroll, "root");
  useDetectKeyDown(disclosure.close, "Escape", closeOnEscape, [closeOnEscape, close]);


  return (
    <AnimatePresence>
      {disclosure.opened &&
        <ModalBackground
          disclosure={disclosure}
          {...overlayBackgroundProps}
        >
          <motion.div
            css={ContainerStyles}
            onClick={e => e.stopPropagation()}

            drag="y"
            dragControls={controls}
            dragListener={false}
            dragConstraints={{ top: 0 }}
            dragSnapToOrigin
            onDragEnd={handleDragEnd}

            initial={{ y: "100%" }}
            animate={{
              y: 0,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                delay: 0.1,
              }
            }}
            exit={{ y: "100%" }}

            ref={ref}
            {...rest}
          >
            <UnstyledButton
              style={DragStyle}
              onPointerDown={(e) => controls.start(e)}
            >
              <div style={PillStyle} />
            </UnstyledButton>

            <Flex
              direction="column"
              style={SheetStyle}
              {...flexProps}
            >
              {header({ title })}

              {children}
            </Flex>
          </motion.div>
        </ModalBackground>
      }
    </AnimatePresence>
  )
});