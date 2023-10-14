import { useContext } from "react";
import { PrimitiveButtonProps } from "../PrimitiveButton";
import { PrimitiveButton } from "../PrimitiveButton/PrimitiveButton";
import { getTextColor } from "../Helpers";
import { Text, TextProps } from "../../display";
import { ValenceContext } from "../../../ValenceProvider";

export type TextButtonProps = PrimitiveButtonProps & {
  /** Children of this component. */
  children?: string;
  /** Properties to apply to the `Text` component. */
  textProps?: TextProps;
}

export function Button(props: TextButtonProps) {
  const theme = useContext(ValenceContext);

  // Defaults
  const {
    size = theme.defaultSize,
    variant = theme.defaultVariant,
    color = theme.primaryColor,
    textProps,
    ...rest
  } = props;


  return (
    <PrimitiveButton
      size={size}
      variant={variant}
      color={color}
      {...rest}
    >
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