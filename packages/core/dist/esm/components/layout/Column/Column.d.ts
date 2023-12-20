/// <reference types="react" />
import { FlexProps } from "../Flex";
import { GridProps } from "../Grid";
import { GenericReactiveLayoutProps, ReactiveProp } from "@valence-ui/utils";
export type ColumnProps = FlexProps;
export type ColumnContainerProps = GridProps & GenericReactiveLayoutProps & {
    /** Sets the number of columns in the grid. `2` by default */
    columns?: ReactiveProp<number>;
    /** Sets the number of rows in the grid. `1` by default */
    rows?: ReactiveProp<number>;
};
declare const ColumnNamespace: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    style?: ReactiveProp<import("react").CSSProperties> | undefined;
    tabIndex?: ReactiveProp<number> | undefined;
} & {
    backgroundColor?: ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
    color?: ReactiveProp<import("csstype").Property.Color | undefined>;
    padding?: ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
    margin?: ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
    width?: ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
    height?: ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
} & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & {
    direction?: ReactiveProp<import("csstype").Property.FlexDirection | undefined>;
    align?: ReactiveProp<import("csstype").Property.AlignItems | undefined>;
    justify?: ReactiveProp<import("csstype").Property.JustifyContent | undefined>;
    alignSelf?: ReactiveProp<import("csstype").Property.AlignSelf | undefined>;
    gap?: ReactiveProp<import("csstype").Property.Gap<string | number> | undefined>;
    grow?: ReactiveProp<boolean> | undefined;
    wrap?: ReactiveProp<import("csstype").Property.FlexWrap | undefined>;
} & import("react").RefAttributes<unknown>> & {
    Container: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
        style?: ReactiveProp<import("react").CSSProperties> | undefined;
        tabIndex?: ReactiveProp<number> | undefined;
    } & {
        backgroundColor?: ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
        color?: ReactiveProp<import("csstype").Property.Color | undefined>;
        padding?: ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
        margin?: ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
        width?: ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
        height?: ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
    } & {
        grid?: ReactiveProp<import("csstype").Property.Grid | undefined>;
        gap?: ReactiveProp<import("csstype").Property.Gap<string | number> | undefined>;
        rowGap?: ReactiveProp<import("csstype").Property.RowGap<string | number> | undefined>;
        columnGap?: ReactiveProp<import("csstype").Property.ColumnGap<string | number> | undefined>;
        template?: ReactiveProp<import("csstype").Property.GridTemplate | undefined>;
        templateRows?: ReactiveProp<import("csstype").Property.GridTemplateRows<string | number> | undefined>;
        templateColumns?: ReactiveProp<import("csstype").Property.GridTemplateColumns<string | number> | undefined>;
        templateAreas?: ReactiveProp<import("csstype").Property.GridTemplateAreas | undefined>;
        autoRows?: ReactiveProp<import("csstype").Property.GridAutoRows<string | number> | undefined>;
        autoColumns?: ReactiveProp<import("csstype").Property.GridAutoColumns<string | number> | undefined>;
        autoFlow?: ReactiveProp<import("csstype").Property.GridAutoFlow | undefined>;
        justifyItems?: ReactiveProp<import("csstype").Property.JustifyItems | undefined>;
        justifyContent?: ReactiveProp<import("csstype").Property.JustifyContent | undefined>;
        alignItems?: ReactiveProp<import("csstype").Property.AlignItems | undefined>;
        alignContent?: ReactiveProp<import("csstype").Property.AlignContent | undefined>;
    } & import("@valence-ui/utils").PolymorphicElementProps & {
        css?: any;
    } & {
        /** Sets the number of columns in the grid. `2` by default */
        columns?: ReactiveProp<number> | undefined;
        /** Sets the number of rows in the grid. `1` by default */
        rows?: ReactiveProp<number> | undefined;
    } & import("react").RefAttributes<unknown>>;
};
export { ColumnNamespace as Column };
//# sourceMappingURL=Column.d.ts.map