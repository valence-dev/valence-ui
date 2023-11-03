/** @jsxImportSource @emotion/react */
import { ReactNode, forwardRef, useContext } from "react";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import { Flex } from "../../layout";
import { Text } from "../Text";
import { MotionBehaviourProps, getBackgroundColor, getMotionBehaviour, getTextColor } from "../../buttons";
import { CLICKABLE_ELEMENTS, ComponentSize, FillVariant, GenericClickableEventProps, GenericClickableProps, GenericLayoutProps, PolymorphicButton, PolymorphicButtonProps } from "@valence-ui/utils";
import { ValenceContext } from "../../../ValenceProvider";
import { css } from "@emotion/react";

export type AlertContent = {
  /** The title of this alert */
  title: string;
  /** The message of this alert */
  message?: string;
  /** The icon of this alert */
  icon?: ReactNode;
}

export type AlertProps =
  GenericClickableProps
  & GenericClickableEventProps
  & PolymorphicButtonProps
  & GenericLayoutProps
  & {
    /** The content of this alert */
    alert: AlertContent;
    /** Whether to mount and show this alert */
    show?: boolean;

    /** The styling variant of this alert. Defaults to `filled`. */
    variant?: FillVariant;
    /** The size of this alert. Defaults to the theme default size. */
    size?: ComponentSize;
    /** The border size of this alert. Defaults to the theme default border size. */
    radius?: ComponentSize;
    /** Specifies if a shadow will be shown */
    shadow?: boolean;

    /** Defines motion behavior for this button. This will automatically be overridden if the user has reduced motion enabled on their device. */
    motion?: MotionBehaviourProps;
  }

export const Alert = forwardRef(function Alert(
  props: AlertProps,
  ref: any
) {
  const theme = useContext(ValenceContext);

  // Hooks & states
  const reducedMotion = useReducedMotion();


  // Defaults
  const {
    alert,
    show,
    variant = "filled",
    size = theme.defaultSize,
    radius = theme.defaultRadius,
    shadow = false,
    motion,

    color = theme.primaryColor,
    backgroundColor = color,
    padding = theme.sizeClasses.padding[size],
    margin = 0,
    width = "100%",
    height = "auto",

    component = "div",
    style,
    ...rest
  } = props;

  const motionBehaviour = getMotionBehaviour(motion, reducedMotion);


  const AlertStyle = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: padding,

    boxSizing: "border-box",

    width: width,
    height: height,
    padding: padding,
    borderRadius: theme.sizeClasses.radius[radius],

    border: "none",
    outline: variant === "subtle"
      ? `1px solid ${theme.getColorHex(backgroundColor, "medium")}`
      : "none",
    textDecoration: "none",

    backgroundColor: getBackgroundColor(backgroundColor, variant, false, theme),
    color: getTextColor(color, variant, theme),
    boxShadow: shadow ? theme.defaultShadow : "none",
    cursor: CLICKABLE_ELEMENTS.includes(component as string) ? "pointer" : "default",

    ...style
  })



  return (
    <AnimatePresence>
      {show &&
        <PolymorphicButton
          css={AlertStyle}
          onMouseDown={(e: any) => e.preventDefault()}
          component={component}

          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ ease: "backOut" }}
          whileHover={motionBehaviour.whileHover}
          whileTap={motionBehaviour.whileTap}

          ref={ref}
          {...rest}
        >
          {alert.icon}

          <Flex
            direction="column"
            align="stretch"
            gap={padding as number / 2}
          >
            <Text
              bold
              style={{ flexGrow: 1 }}
              color={getTextColor(color, variant, theme)}
              size={size}
            >
              {alert.title}
            </Text>
            <Text
              fontSize={theme.sizeClasses.fontSize[size] as number - 2}
              color={getTextColor(color, variant, theme)}
            >
              {alert.message}
            </Text>
          </Flex>

        </PolymorphicButton>
      }
    </AnimatePresence>
  )
});