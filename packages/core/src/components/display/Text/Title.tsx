import { useContext } from "react";
import { TextProps, Text } from "./Text";
import { ValenceContext } from "../../..";

export type TitleProps = TextProps & {
  /** Sets the order of the title */
  order?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Title(props: TitleProps) {
  const theme = useContext(ValenceContext);

  const {
    order = 1,
    component = `h${order ?? 1}`,
    family = theme.getFont("heading"),
    ...rest
  } = props;


  return (
    <Text
      component={component}
      family={family}
      {...theme.titles[order]}
      {...rest}
    >
      {props.children}
    </Text>
  )
}