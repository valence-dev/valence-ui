/** @jsxImportSource @emotion/react */
import { GenericClickableEventProps, GenericClickableProps, GenericProps, PolymorphicButton, PolymorphicButtonProps } from "@valence-ui/utils";
import { css } from "@emotion/react";
import { forwardRef } from "react";
import { MakeResponsive, useResponsiveProps } from "../../../utilities/responsive";
import { MotionBehaviourProps, getMotionBehaviour } from "../Helpers";
import { useReducedMotion } from "framer-motion";

export type UnstyledButtonProps =
  PolymorphicButtonProps
  & GenericClickableEventProps
  & GenericClickableProps
  & GenericProps
  & {
    /** Defines motion behavior for this button. This will automatically be overridden if the user has reduced motion enabled on their device. */
    motion?: MotionBehaviourProps;
  }

export const UnstyledButton = forwardRef(function UnstyledButton(
  props: MakeResponsive<UnstyledButtonProps>,
  ref: any
) {
  // Hooks & states
  const reducedMotion = useReducedMotion();


  // Defaults
  const {
    style,
    children,
    motion,
    ...rest
  } = useResponsiveProps<UnstyledButtonProps>(props);

  const motionBehaviour = getMotionBehaviour(motion, reducedMotion);


  // Styles
  const UnstyledButtonStyle = css({
    outline: "none",
    border: "none",
    textDecoration: "none",
    background: "none",
    padding: 0,
    margin: 0,
    ...style,
  })


  return (
    <PolymorphicButton
      css={UnstyledButtonStyle}
      ref={ref}

      whileHover={motionBehaviour.whileHover}
      whileTap={motionBehaviour.whileTap}
      {...rest}
    >
      {children}
    </PolymorphicButton>
  )
});