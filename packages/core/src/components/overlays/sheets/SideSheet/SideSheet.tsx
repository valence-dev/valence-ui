/** @jsxImportSource @emotion/react */
import { ReactNode, forwardRef, useEffect } from "react";
import { GenericSheetProps } from "../Generics";
import {
  GenericOverlayBackgroundProps,
  GenericOverlayHeaderProps,
} from "@valence-ui/utils";
import { AnimatePresence, motion } from "motion/react";
import { Flex, FlexProps } from "../../../layout/Flex";
import { OverflowContainer } from "../../../layout/OverflowContainer";
import {
  AnimationSection,
  MakeResponsive,
  useColors,
  useResponsiveProps,
} from "../../../../utilities";
import { useValence } from "../../../../ValenceProvider";
import { DefaultModalHeader } from "../../Modal";
import { Disclosure, useDetectKeyDown } from "../../../../hooks";
import { ModalBackground } from "../../ModalBackground";
import { useLockScroll } from "../../../../hooks/UseLockScroll";
import { css } from "@emotion/react";

export type SideSheetDisplay = "inline" | "overlay";

export type SideSheetProps = GenericSheetProps & {
  /** The display option for the sidebar. Defaults to `inline` on desktop and
   * bigger, and `overlay` on mobile and smaller.
   */
  display?: SideSheetDisplay;

  /** The direction that this sidebar will appear from. Direction will only
   * be adhered to if the display type is `overlay`. Otherwise, it will be
   * `right` by default.
   */
  direction?: "left" | "right";

  /** The background color */
  backgroundColor?: string;
  /** Optional props to pass to the inner flex component */
  innerFlexProps?: FlexProps;
};

export const SideSheet = forwardRef(function SideSheet(
  props: MakeResponsive<SideSheetProps>,
  ref: any,
) {
  const theme = useValence();
  const { getHex } = useColors();

  // Defaults
  const {
    disclosure,
    title,
    header = (props: GenericOverlayHeaderProps) => (
      <DefaultModalHeader disclosure={disclosure} {...props} />
    ),
    display = useResponsiveProps({
      default: "inline",
      tablet: "overlay",
      mobile: "overlay",
    }),
    direction = "right",

    closeOnOverlayClick = true,
    closeOnEscape = true,
    lockScroll = false,

    radius = "lg",
    withShadow = true,

    backgroundColor = getHex("white"),

    padding = theme.getSize("padding"),
    margin = 0,

    width = 350,
    height = "100vh",

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
  } = useResponsiveProps<SideSheetProps>(props);

  const fixedDirection = display === "overlay" ? direction : "right";

  // Styles
  const borderRadius = theme.sizeClasses.radius[radius];
  const SheetStyle = css({
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

    padding: padding,
    margin: margin,
    boxSizing: "border-box",

    borderRadius:
      display !== "overlay"
        ? undefined
        : fixedDirection === "right"
          ? `${borderRadius}px 0 0 ${borderRadius}px`
          : `0 ${borderRadius}px ${borderRadius}px 0`,
    boxShadow:
      withShadow && display === "overlay"
        ? "0px 10px 30px rgba(0, 0, 0, 0.2)"
        : undefined,

    borderLeft: `1px solid ${getHex("black", "weak")}`,

    ...style,
  });

  // Hooks
  useLockScroll(disclosure.opened && lockScroll && display === "overlay");
  useDetectKeyDown(disclosure.close, "Escape", closeOnEscape, [
    closeOnEscape,
    close,
  ]);

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
  }, [disclosure.opened]);

  return (
    <AnimatePresence>
      {disclosure.opened && (
        <OptionalBackground
          disclosure={disclosure}
          showBackground={display === "overlay"}
          backgroundProps={overlayBackgroundProps}
        >
          <motion.div
            css={SheetStyle}
            onClick={(e) => e.stopPropagation()}
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
              },
            }}
            exit={{
              x: fixedDirection === "right" ? "100%" : "-100%",
            }}
            ref={ref}
            {...rest}
          >
            {/* Sheet. The sheet sliding in is the entrance for everything it
            contains, so the contents arrive with it rather than each animating
            itself in. Anything mounted inside the sheet after it opens still
            animates. */}
            <AnimationSection>
              <Flex direction="column" height="100%" {...flexProps}>
                {header({ title })}

                <OverflowContainer innerProps={innerFlexProps}>
                  {children}
                </OverflowContainer>
              </Flex>
            </AnimationSection>
          </motion.div>
        </OptionalBackground>
      )}
    </AnimatePresence>
  );
});

type OptionalBackgroundProps = {
  children: ReactNode;
  disclosure: Disclosure;
  showBackground: boolean;
  backgroundProps: GenericOverlayBackgroundProps;
};

function OptionalBackground(props: OptionalBackgroundProps) {
  const { children, disclosure, showBackground, backgroundProps } = props;

  return (
    <>
      {showBackground ? (
        <ModalBackground disclosure={disclosure} {...backgroundProps}>
          {children}
        </ModalBackground>
      ) : (
        children
      )}
    </>
  );
}
