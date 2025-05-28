import { useReducedMotion, Variant } from "motion/react";
import { useMemo } from "react";

/** Defines a transition animation that can be applied to a component
 * when it mounts or unmounts. These animations are used to create
 * smooth transitions for components as they enter or leave the DOM.
 *
 * Values:
 * - `fade` - Fades the component in and out
 * - `blur` - Blurs the component in and out
 * - `slide-left` - Slides the component to the left
 * - `slide-right` - Slides the component to the right
 * - `slide-down` - Slides the component to the top
 * - `slide-up` - Slides the component to the bottom
 * - `grow` - Grows the component in size
 */
export type TransitionAnimation =
  | "fade"
  | "blur"
  | "slide-left"
  | "slide-right"
  | "slide-down"
  | "slide-up"
  | "grow";

/** Defines a hover animation that can be applied to a component
 * when the user hovers over it. These animations are used to create
 * interactive effects that respond to user input.
 *
 * Values:
 * - `grow` - Scales the component up slightly
 * - `raise` - Raises the component slightly
 */
export type HoverAnimation = "grow" | "raise";

/** Defines a tap animation that can be applied to a component
 * when the user taps it. These animations are used to create
 * feedback effects that respond to user input.
 *
 * Values:
 * - `shrink` - Scales the component down slightly
 * - `bounce` - Bounces the component down slightly
 */
export type TapAnimation = "shrink" | "bounce";

export type UseAnimationOutput = {
  initial: Variant;
  animate: Variant;
  exit: Variant;
  whileHover: Variant;
  whileTap: Variant;
};

type TransitionVariants = {
  initial: Variant;
  animate: Variant;
  exit: Variant;
};

export type AnimationProps = {
  transitionAnimation?: TransitionAnimation | TransitionAnimation[];
  hoverAnimation?: HoverAnimation | HoverAnimation[];
  tapAnimation?: TapAnimation | TapAnimation[];
};

/** A hook that provides animation variants for components based on user
 * preferences and specified animations.
 *
 * This hook obeys the user's preference for reduced motion.
 *
 * @param transitionAnimation The transition animation to apply when the
 * component mounts or unmounts. This can be a single animation or an array
 * of animations.
 *
 * **Values:**
 * - `fade` - Fades the component in and out
 * - `blur` - Blurs the component in and out
 * - `slide-left` - Slides the component to the left
 * - `slide-right` - Slides the component to the right
 * - `slide-down` - Slides the component to the top
 * - `slide-up` - Slides the component to the bottom
 * @param hoverAnimation The hover animation to apply when the user hovers
 * over the component. This can be a single animation or an array of animations.
 *
 * **Values:**
 * - `grow` - Scales the component up slightly
 * - `raise` - Raises the component slightly
 * @param tapAnimation The tap animation to apply when the user taps
 * the component. This can be a single animation or an array of animations.
 *
 * **Values:**
 * - `shrink` - Scales the component down slightly
 * - `bounce` - Bounces the component down slightly
 */
export function useAnimation({
  transitionAnimation,
  hoverAnimation,
  tapAnimation,
}: AnimationProps): UseAnimationOutput {
  const reducedMotion = useReducedMotion();

  function getTransitionAnimation(
    animation?: TransitionAnimation | TransitionAnimation[],
  ): TransitionVariants {
    function getTransitionVariant(
      animation: TransitionAnimation,
    ): TransitionVariants {
      switch (animation) {
        case "fade":
          return {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
          };
        case "blur":
          return {
            initial: { filter: "blur(2px)" },
            animate: { filter: "blur(0px)" },
            exit: { filter: "blur(2px)" },
          };
        case "slide-right":
          return { initial: { x: -10 }, animate: { x: 0 }, exit: { x: 10 } };
        case "slide-left":
          return { initial: { x: 10 }, animate: { x: 0 }, exit: { x: -10 } };
        case "slide-down":
          return { initial: { y: -10 }, animate: { y: 0 }, exit: { y: 10 } };
        case "slide-up":
          return { initial: { y: 10 }, animate: { y: 0 }, exit: { y: -10 } };
        case "grow":
          return {
            initial: { scale: 0.8 },
            animate: { scale: 1 },
            exit: { scale: 0.8 },
          };
        // No animation
        default:
          return {
            initial: {},
            animate: {},
            exit: {},
          };
      }
    }

    if (!animation) return { initial: {}, animate: {}, exit: {} };

    if (Array.isArray(animation)) {
      return animation.reduce(
        (acc, anim) => ({
          initial: { ...acc.initial, ...getTransitionVariant(anim).initial },
          animate: { ...acc.animate, ...getTransitionVariant(anim).animate },
          exit: { ...acc.exit, ...getTransitionVariant(anim).exit },
        }),
        { initial: {}, animate: {}, exit: {} },
      );
    }

    return getTransitionVariant(animation);
  }

  function getHoverAnimation(
    animation?: HoverAnimation | HoverAnimation[],
  ): Variant {
    if (reducedMotion || !animation) return {};

    function getHoverVariant(anim: HoverAnimation): Variant {
      switch (anim) {
        case "grow":
          return { scale: 1.1 };
        case "raise":
          return { y: -2 };
        default:
          return {};
      }
    }

    if (Array.isArray(animation)) {
      return animation.reduce(
        (acc, anim) => ({ ...acc, ...getHoverVariant(anim) }),
        {},
      );
    }

    return getHoverVariant(animation);
  }

  function getTapAnimation(animation?: TapAnimation | TapAnimation[]): Variant {
    if (reducedMotion || !animation) return {};

    function getTapVariant(anim: TapAnimation): Variant {
      switch (anim) {
        case "shrink":
          return { scale: 0.95 };
        case "bounce":
          return { y: 2 };
        default:
          return {};
      }
    }

    if (Array.isArray(animation)) {
      return animation.reduce(
        (acc, anim) => ({ ...acc, ...getTapVariant(anim) }),
        {},
      );
    }

    return getTapVariant(animation);
  }

  const output = useMemo(() => {
    if (reducedMotion)
      return {
        initial: {},
        animate: {},
        exit: {},
        whileHover: {},
        whileTap: {},
      };

    const transition = getTransitionAnimation(transitionAnimation);
    const hover = getHoverAnimation(hoverAnimation);
    const tap = getTapAnimation(tapAnimation);

    return {
      initial: transition.initial,
      animate: transition.animate,
      exit: transition.exit,
      whileHover: hover,
      whileTap: tap,
    };
  }, [transitionAnimation, hoverAnimation, tapAnimation, reducedMotion]);

  return output;
}
