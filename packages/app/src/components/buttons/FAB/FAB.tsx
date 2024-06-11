import { Icon, IconButtonProps, MakeResponsive, PrimitiveButton, useBreakpoint, useResponsiveProps, useValence } from "@valence-ui/core";
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
  props: MakeResponsive<FABProps>,
  ref: any
) {
  const breakpoint = useBreakpoint();
  const theme = useValence();


  // Defaults
  const {
    vPosition = "bottom",
    hPosition = "right",
    offset = 20,
    zIndex = 100,

    size,
    variant = "filled",
    square = true,
    shadow = true,
    radius = "xl",

    children,
    style,
    ...rest
  } = useResponsiveProps<FABProps>(props);


  // Styles
  const FABStyle: CSSProperties = {
    position: "fixed",
    zIndex: zIndex,
    bottom: vPosition !== "bottom" ? undefined :
      `calc(env(safe-area-inset-bottom) + ${breakpoint.isMobile ? offset + 60 : offset})`,
    top: vPosition !== "top" ? undefined :
      `calc(env(safe-area-inset-top) + ${offset})`,
    left: hPosition !== "left" ? undefined :
      `calc(env(safe-area-inset-left) + ${offset})`,
    right: hPosition !== "right" ? undefined :
      `calc(env(safe-area-inset-right) + ${offset})`,

    ...style
  }


  return (
    <PrimitiveButton
      size={size}
      variant={variant}
      square={square}
      shadow={shadow}
      radius={radius}

      style={FABStyle}
      ref={ref}
      {...rest}
    >
      <Icon size={theme.getSize("iconSize", size) as number}>{children}</Icon>
    </PrimitiveButton>
  )
});