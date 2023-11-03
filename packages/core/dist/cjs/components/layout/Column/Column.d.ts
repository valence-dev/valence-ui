import { ReactiveProp } from "@valence-ui/utils";
import { FlexProps } from "../Flex";
import { CSSProperties } from "react";
export type ColumnProps = FlexProps;
export type ColumnContainerProps = FlexProps & {
    /** **[REACTIVE]** Defines `flex-flow` css property */
    flow?: ReactiveProp<CSSProperties["flexFlow"]>;
};
declare const ColumnNamespace: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    style?: ReactiveProp<CSSProperties> | undefined;
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
        style?: ReactiveProp<CSSProperties> | undefined;
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
    } & {
        /** **[REACTIVE]** Defines `flex-flow` css property */
        flow?: ReactiveProp<CSSProperties["flexFlow"]>;
    } & import("react").RefAttributes<unknown>>;
};
export { ColumnNamespace as Column };
//# sourceMappingURL=Column.d.ts.map