/** @jsxImportSource @emotion/react */
import { CSSProperties, forwardRef } from "react";
import { useReducedMotion } from "motion/react";
import { Loader } from "../../display/Loader";
import { PolymorphicButton } from "@valence-ui/utils";
import { useValence } from "../../../ValenceProvider";
import { css } from "@emotion/react";
import { GenericButtonProps } from "../../../generics";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";
import {
  AnimationProps,
  UseFloatingProps,
  useAnimation,
  useFloating,
} from "../../../hooks";

export type PrimitiveButtonProps = GenericButtonProps & {
  /** Optional animation properties for this button. */
  animation?: AnimationProps;

  /** Defines floating behavior for this button. */
  float?: UseFloatingProps & {
    position?: CSSProperties["position"];
  };
};

export const PrimitiveButton = forwardRef(function PrimitiveButton(
  props: MakeResponsive<PrimitiveButtonProps>,
  ref: any,
) {
  const theme = useValence();
  const colors = useColors();

  // Hooks & states
  const reducedMotion = useReducedMotion();

  // Defaults
  const {
    material = theme.materials.button,
    size = theme.defaults.size,
    radius = theme.defaults.radius,

    square = false,
    shadow = false,
    grow = false,

    disabled = false,
    loading = false,

    animation,
    float,
    padding = square ? 0 : `0px ${theme.sizeClasses.padding[size]}px`,
    margin = 0,
    height = theme.sizeClasses.height[size],
    width = square ? height : "fit-content",

    style,
    children,
    ...rest
  } = useResponsiveProps<PrimitiveButtonProps>(props);

  const animations = useAnimation({
    hoverAnimation: "raise",
    tapAnimation: "bounce",
    ...animation,
  });
  const floatBehaviour = useFloating({ ...float });

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
    cursor: disabled ? "not-allowed" : loading ? "wait" : "pointer",
    boxShadow: shadow ? theme.defaults.shadow : "none",

    transitionProperty: "background-color, border",
    transitionDuration: theme.defaults.transitionDuration,
    transitionTimingFunction: "linear",

    outline: "none",
    textDecoration: "none",

    ...material.setInteractive(true).getStyles(theme, colors),

    ...(float
      ? {
          position: float.position ?? "fixed",
          ...floatBehaviour.style,
        }
      : undefined),

    ...style,
  });

  return (
    <PolymorphicButton
      css={ButtonStyle}
      onMouseDown={(event: any) => event.preventDefault()}
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="whileHover"
      whileTap="whileTap"
      ref={ref}
      {...rest}
    >
      {loading ? <Loader animation={["blur", "fade", "grow"]} /> : children}
    </PolymorphicButton>
  );
});
