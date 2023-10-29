import { ReactiveProp, getReactiveProp } from "@valence-ui/utils";
import { Flex, FlexProps } from "../Flex";
import { CSSProperties } from "react";
import { useBreakpoint } from "../../../hooks";

export type GenericColumnProps = FlexProps;
export type ColumnProps = GenericColumnProps;
export type ColumnContainerProps = FlexProps & { 
  /** **[REACTIVE]** Defines `flex-flow` css property */
  flow?: ReactiveProp<CSSProperties["flexFlow"]>;
}


export const Column = function Column(props: ColumnProps) {
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
      {...rest}
    >
      {children}
    </Flex>
  )
}


Column.Container = function ColumnContainer(props: ColumnContainerProps) {
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
}