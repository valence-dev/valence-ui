/** @jsxImportSource @emotion/react */
import { forwardRef } from "react";
import { Disclosure, MakeResponsive, useColors, useResponsiveProps, useValence } from "../../..";
import { motion } from "framer-motion";
import { GenericOverlayBackgroundProps } from "@valence-ui/utils";
import { css } from "@emotion/react";
import { FloatingPortal } from "@floating-ui/react";

export type ModalBackgroundProps =
  GenericOverlayBackgroundProps
  & {
    /** A disclosure to specify state information about the modal */
    disclosure: Disclosure;
  }


export const ModalBackground = forwardRef(function ModalBackground(
  props: MakeResponsive<ModalBackgroundProps>,
  ref: any
) {
  const theme = useValence();
  const { getHex } = useColors();


  // Defaults
  const {
    disclosure,
    closeOnClick = true,
    backdropFilter = "blur",

    backgroundColor = "permaBlack",
    padding = theme.sizeClasses.padding[theme.defaults.size],
    zIndex = 1002,
    children,
    style,

    ...rest
  } = useResponsiveProps<ModalBackgroundProps>(props);


  // Styles
  const OverlayStyle = css({
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    zIndex: zIndex,

    padding: padding,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: backdropFilter === "dot-blur" ? undefined : getHex(backgroundColor, "strong"),
    backgroundImage: backdropFilter !== "dot-blur" ? undefined :
      `radial-gradient(rgba(0, 0, 0, 0) 1px, ${getHex("white")} 1px)`,
    backgroundSize: backdropFilter !== "dot-blur" ? undefined : "4px 4px",
    backdropFilter: backdropFilter === "dot-blur" ? "blur(3px)" :
      backdropFilter === "blur" ? "blur(10px)" : undefined,

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