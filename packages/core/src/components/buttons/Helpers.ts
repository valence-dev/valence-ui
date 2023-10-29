import { CSSProperties } from "react";
import { FillVariant } from "@valence-ui/utils";
import { IValenceContext } from "../../ValenceProvider";

/** Retrieves the most suitable background color, given the context
 * @param color The color to use
 * @param variant The variant of the button
 * @param hovered Whether the button is hovered
 * @param theme The theme context
 */
export function getBackgroundColor(
  color: CSSProperties["backgroundColor"],
  variant: FillVariant | undefined,
  hovered: boolean,
  theme: IValenceContext
): string {
  const baseColor = theme.getColor(`${color}`);
  if (!baseColor) return `${color}`;

  switch (variant) {
    case "filled": return `${baseColor.base}`;
    case "light": return `${baseColor.base}${hovered ? baseColor.opacity.medium : baseColor.opacity.weak}`;
    case "subtle": return hovered ? `${baseColor.base}${baseColor.opacity.weak}` : "#00000000";
    default: return "#00000000";
  }
}

/** Retrieves the most suitable text color, given the context
 * @param color The color to use
 * @param variant The variant of the button
 * @param theme The theme context
 */
export function getTextColor(
  color: CSSProperties["color"],
  variant: FillVariant | undefined,
  theme: IValenceContext
): string {
  if (variant === "filled") {
    if (color === "white") return `${theme.getColor("black")?.base ?? "#000000"}`;
    return theme.getColor("white")?.base ?? "#FFFFFF";
  }

  const baseColor = theme.getColor(color);
  if (!baseColor) return `${color}`;
  return `${baseColor.base}`;
}



/** Defines expected behaviour for a component with motion behaviour */
export type MotionBehaviourProps = {
  /** Behaviour for while the component is hovered 
   * `grow` = `scale: 1.1`
   * `raise` = `y: -2` (up)
   * `none` = nothing (default)
   */
  onHover?: "grow" | "raise" | "none";
  /** Behaviour for while the component is being tapped
   * `shrink` = `scale: 0.75`
   * `bounce` = `y: 2` (down; default)
   */
  onTap?: "shrink" | "bounce";
}

/** Defines the values for motion behaviour */
export type MotionBehaviourValue = {
  scale?: number | string;
  x?: number | string;
  y?: number | string;
  z?: number | string;
}
/** Defines the return type for the `getMotionBehaviour` function */
export type MotionBehaviour = {
  whileHover?: MotionBehaviourValue;
  whileTap?: MotionBehaviourValue
}

/** Retrieves the motion behaviour for this component
 * @param props The expected motion behaviour props of this component
 * @param reducedMotion Whether the user has requested reduced motion
 */
export function getMotionBehaviour(props: MotionBehaviourProps | undefined, reducedMotion: boolean | null): MotionBehaviour {
  if (reducedMotion || !props) return {};

  if (props.onHover === "grow") {
    return {
      whileHover: { scale: 1.1 },
      whileTap: {
        scale: props.onTap === "shrink" ? 0.95 : 1.1,
        y: props.onTap === "bounce" ? 2 : 0,
      }
    }
  } if (props.onHover === "raise") { 
    return {
      whileHover: { y: -2 },
      whileTap: {
        scale: props.onTap === "shrink" ? 0.95 : 1,
        y: props.onTap === "bounce" ? 2 : 0,
      }
    }
  } else {
    return {
      whileTap: {
        scale: props.onTap === "shrink" ? 0.75 : 1,
        y: props.onTap === "bounce" ? 2 : 0,
      }
    }
  }
}