import { IconButtonProps, PrimitiveButton, useBreakpoint } from "@valence-ui/core";
import { CSSProperties } from "react";

export type FABProps = IconButtonProps & {
  /** Vertical position on the page */
  vPosition?: "top" | "bottom";
  /** Horizontal position on the page */
  hPosition?: "left" | "right";
  /** The distance from the edge of the page */
  offset?: number;

  /** Sets `z-index` css property */
  zIndex?: CSSProperties["zIndex"];
};

export function FAB(props: FABProps) {
  const breakpoint = useBreakpoint();


  // Defaults
  const {
    vPosition = "bottom",
    hPosition = "right",
    offset = 20,
    zIndex = 100,

    variant = "filled",
    square = true,
    shadow = true,
    radius = "xl",

    children,
    style,
    ...rest
  } = props;


  // Styles
  const FABStyle: CSSProperties = {
    position: "fixed",
    zIndex: zIndex,
    bottom: vPosition === "bottom" ? breakpoint.isMobile ? offset + 60 : offset : undefined,
    top: vPosition === "top" ? offset : undefined,
    left: hPosition === "left" ? offset : undefined,
    right: hPosition === "right" ? offset : undefined,

    ...style
  }


  return (
    <PrimitiveButton
      variant={variant}
      square={square}
      shadow={shadow}
      radius={radius}

      style={FABStyle}
      {...rest}
    >
      {children}
    </PrimitiveButton>
  )
}