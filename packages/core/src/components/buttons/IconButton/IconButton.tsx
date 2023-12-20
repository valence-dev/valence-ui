import { useValence } from "../../../ValenceProvider";
import { Icon } from "../../display";
import { PrimitiveButton, PrimitiveButtonProps } from "../PrimitiveButton"
import { forwardRef } from "react";

export type IconButtonProps =
  PrimitiveButtonProps;

export const IconButton = forwardRef(function IconButton(
  props: IconButtonProps,
  ref: any
) {
  const {
    size,
    square = true,
    children,
    ...rest
  } = props;

  const theme = useValence();

  return (
    <PrimitiveButton
      size={size}
      square={square}
      ref={ref}
      {...rest}
    >
      <Icon
        size={theme.getSize("iconSize", size) as number}
      >
        {children}
      </Icon>
    </PrimitiveButton>
  )
});