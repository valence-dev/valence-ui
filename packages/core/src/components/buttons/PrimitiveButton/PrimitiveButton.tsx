/** @jsxImportSource @emotion/react */
import React, { useContext } from "react";
import { useReducedMotion } from "framer-motion";
import { MotionBehaviourProps, getBackgroundColor, getMotionBehaviour, getTextColor } from "../Helpers";
import { Loader } from "../../display/Loader";
import { ComponentSize, FillVariant, GenericLayoutProps, PolymorphicButton, PolymorphicButtonComponents } from "@valence-ui/utils";
import { ValenceContext } from "../../../ValenceProvider";
import { css } from "@emotion/react";

export type GenericClickableProps = {
  /** Sets `to` property on `Link` polymorphic elements */
  to?: string;
  /** Sets html `href` property on valid elements */
  href?: string;
  /** Sets html `target` property on valid elements */
  target?: string;
  /** Sets html `type` property on valid elements */
  type?: "submit" | "reset" | "button";

  /** Sets `onClick` event */
  onClick?: () => void;
  /** Sets `onMouseEnter` event */
  onMouseEnter?: () => void;
  /** Sets `onMouseLeave` event */
  onMouseLeave?: () => void;
  /** Sets `onMouseDown` event */
  onMouseDown?: (event: any) => void;
  /** Sets `onMouseUp` event */
  onMouseUp?: (event: any) => void;
  /** Sets `onFocus` event */
  onFocus?: () => void;
  /** Sets `onBlur` event */
  onBlur?: () => void;
}


export type PrimitiveButtonProps = GenericClickableProps
  & GenericLayoutProps
  & {
    /** Sets styling variant. Defaults to theme default */
    variant?: FillVariant;
    /** Sets size class. Defaults to theme default */
    size?: ComponentSize;
    /** Sets radius size class. Defaults to theme default */
    radius?: ComponentSize;

    /** Sets `aspect-ratio` css property */
    aspectRatio?: React.CSSProperties["aspectRatio"];
    /** Shorthand for `aspect-ratio = 1` */
    square?: boolean;
    /** Specifies if a shadow will be shown */
    shadow?: boolean;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;

    /** Specifies if this button is disabled */
    disabled?: boolean;
    /** If set, this button will be disabled and its contents replaced with a loader */
    loading?: boolean;

    /** Defines motion behavior for this button. This will automatically be overridden if the user has reduced motion enabled on their device. */
    motion?: MotionBehaviourProps;

    /** An optional addition to allow components to become polymorphic */
    component?: PolymorphicButtonComponents;
  }


export function PrimitiveButton(props: PrimitiveButtonProps) {
  const theme = useContext(ValenceContext);

  // Hooks & states
  const reducedMotion = useReducedMotion();


  // Defaults
  const {
    variant = theme.defaultVariant,
    size = theme.defaultSize,
    radius = theme.defaultRadius,

    square = false,
    aspectRatio = square ? "1 / 1" : undefined,
    shadow = false,
    grow = false,

    disabled = false,
    loading = false,

    motion = { onHover: variant === "filled" ? "raise" : undefined, onTap: "bounce" },

    height = `${theme.sizeClasses.height[size]}px`,
    width = square ? height : "fit-content",
    padding = square ? 0 : `0px ${theme.sizeClasses.padding[size]}px`,
    margin = "0px",
    color = theme.primaryColor,
    backgroundColor = color,
    
    component,

    style,
    children,
    ...rest
  } = props;

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
    aspectRatio: aspectRatio,

    borderRadius: theme.sizeClasses.radius[radius],
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "not-allowed"
      : loading ? "wait"
        : "pointer"
    ,
    boxShadow: shadow ? theme.defaultShadow : "none",

    transition: `background-color ${theme.defaultTransitionDuration} linear 0s`,
    backgroundColor: getBackgroundColor(backgroundColor, variant, false, theme),
    color: getTextColor(color, variant, theme),

    outline: "none",
    border: "none",
    textDecoration: "none",

    "&:hover": {
      backgroundColor: `${getBackgroundColor(backgroundColor, variant, true, theme)}`,
    },
    "&:focus": {
      outline: `1px solid ${getTextColor(color, "light", theme)}`,
    },

    ...style
  });

  
  return (
    <PolymorphicButton
      css={ButtonStyle}
      component={component}
      whileHover={motionBehaviour.whileHover}
      whileTap={motionBehaviour.whileTap}

      onMouseDown={(event: any) => event.preventDefault()}
      {...rest}
    >
      {loading ? <Loader color={getTextColor(color, variant, theme)} /> :
        children
      }
    </PolymorphicButton>
  )
}