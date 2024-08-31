import { CSSProperties, ReactNode, forwardRef, useContext, useEffect } from "react";
import { GenericSheetProps } from "../Generics";
import { GenericOverlayBackgroundProps, GenericOverlayHeaderProps } from "@valence-ui/utils";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Flex, FlexProps, OverflowContainer } from "../../../layout";
import { MakeResponsive, useColors, useResponsiveProps } from "../../../../utilities";
import { ValenceContext } from "../../../../ValenceProvider";
import { DefaultModalHeader } from "../../Modal";
import { Disclosure, useDetectKeyDown } from "../../../../hooks";
import { ModalBackground } from "../../ModalBackground";
import { useLockScroll } from "../../../../hooks/UseLockScroll";

export type SideSheetDisplay = "inline" | "overlay";

export type SideSheetProps =
  GenericSheetProps
  & {
    /** The display option for the sidebar. Defaults to `inline` on desktop and 
     * bigger, and `overlay` on mobile and smaller.
     */
    display?: SideSheetDisplay;

    /** The direction that this sidebar will appear from. Direction will only
     * be adhered to if the display type is `overlay`. Otherwise, it will be
     * `right` by default. 
     */
    direction?: "left" | "right";

    /** Optional props to pass to the inner flex component */
    innerFlexProps?: FlexProps;
  };

export const SideSheet = forwardRef(function SideSheet(
  props: MakeResponsive<SideSheetProps>,
  ref: any
) {
  const theme = useContext(ValenceContext);
  const { getHex } = useColors();


  // Defaults
  const {
    disclosure,
    title,
    header = (props: GenericOverlayHeaderProps) => <DefaultModalHeader
      disclosure={disclosure}
      {...props}
    />,
    display = useResponsiveProps({ default: "inline", tablet: "overlay", mobile: "overlay" }),
    direction = "right",

    closeOnOverlayClick = true,
    closeOnEscape = true,
    lockScroll = false,

    radius = "lg",
    withShadow = true,

    backgroundColor = getHex("white"),
    color = getHex("black"),

    padding = theme.sizeClasses.padding[theme.defaults.size],
    margin = 0,

    width = 350,
    height = "100vh",

    flexProps,
    innerFlexProps,
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

  const fixedDirection = display === "overlay" ? direction : "right";


  // Styles
  const borderRadius = theme.sizeClasses.radius[radius];
  const SheetStyle: CSSProperties = {
    position: "fixed",
    top: 0,
    right: fixedDirection === "right" ? 0 : undefined,
    left: fixedDirection === "left" ? 0 : undefined,
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

    borderRadius: display !== "overlay" ? undefined :
      fixedDirection === "right" ?
        `${borderRadius}px 0 0 ${borderRadius}px` :
        `0 ${borderRadius}px ${borderRadius}px 0`,
    boxShadow: withShadow && display === "overlay" ?
      theme.defaults.shadow : undefined,

    borderLeft: `1px solid ${getHex("black", "weak")}`,

    ...style,
  }


  // Hooks
  useLockScroll(disclosure.opened && lockScroll && display === "overlay");
  useDetectKeyDown(disclosure.close, "Escape", closeOnEscape, [closeOnEscape, close]);


  // Effects
  useEffect(() => {
    // When the overlay is opened and the mode is "inline", we want to attempt to 
    // find and set the right padding of the root element to the width of the sheet
    const element = document.getElementById("root-content");
    if (!element) return;

    if (disclosure.opened && display === "inline") {
      element.style.paddingRight = `${width}px`;
    } else {
      element.style.paddingRight = `0px`;
    }

  }, [disclosure.opened])


  return (
    <AnimatePresence>
      {disclosure.opened &&
        <OptionalBackground
          disclosure={disclosure}
          showBackground={display === "overlay"}
          backgroundProps={overlayBackgroundProps}
        >
          <motion.div
            style={SheetStyle}
            onClick={e => e.stopPropagation()}

            initial={{
              x: fixedDirection === "right" ? "100%" : "-100%",
            }}
            animate={{
              x: 0,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                delay: 0.1,
              }
            }}
            exit={{
              x: fixedDirection === "right" ? "100%" : "-100%",
            }}

            ref={ref}
            {...rest}
          >
            {/* Sheet */}
            <Flex
              direction="column"
              height="100%"
              {...flexProps}
            >
              {header({ title })}

              <OverflowContainer
                innerProps={innerFlexProps}
              >
                {children}
              </OverflowContainer>
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