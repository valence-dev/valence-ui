/** @jsxImportSource @emotion/react */
import {
  GenericGridItemProps,
  GenericGridProps,
  PolymorphicLayout,
  PolymorphicLayoutProps,
} from "@valence-ui/utils";
import { forwardRef } from "react";
import { useValence } from "../../../ValenceProvider";
import { css } from "@emotion/react";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";
import { FlexProps } from "../Flex";

export type GridProps = GenericGridProps & PolymorphicLayoutProps;

export type GridItemProps = GenericGridItemProps & PolymorphicLayoutProps;

const Grid = forwardRef(function Grid(
  props: MakeResponsive<GridProps>,
  ref: any
) {
  const theme = useValence();
  const { getHex } = useColors();

  // Defaults
  const {
    rows,
    columns,
    grid = "auto",
    gap = theme.sizeClasses.padding[theme.defaults.size],
    rowGap,
    columnGap,

    template,
    templateAreas,
    autoRows,
    autoColumns,
    autoFlow,
    justifyItems,
    justifyContent,
    alignItems,
    alignContent,

    backgroundColor,
    color,
    padding,
    margin,
    width,
    height,
    style,

    children,
    ...rest
  } = useResponsiveProps<GridProps>(props);

  // minmax(0, 1fr) stops bad behavior on webkit browsers
  const templateRows =
    typeof rows === "number"
      ? `repeat(${rows}, minmax(0, 1fr))`
      : rows ?? "minmax(0, 1fr)";
  const templateColumns =
    typeof columns === "number"
      ? `repeat(${columns}, minmax(0, 1fr))`
      : columns ?? "minmax(0, 1fr)";

  // Styles
  const GridStyle = css({
    display: "grid",

    grid: grid,

    gap: gap,
    rowGap: rowGap,
    columnGap: columnGap,

    gridTemplate: template,
    gridTemplateRows: templateRows,
    gridTemplateColumns: templateColumns,
    gridTemplateAreas: templateAreas,

    gridAutoRows: autoRows,
    gridAutoColumns: autoColumns,
    gridAutoFlow: autoFlow,

    justifyItems: justifyItems,
    justifyContent: justifyContent,
    alignItems: alignItems,
    alignContent: alignContent,

    backgroundColor: getHex(backgroundColor),
    color: getHex(color),
    padding: padding,
    margin: margin,
    width: width,
    height: height,

    ...style,
  });

  return (
    <PolymorphicLayout css={GridStyle} ref={ref} {...rest}>
      {children}
    </PolymorphicLayout>
  );
});

const Item = forwardRef(function GridItem(
  props: MakeResponsive<GridItemProps>,
  ref: any
) {
  const { getHex } = useColors();

  // Defaults
  const {
    area,
    column = "auto",
    columnStart,
    columnEnd,
    row = "auto",
    rowStart,
    rowEnd,

    justify = "stretch",
    align = "stretch",
    place,
    order,

    backgroundColor,
    color,
    padding,
    margin,
    width,
    height,
    style,

    children,
    ...rest
  } = useResponsiveProps<GridItemProps>(props);

  // Styles
  const ItemStyle = css({
    gridArea: area,

    gridColumn: column,
    gridColumnStart: columnStart,
    gridColumnEnd: columnEnd,

    gridRow: row,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd,

    justifySelf: justify,
    alignSelf: align,
    placeSelf: place,

    order: order,

    backgroundColor: getHex(backgroundColor),
    color: getHex(color),
    padding: padding,
    margin: margin,
    width: width,
    height: height,

    ...style,
  });

  return (
    <PolymorphicLayout css={ItemStyle} ref={ref} {...rest}>
      {children}
    </PolymorphicLayout>
  );
});

const GridNamespace = Object.assign(Grid, { Item });
export { GridNamespace as Grid };
