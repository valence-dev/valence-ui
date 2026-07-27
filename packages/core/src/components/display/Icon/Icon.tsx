import {
  ReactNode,
  cloneElement,
  forwardRef,
  isValidElement,
  useMemo,
} from "react";
import { useValence } from "../../../ValenceProvider";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";
import { TransitionAnimation, useAnimation } from "../../../hooks";
import { motion } from "motion/react";

export type IconProps = {
  /** Size of the icon. Defaults to theme default icon size. */
  size?: number;
  /** Stroke width of the icon. `1.5` by default. */
  stroke?: number;
  /** Color of the icon. Inherits by default. */
  color?: string;

  /** Optional animation properties for this icon. */
  animation?: TransitionAnimation | TransitionAnimation[];

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
  ref: any,
) {
  const theme = useValence();
  const colors = useColors();

  const {
    size = theme.getSize("iconSize", theme.defaults.size),
    stroke = 1.5,
    color,
    animation,
    children,
  } = useResponsiveProps<IconProps>(props);
  const animations = useAnimation({ transitionAnimation: animation });

  // Prepare icon props
  const iconProps = {
    size,
    stroke,
    color: color ? colors.getHex(color) : undefined,
    ref,
  };

  // Always call useMemo to avoid conditional hooks
  const MotionIcon = useMemo(
    () =>
      isValidElement(children)
        ? motion.create((children as any).type)
        : undefined,
    // Only depend on children.type if children is a valid element
    [isValidElement(children) ? (children as any).type : null],
  );

  if (!children) return null;
  if (animation && isValidElement(children) && MotionIcon) {
    // Spread the child's own props first, then iconProps, matching the merge
    // order of `cloneElement(children, iconProps)` below — otherwise the
    // child's className/data-*/aria-*/onClick/etc are silently dropped.
    return (
      <MotionIcon
        {...(children as any).props}
        {...iconProps}
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
      />
    );
  }

  // Anything that is not a single element — a string, a number, a fragment, an
  // array of nodes — cannot be cloned, so it is passed through untouched rather
  // than crashing. Such children carry no icon props to receive anyway.
  if (!isValidElement(children)) return <>{children}</>;

  // No animation, just clone the icon with props
  return cloneElement(children as any, iconProps);
});
