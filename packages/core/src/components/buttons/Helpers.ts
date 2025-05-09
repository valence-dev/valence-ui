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
};

/** Defines the values for motion behaviour */
export type MotionBehaviourValue = {
  scale?: number | string;
  x?: number | string;
  y?: number | string;
  z?: number | string;
};
/** Defines the return type for the `getMotionBehaviour` function */
export type MotionBehaviour = {
  whileHover?: MotionBehaviourValue;
  whileTap?: MotionBehaviourValue;
};

/** Retrieves the motion behaviour for this component
 * @param props The expected motion behaviour props of this component
 * @param reducedMotion Whether the user has requested reduced motion
 */
export function getMotionBehaviour(
  props: MotionBehaviourProps | undefined,
  reducedMotion: boolean | null
): MotionBehaviour {
  if (reducedMotion || !props) return {};

  if (props.onHover === "grow") {
    return {
      whileHover: { scale: 1.1 },
      whileTap: {
        scale: props.onTap === "shrink" ? 0.95 : 1.1,
        y: props.onTap === "bounce" ? 2 : 0,
      },
    };
  }
  if (props.onHover === "raise") {
    return {
      whileHover: { y: -2 },
      whileTap: {
        scale: props.onTap === "shrink" ? 0.95 : 1,
        y: props.onTap === "bounce" ? 2 : 0,
      },
    };
  } else {
    return {
      whileTap: {
        scale: props.onTap === "shrink" ? 0.75 : 1,
        y: props.onTap === "bounce" ? 2 : 0,
      },
    };
  }
}
