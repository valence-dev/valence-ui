/** @jsxImportSource @emotion/react */
import { CSSProperties, forwardRef, useContext } from "react";
import { Disclosure, ValenceContext } from "../../..";
import { motion } from "framer-motion";
import { GenericProps, PolymorphicLayoutProps } from "@valence-ui/utils";
import { css } from "@emotion/react";
import { FloatingPortal } from "@floating-ui/react";

export type ModalOverlayProps =
  GenericProps
  & PolymorphicLayoutProps
  & {
    /** A disclosure to specify state information about the modal */
    disclosure: Disclosure;

    /** Whether to close this overlay when it is clicked */
    closeOnClick?: boolean;
    /** Whether the contents of the page behind the overlay should be blurred */
    blurBackground?: boolean;

    /** Sets `background-color` css property. Defaults to `permaBlack` */
    backgroundColor?: CSSProperties["backgroundColor"];
    /** Sets `padding` css property. Defaults to theme default */
    padding?: CSSProperties["padding"];
    /** Sets `z-index` css property. Defaults to `200` */
    zIndex?: CSSProperties["zIndex"];
  }


export const ModalOverlay = forwardRef(function ModalOverlay(
  props: ModalOverlayProps,
  ref: any
) {
  const theme = useContext(ValenceContext);


  // Defaults
  const {
    disclosure,
    closeOnClick = true,
    blurBackground = true,

    backgroundColor = "permaBlack",
    padding = theme.sizeClasses.padding[theme.defaultSize],
    zIndex = 500,

    children,
    style,

    ...rest
  } = props;


  // Styles
  const OverlayStyle = css({
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    zIndex: zIndex,
    backgroundColor: theme.getColorHex(backgroundColor, "strong"),
    backdropFilter: blurBackground ? "blur(10px)" : "none",
    padding: padding,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    ...style,
  });


  return (
    <FloatingPortal>
      <motion.div
        css={OverlayStyle}
        onClick={closeOnClick ? disclosure.close : undefined}

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}

        ref={ref}
        {...rest}
      >
        {children}
      </motion.div>
    </FloatingPortal>
  )
});