/// <reference types="react" />
/** @jsxImportSource @emotion/react */
import { GenericGridItemProps, GenericGridProps, PolymorphicLayoutProps } from "@valence-ui/utils";
export type GridProps = GenericGridProps & PolymorphicLayoutProps;
export type GridItemProps = GenericGridItemProps & PolymorphicLayoutProps;
declare const GridNamespace: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    style?: import("@valence-ui/utils").ReactiveProp<import("react").CSSProperties> | undefined;
    tabIndex?: import("@valence-ui/utils").ReactiveProp<number> | undefined;
} & {
    backgroundColor?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
    color?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Color | undefined>;
    padding?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
    margin?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
    width?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
    height?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
} & {
    grid?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Grid | undefined>;
    gap?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Gap<string | number> | undefined>;
    rowGap?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.RowGap<string | number> | undefined>;
    columnGap?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.ColumnGap<string | number> | undefined>;
    template?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.GridTemplate | undefined>;
    templateRows?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.GridTemplateRows<string | number> | undefined>;
    templateColumns?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.GridTemplateColumns<string | number> | undefined>;
    templateAreas?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.GridTemplateAreas | undefined>;
    autoRows?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.GridAutoRows<string | number> | undefined>;
    autoColumns?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.GridAutoColumns<string | number> | undefined>;
    autoFlow?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.GridAutoFlow | undefined>;
    justifyItems?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.JustifyItems | undefined>;
    justifyContent?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.JustifyContent | undefined>;
    alignItems?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.AlignItems | undefined>;
    alignContent?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.AlignContent | undefined>;
} & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & import("react").RefAttributes<unknown>> & {
    Item: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
        style?: import("@valence-ui/utils").ReactiveProp<import("react").CSSProperties> | undefined;
        tabIndex?: import("@valence-ui/utils").ReactiveProp<number> | undefined;
    } & {
        backgroundColor?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
        color?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Color | undefined>;
        padding?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
        margin?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
        width?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
        height?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
    } & {
        area?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.GridArea | undefined>;
        column?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.GridColumn | undefined>;
        columnStart?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.GridColumnStart | undefined>;
        columnEnd?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.GridColumnEnd | undefined>;
        row?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.GridRow | undefined>;
        rowStart?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.GridRowStart | undefined>;
        rowEnd?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.GridRowEnd | undefined>;
        justify?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.JustifySelf | undefined>;
        align?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.AlignSelf | undefined>;
        place?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.PlaceSelf | undefined>;
        order?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Order | undefined>;
    } & import("@valence-ui/utils").PolymorphicElementProps & {
        css?: any;
    } & import("react").RefAttributes<unknown>>;
};
export { GridNamespace as Grid };
//# sourceMappingURL=Grid.d.ts.map