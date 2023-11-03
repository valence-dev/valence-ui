import { IconButtonProps, PrimitiveButton, useBreakpoint } from "@valence-ui/core";
import { CSSProperties, forwardRef } from "react";

export type FABProps = IconButtonProps & {
  /** Vertical position of this button on the page. Defaults to `"bottom"` */
  vPosition?: "top" | "bottom";
  /** Horizontal position of this button on the page. Defaults to `"right"` */
  hPosition?: "left" | "right";
  /** The distance in `px` this button sits from the edge of the page. Defaults to `20` */
  offset?: number;

  /** Sets `z-index` css property. Defaults to `100` */
  zIndex?: CSSProperties["zIndex"];
};

export const FAB = forwardRef(function FAB(
  props: FABProps,
  ref: any
) {
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
      ref={ref}
      {...rest}
    >
      {children}
    </PrimitiveButton>
  )
});