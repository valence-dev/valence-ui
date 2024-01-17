/** @jsxImportSource @emotion/react */
import { forwardRef } from "react";
import { useReducedMotion } from "framer-motion";
import { MotionBehaviourProps, getMotionBehaviour } from "../Helpers";
import { Loader } from "../../display/Loader";
import { PolymorphicButton } from "@valence-ui/utils";
import { useValence } from "../../../ValenceProvider";
import { css } from "@emotion/react";
import { GenericButtonProps } from "../../../generics";
import { MakeResponsive, useResponsiveProps } from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";

export type PrimitiveButtonProps =
  GenericButtonProps
  & {
    /** Defines motion behavior for this button. This will automatically be overridden if the user has reduced motion enabled on their device. */
    motion?: MotionBehaviourProps;
  }

export const PrimitiveButton = forwardRef(function PrimitiveButton(
  props: MakeResponsive<PrimitiveButtonProps>,
  ref: any
) {

  const theme = useValence();
  const colors = useColors();

  // Hooks & states
  const reducedMotion = useReducedMotion();


  // Defaults
  const {
    size = theme.defaults.size,
    radius = theme.defaults.radius,
    variant = theme.defaults.variant,

    square = false,
    shadow = false,
    grow = false,

    disabled = false,
    loading = false,

    motion = { onHover: variant === "filled" ? "raise" : undefined, onTap: "bounce" },

    color = theme.primaryColor,
    backgroundColor = color,
    padding = square ? 0 : `0px ${theme.sizeClasses.padding[size]}px`,
    margin = 0,
    height = theme.sizeClasses.height[size],
    width = square ? height : "fit-content",

    style,
    children,
    ...rest
  } = useResponsiveProps<PrimitiveButtonProps>(props);

  const motionBehaviour = getMotionBehaviour(motion, reducedMotion);


  const ButtonStyle = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    flexGrow: grow ? 1 : 0,
    width: width,
    height: height,
    minHeight: height,

    padding: padding,
    margin: margin,
    aspectRatio: square ? 1 : undefined,

    borderRadius: theme.sizeClasses.radius[radius],
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "not-allowed"
      : loading ? "wait"
        : "pointer"
    ,
    boxShadow: shadow ? theme.defaults.shadow : "none",

    transition: `background-color ${theme.defaults.transitionDuration} linear 0s`,
    backgroundColor: colors.getBgHex(backgroundColor, variant, false),
    color: colors.getFgHex(color, variant),

    outline: "none",
    border: "none",
    textDecoration: "none",

    "&:hover": {
      backgroundColor: `${colors.getBgHex(backgroundColor, variant, true)}`,
    },
    "&:focus": {
      outline: `1px solid ${colors.getFgHex(color, variant)}`,
    },

    ...style
  });


  return (
    <PolymorphicButton
      css={ButtonStyle}
      onMouseDown={(event: any) => event.preventDefault()}

      whileHover={motionBehaviour.whileHover}
      whileTap={motionBehaviour.whileTap}

      ref={ref}
      {...rest}
    >
      {loading ?
        <Loader
          color={colors.getFgHex(color, variant)}
        />
        :
        children
      }
    </PolymorphicButton>
  )
});