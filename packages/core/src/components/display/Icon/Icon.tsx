import React, { ReactNode, forwardRef } from "react";
import { useValence } from "../../../ValenceProvider";

export type IconProps = {
  /** Size of the icon. `20` by default. */
  size?: number;
  /** Stroke width of the icon. `1.5` by default. */
  stroke?: number;
  /** Color of the icon. Inherits by default. */
  color?: string;

  children?: ReactNode;
}


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
  props: IconProps,
  ref: any,
) {
  const {
    size = 20,
    stroke = 1.5,
    color,
    children,
  } = props;

  const theme = useValence();

  return React.cloneElement(children as any, {
    size: size,
    stroke: stroke,
    color: color ? theme.getColorHex(color) : undefined,
    ref,
  })
});