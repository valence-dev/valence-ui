import { CSSProperties, ReactNode, useContext } from "react";
import { TextButtonProps } from "../TextButton";
import { useValence } from "../../..";
import { PrimitiveButton } from "../PrimitiveButton";
import { Text } from "../../display";
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
  const styles: CSSProperties = {
    flexDirection: iconPosition === "left" ? "row" : "row-reverse",
    justifyContent: "flex-start",
    paddingLeft: iconPosition === "left" ? 10 : undefined,
    paddingRight: iconPosition === "right" ? 10 : undefined,
    gap: 8,

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
      {icon}

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