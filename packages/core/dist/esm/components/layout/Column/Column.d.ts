/// <reference types="react" />
import { FlexProps } from "../Flex";
import { GridProps } from "../Grid";
import { GenericReactiveLayoutProps } from "@valence-ui/utils";
export type ColumnProps = FlexProps;
export type ColumnContainerProps = GridProps & GenericReactiveLayoutProps & {
    /** Sets the number of columns in the grid. `2` by default */
    columns?: number;
    /** Sets the number of rows in the grid. `1` by default */
    rows?: number;
};
declare const ColumnNamespace: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    style?: import("@valence-ui/utils").ReactiveProp<import("react").CSSProperties> | undefined;
    tabIndex?: import("@valence-ui/utils").ReactiveProp<number> | undefined;
} & {
    backgroundColor?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
    color?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Color | undefined>;
    padding?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
    margin?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
    width?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
    height?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
} & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & {
    direction?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.FlexDirection | undefined>;
    align?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.AlignItems | undefined>;
    justify?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.JustifyContent | undefined>;
    alignSelf?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.AlignSelf | undefined>;
    gap?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Gap<string | number> | undefined>;
    grow?: import("@valence-ui/utils").ReactiveProp<boolean> | undefined;
    wrap?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.FlexWrap | undefined>;
} & import("react").RefAttributes<unknown>> & {
    Container: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
        style?: import("@valence-ui/utils").ReactiveProp<import("react").CSSProperties> | undefined;
        tabIndex?: import("@valence-ui/utils").ReactiveProp<number> | undefined;
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
    } & {
        backgroundColor?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
        color?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Color | undefined>;
        padding?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
        margin?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
        width?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
        height?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
    } & {
        /** Sets the number of columns in the grid. `2` by default */
        columns?: number | undefined;
        /** Sets the number of rows in the grid. `1` by default */
        rows?: number | undefined;
    } & import("react").RefAttributes<unknown>>;
};
export { ColumnNamespace as Column };
//# sourceMappingURL=Column.d.ts.map