/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { GenericOverlayHeaderProps } from "@valence-ui/utils";
import { useContext, forwardRef, CSSProperties } from "react";
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import { GenericSheetProps } from "../Generics";
import {
  FloatingFocusManager,
  useFloating,
  useId,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import {
  MakeResponsive,
  useColors,
  useResponsiveProps,
} from "../../../../utilities";
import { Flex, FlexProps, OverflowContainer } from "../../../layout";
import { ValenceContext } from "../../../../ValenceProvider";
import { DefaultModalHeader } from "../../Modal";
import { useDetectKeyDown } from "../../../../hooks";
import { ModalBackground } from "../../ModalBackground";
import { useLockScroll } from "../../../../hooks/UseLockScroll";

export type BottomSheetProps = GenericSheetProps & {
  /** The offset the sheet must be from its original position before it will close. Defaults to 50% of the viewport height */
  releaseOffset?: number;
  /** The velocity the sheet must be moving at before it will close. Defaults to `500` */
  releaseVelocity?: number;

  /** Whether to allow the sheet to scroll its inner content. Defaults to `false`. */
  allowInnerScrolling?: boolean;

  /** Optional props to apply to the inner flex component. */
  innerFlexProps?: FlexProps;
};

export const BottomSheet = forwardRef(function BottomSheet(
  props: MakeResponsive<BottomSheetProps>,
  ref: any
) {
  const theme = useContext(ValenceContext);
  const { getHex } = useColors();
  const controls = useDragControls();

  // Defaults
  const {
    disclosure,
    title,
    header = (props: GenericOverlayHeaderProps) => (
      <DefaultModalHeader disclosure={disclosure} {...props} />
    ),

    releaseOffset = Math.round(window.innerHeight / 2),
    releaseVelocity = 500,
    allowInnerScrolling = false,

    closeOnOverlayClick = true,
    closeOnEscape = true,
    lockScroll = true,

    radius = "lg",
    withShadow = false,

    backgroundColor = getHex("white"),
    color = getHex("black"),

    padding = theme.sizeClasses.padding[theme.defaults.size],
    margin = 0,

    width,
    height = "calc(100% - var(--safe-area-inset-top))",

    flexProps,
    innerFlexProps,
    overlayBackgroundProps = {
      padding: 0,
      style: {
        alignItems: "flex-end",
      },
    },

    style,
    children,
    ...rest
  } = useResponsiveProps<BottomSheetProps>(props);
  const { style: flexStyle, ...flexPropsRest } = flexProps || ({} as any);

  // Functions
  function handleDragEnd(e: any, { offset, velocity }: any) {
    if (offset.y > releaseOffset || velocity.y > releaseVelocity)
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
    height: "calc(100% - 25px)",
    width: "100%",

    backgroundColor: backgroundColor,
    color: color,

    padding: padding,
    margin: margin,
    position: "relative",

    borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
    border: "none",
    borderTop: `1px solid ${getHex("black", "weak")}`,
    boxShadow: withShadow ? theme.defaults.shadow : undefined,
    touchAction: "none",

    ...flexStyle,
  };
  const DragStyle: CSSProperties = {
    width: "100%",
    height: 25,
    touchAction: "none",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    cursor: "grab",
  };
  const PillStyle: CSSProperties = {
    width: 50,
    height: 5,
    borderRadius: 5,
    backgroundColor: getHex("permaWhite", "strong"),
  };
  const OverflowStyle: CSSProperties = {
    width: "100%",
    height: "100vh",
    backgroundColor: backgroundColor,
    marginTop: -1,
  };

  // Hooks
  useLockScroll(disclosure.opened && lockScroll);
  useDetectKeyDown(disclosure.close, "Escape", closeOnEscape, [
    closeOnEscape,
    close,
  ]);

  // Floating UI
  const { refs, context } = useFloating({
    open: disclosure.opened,
    onOpenChange: disclosure.update,
  });
  const role = useRole(context);

  const { getFloatingProps } = useInteractions([role]);

  const labelId = useId();
  const descriptionId = useId();

  return (
    <AnimatePresence>
      {disclosure.opened && (
        <ModalBackground disclosure={disclosure} {...overlayBackgroundProps}>
          <FloatingFocusManager context={context}>
            <motion.div
              css={ContainerStyles}
              // @ts-ignore
              onClick={(e) => e.stopPropagation()}
              drag="y"
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
                },
              }}
              exit={{ y: "100%" }}
              ref={refs.setFloating}
              aria-labelledby={labelId}
              aria-describedby={descriptionId}
              {...getFloatingProps()}
              {...rest}
            >
              <div style={DragStyle}>
                <div style={PillStyle} />
              </div>

              <Flex direction="column" style={SheetStyle} {...flexPropsRest}>
                <div
                  onPointerDown={controls.start}
                  style={{ width: "100%", touchAction: "none" }}
                >
                  {header({ title })}
                </div>

                <OverflowContainer
                  innerProps={innerFlexProps}
                  direction={allowInnerScrolling ? "vertical" : "none"}
                >
                  {children}
                </OverflowContainer>
              </Flex>

              <div style={OverflowStyle} />
            </motion.div>
          </FloatingFocusManager>
        </ModalBackground>
      )}
    </AnimatePresence>
  );
});
