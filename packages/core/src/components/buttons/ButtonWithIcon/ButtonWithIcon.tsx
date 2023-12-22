import { CSSProperties, ReactNode } from "react";
import { TextButtonProps } from "../TextButton";
import { useValence } from "../../..";
import { PrimitiveButton } from "../PrimitiveButton";
import { Icon, Text } from "../../display";
import { getTextColor } from "../Helpers";

export type ButtonWithIconProps = TextButtonProps & {
  /** The icon to include with this button */
  icon: ReactNode;
  /** The position of the icon relative to the text */
  iconPosition?: "left" | "right";
}

export function ButtonWithIcon(props: ButtonWithIconProps) {
  const theme = useValence();


  // Defaults
  const {
    icon,
    iconPosition = "left",
    size = theme.defaultSize,
    variant = theme.defaultVariant,
    color = theme.primaryColor,

    style,
    textProps,
    ...rest
  } = props;


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
        {props.children}
      </Text>
    </PrimitiveButton>
  )
}