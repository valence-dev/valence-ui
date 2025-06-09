import { forwardRef } from "react";
import { PrimitiveButtonProps } from "../PrimitiveButton";
import { PrimitiveButton } from "../PrimitiveButton/PrimitiveButton";
import { Text, TextProps } from "../../display";
import { useValence } from "../../../ValenceProvider";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";

export type TextButtonProps = Omit<PrimitiveButtonProps, "children"> & {
  /** Children of this component. */
  children?: string;
  /** Properties to apply to the `Text` component. */
  textProps?: TextProps;
};

export const Button = forwardRef(function Button(
  props: MakeResponsive<TextButtonProps>,
  ref: any,
) {
  const theme = useValence();

  // Defaults
  const {
    size = theme.defaults.size,

    textProps,

    children,
    ...rest
  } = useResponsiveProps<TextButtonProps>(props);

  return (
    <PrimitiveButton size={size} ref={ref} {...rest}>
      <Text size={size} {...textProps} animation={["fade", "blur", "grow"]}>
        {children}
      </Text>
    </PrimitiveButton>
  );
});
