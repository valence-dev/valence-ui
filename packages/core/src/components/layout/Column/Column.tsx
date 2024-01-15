import { Flex, FlexProps } from "../Flex";
import { forwardRef } from "react";
import { Grid, GridProps } from "../Grid";
import { GenericReactiveLayoutProps, ReactiveProp, getReactiveProp } from "@valence-ui/utils";
import { useValence } from "../../../ValenceProvider";
import { useBreakpoint } from "../../../hooks";

export type ColumnProps = FlexProps;
export type ColumnContainerProps =
  GridProps
  & GenericReactiveLayoutProps
  & {
    /** Sets the number of columns in the grid. `2` by default */
    columns?: ReactiveProp<number>;
    /** Sets the number of rows in the grid. `1` by default */
    rows?: ReactiveProp<number>;
  };



const Column = forwardRef(function Column(
  props: ColumnProps,
  ref: any
) {
  const theme = useValence();

  // Defaults
  const {
    direction = "column",
    justify = "center",

    color = "black",
    backgroundColor,
    padding = theme.sizeClasses.padding[theme.defaults.size],
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

    
    templateColumns = `repeat(${getReactiveProp(columns, breakpoint)}, 1fr)`,
    templateRows = `repeat(${getReactiveProp(rows, breakpoint)}, 1fr)`,

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