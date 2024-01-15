import { forwardRef } from "react";
import { PrimitiveButtonProps } from "../PrimitiveButton";
import { PrimitiveButton } from "../PrimitiveButton/PrimitiveButton";
import { getTextColor } from "../Helpers";
import { Text, TextProps } from "../../display";
import { useValence } from "../../../ValenceProvider";
import { MakeResponsive, useResponsiveProps } from "../../../responsive";

export type TextButtonProps =
  PrimitiveButtonProps
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
        color={getTextColor(color, variant, theme)}
        {...textProps}
      >
        {children}
      </Text>
    </PrimitiveButton>
  )
});