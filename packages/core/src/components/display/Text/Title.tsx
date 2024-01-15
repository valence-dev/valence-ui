import { forwardRef } from "react";
import { TextProps, Text } from "./Text";
import { MakeResponsive, useResponsiveProps, useValence } from "../../..";

export type TitleProps = TextProps & {
  /** Sets the order of the title */
  order?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Title = forwardRef(function Title(
  props: MakeResponsive<TitleProps>,
  ref: any
) {
  const theme = useValence();

  const {
    order = 1,
    component = `h${order ?? 1}`,
    family = theme.getFont("heading"),
    ...rest
  } = useResponsiveProps<TitleProps>(props);


  return (
    <Text
      component={component}
      family={family}

      ref={ref}
      {...theme.titles[order]}
      {...rest}
    >
      {props.children}
    </Text>
  )
});