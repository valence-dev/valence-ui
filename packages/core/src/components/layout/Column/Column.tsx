import { Flex, FlexProps } from "../Flex";
import { forwardRef } from "react";
import { Grid, GridProps } from "../Grid";
import { useValence } from "../../../ValenceProvider";
import { GenericLayoutProps } from "@valence-ui/utils";
import { MakeResponsive, useResponsiveProps } from "../../../utilities/responsive";

export type ColumnProps = FlexProps;
export type ColumnContainerProps =
  GridProps
  & GenericLayoutProps
  & {
    /** Sets the number of columns in the grid. `2` by default */
    columns?: number;
    /** Sets the number of rows in the grid. `1` by default */
    rows?: number;
  };



const Column = forwardRef(function Column(
  props: MakeResponsive<ColumnProps>,
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
  } = useResponsiveProps<ColumnProps>(props);


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
  props: MakeResponsive<ColumnContainerProps>,
  ref: any
) {


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
  } = useResponsiveProps<ColumnContainerProps>(props);


  // Styles
  const ContainerStyle = { 
    color: color,
    backgroundColor: backgroundColor,
    padding: padding,
    margin: margin,
    width: width,
    height: height,
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