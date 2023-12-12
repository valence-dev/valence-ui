import { PrimitiveButton, PrimitiveButtonProps } from "../PrimitiveButton"
import { forwardRef } from "react";

export type IconButtonProps =
  PrimitiveButtonProps;

export const IconButton = forwardRef(
  function IconButton(
    props: IconButtonProps,
    ref: any
    ) {
  const {
    square = true,
    children,
    ...rest
  } = props;

  return (
    <PrimitiveButton
      square={square}
      ref={ref}
      {...rest}
    >
      {children}
    </PrimitiveButton>
  )
});