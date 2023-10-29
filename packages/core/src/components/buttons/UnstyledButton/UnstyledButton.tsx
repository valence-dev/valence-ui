/** @jsxImportSource @emotion/react */
import { GenericProps, PolymorphicButton, PolymorphicButtonProps } from "@valence-ui/utils";
import { GenericClickableProps } from "../PrimitiveButton";
import { css } from "@emotion/react";

export type UnstyledButtonProps = GenericClickableProps & GenericProps & PolymorphicButtonProps;

export const UnstyledButton = function UnstyledButton(props: UnstyledButtonProps) {


  // Props
  const {
    id,
    style,
    children,
    component = "button",
    ...rest
  } = props;


  // Styles
  const UnstyledButtonStyle = css({
    outline: "none",
    border: "none",
    textDecoration: "none",
    background: "none",
    ...style,
  })


  return (
    <PolymorphicButton
      id={id}
      css={UnstyledButtonStyle}
      component={component}
      {...rest}
    >
      {children}
    </PolymorphicButton>
  )
}