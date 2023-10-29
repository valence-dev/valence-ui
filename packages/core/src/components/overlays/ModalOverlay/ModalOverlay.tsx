/** @jsxImportSource @emotion/react */
import { CSSProperties, useContext } from "react";
import { ValenceContext } from "../../..";
import { motion } from "framer-motion";
import { GenericProps } from "@valence-ui/utils";
import { css } from "@emotion/react";

export type ModalOverlayProps = GenericProps & {
  /** Whether this overlay is open */
  opened: boolean;
  /** A function to call when this overlay is closed */
  close?: () => void;

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


export function ModalOverlay(props: ModalOverlayProps) {
  const theme = useContext(ValenceContext);


  // Defaults
  const {
    opened,
    close,
    closeOnClick = true,
    blurBackground = true,
    backgroundColor = `${theme.getColor("permaBlack")?.base}${theme.getColor("permaBlack")?.opacity.strong}`,
    padding = theme.sizeClasses.padding[theme.defaultSize],
    zIndex = 200,

    children,
    style,

    ...rest
  } = props;


  // Styles
  const OverlayStyle = css({
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    zIndex: zIndex,
    backgroundColor: backgroundColor,
    backdropFilter: blurBackground ? "blur(10px)" : "none",
    padding: padding,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    ...style,
  });


  return (
    <motion.div
      css={OverlayStyle}
      onClick={closeOnClick ? close : undefined}

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

      {...rest}
    >
      {children}
    </motion.div>
  )
}