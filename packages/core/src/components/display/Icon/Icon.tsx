import React, { ReactNode, forwardRef } from "react";
import { useValence } from "../../../ValenceProvider";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";

export type IconProps = {
  /** Size of the icon. Defaults to theme default icon size. */
  size?: number;
  /** Stroke width of the icon. `1.5` by default. */
  stroke?: number;
  /** Color of the icon. Inherits by default. */
  color?: string;

  children?: ReactNode;
};

/** This is the new wrapper component for Tabler Icons, designed to pass them
 * the necessary props to conform with the theme standards. This component
 * replaces the `useDefaultIconProps` hook.
 *
 * ```tsx
 * <Icon color="black">
 *  <Icon123 />
 * </Icon>
 * ```
 */
export const Icon = forwardRef(function Icon(
  props: MakeResponsive<IconProps>,
  ref: any
) {
  const theme = useValence();
  const colors = useColors();

  const {
    size = theme.getSize("iconSize", theme.defaults.size),
    stroke = 1.5,
    color,
    children,
  } = useResponsiveProps<IconProps>(props);

  if (children === undefined) return children;
  return React.cloneElement(children as any, {
    size: size,
    stroke: stroke,
    color: color ? colors.getHex(color) : undefined,
    ref,
  });
});
