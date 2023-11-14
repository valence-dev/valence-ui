import { Flex, FlexProps } from "../Flex";
import { forwardRef, useContext } from "react";
import { Grid, GridProps } from "../Grid";
import { GenericReactiveLayoutProps, getReactiveProp } from "@valence-ui/utils";
import { ValenceContext } from "../../../ValenceProvider";
import { useBreakpoint } from "../../../hooks";

export type ColumnProps = FlexProps;
export type ColumnContainerProps =
  GridProps
  & GenericReactiveLayoutProps
  & {
    /** Sets the number of columns in the grid. `2` by default */
    columns?: number;
    /** Sets the number of rows in the grid. `1` by default */
    rows?: number;
  };



const Column = forwardRef(function Column(
  props: ColumnProps,
  ref: any
) {
  const theme = useContext(ValenceContext);

  // Defaults
  const {
    direction = "column",
    justify = "center",

    color = "black",
    backgroundColor,
    padding = theme.sizeClasses.padding[theme.defaultSize],
    margin,
    width,
    height,

    children,
    ...rest
  } = props;


  return (
    <Flex
      direction={direction}
      justify={justify}

      color={color}
      backgroundColor={backgroundColor}
      padding={padding}
      margin={margin}
      width={width}
      height={height}

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


  // Defaults
  const {
    columns = 2,
    rows = 1,

    
    templateColumns = `repeat(${columns}, 1fr)`,
    templateRows = `repeat(${rows}, 1fr)`,

    color = "black",
    backgroundColor,
    padding,
    margin,
    width,
    height,
    
    children,
    ...rest
  } = props;


  // Styles
  const ContainerStyle = { 
    color: getReactiveProp(color, breakpoint),
    backgroundColor: getReactiveProp(backgroundColor, breakpoint),
    padding: getReactiveProp(padding, breakpoint),
    margin: getReactiveProp(margin, breakpoint),
    width: getReactiveProp(width, breakpoint),
    height: getReactiveProp(height, breakpoint),
  }


  return (
    <Grid
      templateColumns={templateColumns}
      style={ContainerStyle}

      ref={ref}
      {...rest}
    >
      {children}
    </Grid>
  )
});


const ColumnNamespace = Object.assign(Column, { Container });
export { ColumnNamespace as Column };