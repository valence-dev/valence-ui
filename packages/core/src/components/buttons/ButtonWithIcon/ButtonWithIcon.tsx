import { CSSProperties, ReactNode, forwardRef } from "react";
import { TextButtonProps } from "../TextButton";
import { MakeResponsive, useResponsiveProps, useValence } from "../../..";
import { PrimitiveButton } from "../PrimitiveButton";
import { Icon, Text } from "../../display";
import { getTextColor } from "../Helpers";

export type ButtonWithIconProps = TextButtonProps & {
  /** The icon to include with this button */
  icon: ReactNode;
  /** The position of the icon relative to the text */
  iconPosition?: "left" | "right";
}

export const ButtonWithIcon = forwardRef(function ButtonWithIcon(
  props: MakeResponsive<ButtonWithIconProps>,
  ref: any
  ) {
  const theme = useValence();


  // Defaults
  const {
    icon,
    iconPosition = "left",
    size = theme.defaults.size,
    variant = theme.defaults.variant,
    color = theme.primaryColor,

    style,
    textProps,
    children,
    ...rest
  } = useResponsiveProps<ButtonWithIconProps>(props);


  // Styles
  const padding = theme.getSize("padding", size) as number;
  const styles: CSSProperties = {
    flexDirection: iconPosition === "left" ? "row" : "row-reverse",
    justifyContent: "flex-start",
    paddingLeft: iconPosition === "left" ? padding / 1.5 : undefined,
    paddingRight: iconPosition === "right" ? padding / 1.5 : undefined,
    gap: padding / 2,

    ...style
  }


  return (
    <PrimitiveButton
      size={size}
      variant={variant}
      color={color}
      style={styles}

      ref={ref}
      {...rest}
    >
      <Icon
        size={theme.getSize("iconSize", size) as number}
        color={getTextColor(color, variant, theme)}
      >
        {icon}
      </Icon>

      <Text
        size={size}
        color={getTextColor(color, variant, theme)}
        {...textProps}
      >
        {children}
      </Text>
    </PrimitiveButton>
  )
});