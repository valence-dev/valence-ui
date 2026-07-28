import { TargetAndTransition, useReducedMotion, Variant } from "motion/react";
import { useContext, useMemo } from "react";
import { AnimationContext } from "../utilities/animation/AnimationContext";

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
  /** Intended to be passed directly to a `motion` component's `initial`
   * prop (not looked up as a variant label — Motion's `initial` prop is the
   * only one of the five that accepts a plain `boolean`).
   *
   * This is `false` unless the component reading it is mounting into an
   * `<AnimationSection />` that has already rendered once, which tells Motion
   * to skip the enter transition and render straight into the `animate` state
   * — its documented fix for elements that shouldn't visually "pop in" en
   * masse when a whole page/modal/scene mounts at once (#47). So the set of
   * components a section renders in its first commit arrives together, while
   * anything that mounts inside it afterwards — a toast, a modal opened by a
   * user action, an interactively-added list item — gets the real transition
   * target and animates in as intended.
   *
   * Typed as `TargetAndTransition` rather than the broader `Variant` (which
   * also allows a `TargetResolver` function): Motion's `initial` prop itself
   * doesn't accept a resolver function, only `boolean | Target |
   * VariantLabels`, and this value is always passed directly to that prop
   * rather than looked up by label.
   */
  initial: TargetAndTransition | false;
  animate: Variant;
  exit: Variant;
  whileHover: Variant;
  whileTap: Variant;
};

type TransitionVariants = {
  initial: TargetAndTransition;
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

  // With no `<AnimationSection />` above it there is nothing granting this
  // component an entrance, so the context's own default (`false`) applies and
  // the transition is suppressed. `<ValenceProvider />` renders a section, so
  // this only bites on a component used outside one entirely.
  const animateEntrance = useContext(AnimationContext);

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

  // Explicit generic (rather than letting `useMemo` infer it): a bare
  // ternary of `Variant | false` otherwise gets widened to `boolean |
  // Variant`, which is not what either branch actually returns.
  const output = useMemo<UseAnimationOutput>(() => {
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
      initial: animateEntrance ? transition.initial : false,
      animate: transition.animate,
      exit: transition.exit,
      whileHover: hover,
      whileTap: tap,
    };
  }, [
    transitionAnimation,
    hoverAnimation,
    tapAnimation,
    reducedMotion,
    animateEntrance,
  ]);

  return output;
}
