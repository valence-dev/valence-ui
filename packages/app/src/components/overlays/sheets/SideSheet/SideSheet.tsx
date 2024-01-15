import { CSSProperties, ReactNode, forwardRef, useContext, useEffect } from "react";
import { GenericSheetProps } from "../Generics";
import { DefaultModalHeader, Disclosure, Flex, MakeResponsive, ModalBackground, ValenceContext, useBreakpoint, useDetectKeyDown, useResponsiveProps } from "@valence-ui/core";
import { GenericOverlayBackgroundProps, GenericOverlayHeaderProps } from "@valence-ui/utils";
import { useLockedBody } from "usehooks-ts";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export type SideSheetType = "standard" | "overlay";

export type SideSheetProps = GenericSheetProps & {
  type?: SideSheetType;
};

export const SideSheet = forwardRef(function SideSheet(
  props: MakeResponsive<SideSheetProps>,
  ref: any
) {
  const theme = useContext(ValenceContext);


  // Defaults
  const {
    disclosure,
    title,
    header = (props: GenericOverlayHeaderProps) => <DefaultModalHeader
      disclosure={disclosure}
      {...props}
    />,
    type = { default: "standard", desktopThin: "overlay", mobile: "overlay" },

    closeOnOverlayClick = true,
    closeOnEscape = true,
    lockScroll = false,

    radius = "lg",
    withShadow = true,

    backgroundColor = theme.getColorHex("white"),
    color = theme.getColorHex("black"),

    padding = theme.sizeClasses.padding[theme.defaults.size],
    margin = 0,

    width = 350,
    height = "100vh",

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
  } = useResponsiveProps<SideSheetProps>(props);


  // Styles
  const borderRadius = theme.sizeClasses.radius[radius];
  const SheetStyle: CSSProperties = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,

    width: width,
    maxWidth: "100%",
    height: height,

    backgroundColor: backgroundColor,
    color: color,

    padding: padding,
    margin: margin,
    boxSizing: "border-box",

    borderRadius: type !== "overlay" ? undefined :
      `${borderRadius}px 0 0 ${borderRadius}px`,
    boxShadow: withShadow && type === "overlay" ?
      theme.defaults.shadow : undefined,

    borderLeft: type === "overlay" ? undefined :
      `1px solid ${theme.getColorHex("black", "weak")}`,

    overflowX: "hidden",
    overflowY: "auto",

    ...style,
  }


  // Hooks
  useLockedBody(disclosure.opened && lockScroll && type === "overlay", "root");
  useDetectKeyDown(disclosure.close, "Escape", closeOnEscape, [closeOnEscape, close]);


  // Effects
  useEffect(() => {
    // When the overlay is opened and the mode is "standard", we want to attempt to 
    // find and set the right padding of the root element to the width of the sheet
    const element = document.getElementById("root-content");
    if (!element) return;

    if (disclosure.opened && type === "standard") {
      element.style.paddingRight = `calc(30px + ${width}px)`;
    } else {
      element.style.paddingRight = `30px`;
    }

  }, [disclosure.opened])


  return (
    <AnimatePresence>
      {disclosure.opened &&
        <OptionalBackground
          disclosure={disclosure}
          showBackground={type === "overlay"}
          backgroundProps={overlayBackgroundProps}
        >
          <motion.div
            style={SheetStyle}
            onClick={e => e.stopPropagation()}

            initial={{ x: "100%" }}
            animate={{
              x: 0,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                delay: 0.1,
              }
            }}
            exit={{ x: "100%" }}

            ref={ref}
            {...rest}
          >
            <Flex
              direction="column"
              {...flexProps}
            >
              {header({ title })}

              {children}
            </Flex>
          </motion.div>
        </OptionalBackground>
      }
    </AnimatePresence>
  )
});


type OptionalBackgroundProps = {
  children: ReactNode;
  disclosure: Disclosure;
  showBackground: boolean;
  backgroundProps: GenericOverlayBackgroundProps;
}

function OptionalBackground(props: OptionalBackgroundProps) {
  const { children, disclosure, showBackground, backgroundProps } = props;


  return (
    <>
      {
        showBackground ?
          <ModalBackground
            disclosure={disclosure}
            {...backgroundProps}
          >
            {children}
          </ModalBackground>
          :
          children
      }
    </>
  )
}