import { forwardRef } from "react";
import { PrimitiveButtonProps } from "../PrimitiveButton";
import { PrimitiveButton } from "../PrimitiveButton/PrimitiveButton";
import { Text, TextProps } from "../../display";
import { useValence } from "../../../ValenceProvider";
import { MakeResponsive, useResponsiveProps } from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";

export type TextButtonProps =
  Omit<PrimitiveButtonProps, "children">
  & {
    /** Children of this component. */
    children?: string;
    /** Properties to apply to the `Text` component. */
    textProps?: TextProps;
  }


export const Button = forwardRef(function Button(
  props: MakeResponsive<TextButtonProps>,
  ref: any
) {
  const theme = useValence();
  const colors = useColors();

  // Defaults
  const {
    size = theme.defaults.size,
    variant = theme.defaults.variant,
    color = theme.primaryColor,
    textProps,

    children,
    ...rest
  } = useResponsiveProps<TextButtonProps>(props);


  return (
    <PrimitiveButton
      size={size}
      variant={variant}
      color={color}

      ref={ref}
      {...rest}
    >
      <Text
        size={size}
        color={colors.getFgHex(color, variant)}
        {...textProps}
      >
        {children}
      </Text>
    </PrimitiveButton>
  )
});