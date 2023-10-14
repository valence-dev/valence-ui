import { ReactNode, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Flex } from "../../layout";
import { Text } from "../Text";
import { GenericClickableProps, getBackgroundColor, getTextColor } from "../../buttons";
import { ComponentSize, FillVariant, GenericLayoutProps, PolymorphicButton, PolymorphicButtonProps } from "@valence-ui/utils";
import { ValenceContext } from "../../../ValenceProvider";

export type AlertContent = {
  /** The title of this alert */
  title: string;
  /** The message of this alert */
  message?: string;
  /** The icon of this alert */
  icon?: ReactNode;
}

export type AlertProps = GenericClickableProps & PolymorphicButtonProps & GenericLayoutProps & {
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
}

export function Alert(props: AlertProps) {
  const theme = useContext(ValenceContext);


  const {
    alert,
    show,
    variant = "filled",
    size = theme.defaultSize,
    radius = theme.defaultRadius,
    shadow = false,

    color = theme.primaryColor,
    backgroundColor = color,
    width = "100%",
    height = "auto",
    padding = theme.sizeClasses.padding[size],

    component = "div",
    style,
    ...rest
  } = props;


  const StyledAlert = styled.button({
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
    textDecoration: "none",

    backgroundColor: getBackgroundColor(backgroundColor, variant, false, theme),
    color: getTextColor(color, variant, theme),
    boxShadow: shadow ? theme.defaultShadow : "none",

    ...style
  })



  return (
    <AnimatePresence>
      {show &&
        <StyledAlert
          as={PolymorphicButton}
          onMouseDown={e => e.preventDefault()}
          component={component}

          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ ease: "backOut" }}

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

        </StyledAlert>
      }
    </AnimatePresence>
  )
}