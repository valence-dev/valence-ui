import { PrimitiveButton, PrimitiveButtonProps } from "../PrimitiveButton"

export type IconButtonProps = PrimitiveButtonProps;

export function IconButton(props: IconButtonProps) {
  const { 
    square = true,
    children,
    ...rest
  } = props;

  return ( 
    <PrimitiveButton
      square={square}
      {...rest}
    >
      {children}
    </PrimitiveButton>
  )
}