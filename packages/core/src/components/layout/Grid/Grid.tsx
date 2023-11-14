/** @jsxImportSource @emotion/react */
import { GenericGridItemProps, GenericGridProps, PolymorphicLayout, PolymorphicLayoutProps, getReactiveProp } from "@valence-ui/utils";
import { forwardRef, useContext } from "react";
import { ValenceContext } from "../../../ValenceProvider";
import { useBreakpoint } from "../../../hooks";
import { css } from "@emotion/react";

export type GridProps =
  GenericGridProps
  & PolymorphicLayoutProps;

export type GridItemProps =
  GenericGridItemProps
  & PolymorphicLayoutProps;


const Grid = forwardRef(function Grid(
  props: GridProps,
  ref: any,
) {
  const theme = useContext(ValenceContext);
  const breakpoint = useBreakpoint();


  // Defaults
  const {
    grid = "auto",
    gap = theme.sizeClasses.padding[theme.defaultSize],
    rowGap, columnGap,

    template, templateRows, templateColumns, templateAreas,
    autoRows, autoColumns, autoFlow,
    justifyItems, justifyContent, alignItems, alignContent,

    children,
    style,
    ...rest
  } = props;


  // Styles
  const GridStyle = css({
    display: "grid",

    grid: getReactiveProp(grid, breakpoint),

    gap: getReactiveProp(gap, breakpoint),
    rowGap: getReactiveProp(rowGap, breakpoint),
    columnGap: getReactiveProp(columnGap, breakpoint),

    gridTemplate: getReactiveProp(template, breakpoint),
    gridTemplateRows: getReactiveProp(templateRows, breakpoint),
    gridTemplateColumns: getReactiveProp(templateColumns, breakpoint),
    gridTemplateAreas: getReactiveProp(templateAreas, breakpoint),

    gridAutoRows: getReactiveProp(autoRows, breakpoint),
    gridAutoColumns: getReactiveProp(autoColumns, breakpoint),
    gridAutoFlow: getReactiveProp(autoFlow, breakpoint),

    justifyItems: getReactiveProp(justifyItems, breakpoint),
    justifyContent: getReactiveProp(justifyContent, breakpoint),
    alignItems: getReactiveProp(alignItems, breakpoint),
    alignContent: getReactiveProp(alignContent, breakpoint),

    ...getReactiveProp(style, breakpoint)
  });

  return (
    <PolymorphicLayout
      css={GridStyle}
      ref={ref}
      {...rest}
    >
      {children}
    </PolymorphicLayout>
  )
});

const Item = forwardRef(function GridItem(
  props: GridItemProps,
  ref: any,
) {
  const theme = useContext(ValenceContext);
  const breakpoint = useBreakpoint();


  // Defaults
  const {
    area,
    column = "auto",
    columnStart, columnEnd,
    row = "auto",
    rowStart, rowEnd,

    justify = "stretch",
    align = "stretch",
    place, order,

    children,
    style,
    ...rest
  } = props;


  // Styles
  const ItemStyle = css({
    gridArea: getReactiveProp(area, breakpoint),

    gridColumn: getReactiveProp(column, breakpoint),
    gridColumnStart: getReactiveProp(columnStart, breakpoint),
    gridColumnEnd: getReactiveProp(columnEnd, breakpoint),

    gridRow: getReactiveProp(row, breakpoint),
    gridRowStart: getReactiveProp(rowStart, breakpoint),
    gridRowEnd: getReactiveProp(rowEnd, breakpoint),

    justifySelf: getReactiveProp(justify, breakpoint),
    alignSelf: getReactiveProp(align, breakpoint),
    placeSelf: getReactiveProp(place, breakpoint),

    order: getReactiveProp(order, breakpoint),

    ...getReactiveProp(style, breakpoint)
  });


  return (
    <PolymorphicLayout
      css={ItemStyle}
      ref={ref}
      {...rest}
    >
      {children}
    </PolymorphicLayout>
  )
});


const GridNamespace = Object.assign(Grid, { Item });
export { GridNamespace as Grid };