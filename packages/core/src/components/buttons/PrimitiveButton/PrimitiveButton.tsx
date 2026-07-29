/** @jsxImportSource @emotion/react */
import { CSSProperties, forwardRef } from "react";
import { useReducedMotion } from "framer-motion";
import { MotionBehaviourProps, getMotionBehaviour } from "../Helpers";
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
import { UseFloatingProps, useFloating } from "../../../hooks";

export type PrimitiveButtonProps = GenericButtonProps & {
  /** Defines motion behavior for this button. This will automatically be overridden if the user has reduced motion enabled on their device. */
  motion?: MotionBehaviourProps;

  /** Defines floating behavior for this button. */
  float?: UseFloatingProps & {
    position?: CSSProperties["position"];
  };
};

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

    motion = {
      onHover:
        variant === "filled" || variant === "paper" ? "raise" : undefined,
      onTap: "bounce",
    },
    float,

    color = theme.primaryColor,
    backgroundColor = color,
    padding = square ? 0 : `0px ${theme.sizeClasses.padding[size]}px`,
    margin = 0,
    height = theme.sizeClasses.height[size],
    width = square ? height : "fit-content",

    style,
    children,
    component,
    onClick,
    ...rest
  } = useResponsiveProps<PrimitiveButtonProps>(props);

  const motionBehaviour = getMotionBehaviour(motion, reducedMotion);
  const floatBehaviour = useFloating({ ...float });

  // `<button>` elements natively support the `disabled` attribute, which both
  // blocks interaction and removes the element from the tab order. Other
  // elements (e.g. an anchor rendered via `component="a"` or `"link"`)
  // neither support it nor natively block clicks, so they rely on
  // `aria-disabled`, `tabIndex={-1}`, and a click handler that prevents the
  // default action instead.
  const isNativeButton = component === undefined || component === "button";

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
    pointerEvents: disabled ? "none" : undefined,
    boxShadow: shadow ? theme.defaults.shadow : "none",

    transitionProperty: "background-color, border",
    transitionDuration: theme.defaults.transitionDuration,
    transitionTimingFunction: "linear",
    backgroundColor: colors.getBgHex(backgroundColor, variant, false),
    color: colors.getFgHex(color, variant),

    outline: "none",
    border: colors.getBorderHex(color, variant),
    textDecoration: "none",

    ...(float
      ? {
          position: float.position ?? "fixed",
          ...floatBehaviour.style,
        }
      : undefined),

    "&:hover": {
      backgroundColor: `${colors.getBgHex(backgroundColor, variant, true)}`,
    },
    "&:focus": {
      outline: "none",
      border: colors.getBorderHex(color, variant, true),
    },

    ...style,
  });

  return (
    <PolymorphicButton
      component={component}
      css={ButtonStyle}
      onMouseDown={(event: any) => event.preventDefault()}
      onClick={
        disabled && !isNativeButton
          ? (event: any) => event.preventDefault()
          : onClick
      }
      disabled={isNativeButton ? disabled : undefined}
      aria-disabled={disabled}
      tabIndex={disabled && !isNativeButton ? -1 : undefined}
      whileHover={motionBehaviour.whileHover}
      whileTap={motionBehaviour.whileTap}
      ref={ref}
      {...rest}
    >
      {loading ? <Loader color={colors.getFgHex(color, variant)} /> : children}
    </PolymorphicButton>
  );
});
