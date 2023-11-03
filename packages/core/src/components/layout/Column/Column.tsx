import { ReactiveProp, getReactiveProp } from "@valence-ui/utils";
import { Flex, FlexProps } from "../Flex";
import { CSSProperties, forwardRef } from "react";
import { useBreakpoint } from "../../../hooks";

export type ColumnProps = FlexProps;
export type ColumnContainerProps = FlexProps & {
  /** **[REACTIVE]** Defines `flex-flow` css property */
  flow?: ReactiveProp<CSSProperties["flexFlow"]>;
}



const Column = forwardRef(function Column(
  props: ColumnProps,
  ref: any
) {
  const {
    direction = "column",
    justify = "center",

    children,
    ...rest
  } = props;


  return (
    <Flex
      direction={direction}
      justify={justify}

      ref={ref}
      {...rest}
    >
      {children}
    </Flex>
  )
});


const Container = forwardRef(function ColumnContainer(
  props: ColumnContainerProps,
  ref: any
) {
  const breakpoint = useBreakpoint();


  const {
    direction = "row",
    justify = "space-between",
    flow,

    style,
    children,
    ...rest
  } = props;


  // Styles
  const ContainerStyle: CSSProperties = {
    flexFlow: getReactiveProp(flow, breakpoint),
    ...style
  }


  return (
    <Flex
      direction={direction}
      justify={justify}
      style={ContainerStyle}
      {...rest}
    >
      {children}
    </Flex>
  )
});


const ColumnNamespace = Object.assign(Column, { Container });
export { ColumnNamespace as Column };