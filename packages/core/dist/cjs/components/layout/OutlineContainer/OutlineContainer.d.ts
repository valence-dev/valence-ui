import { CSSProperties } from "react";
import { TextProps } from "../../display";
import { FlexProps } from "../Flex";
import { ComponentSize, GenericReactiveFloatingLayoutProps } from "@valence-ui/utils";
export type OutlineContainerProps = GenericReactiveFloatingLayoutProps & FlexProps & {
    /** A label to display below the container */
    label?: string;
    /** Optional props to pass to the label component */
    labelProps?: TextProps & {
        children?: never;
    };
    /** Spacing around the container. `5px` by default */
    spacing?: number;
    /** Size class of the component's radius. Defaults to theme default. */
    radius?: ComponentSize;
};
export declare const OutlineContainer: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    style?: import("@valence-ui/utils").ReactiveProp<CSSProperties> | undefined;
    tabIndex?: import("@valence-ui/utils").ReactiveProp<number> | undefined;
} & {
    backgroundColor?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
    color?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Color | undefined>;
    padding?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
    margin?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
    width?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
    height?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
} & {
    position?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Position | undefined>;
    zIndex?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.ZIndex | undefined>;
    top?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Top<string | number> | undefined>;
    right?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Right<string | number> | undefined>;
    bottom?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Bottom<string | number> | undefined>;
    left?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Left<string | number> | undefined>;
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
} & {
    /** A label to display below the container */
    label?: string | undefined;
    /** Optional props to pass to the label component */
    labelProps?: (import("@valence-ui/utils").GenericProps & import("@valence-ui/utils").GenericClickableProps & import("@valence-ui/utils").PolymorphicElementProps & {
        css?: any;
    } & {
        family?: import("csstype").Property.FontFamily | undefined;
        weight?: import("csstype").Property.FontWeight | undefined;
        fontSize?: import("csstype").Property.FontSize<string | number> | undefined;
        align?: import("csstype").Property.TextAlign | undefined;
        transform?: import("csstype").Property.TextTransform | undefined;
        size?: ComponentSize | undefined;
        color?: import("csstype").Property.Color | undefined;
        italic?: boolean | undefined;
        bold?: boolean | undefined;
        monospace?: boolean | undefined;
    } & {
        children?: undefined;
    }) | undefined;
    /** Spacing around the container. `5px` by default */
    spacing?: number | undefined;
    /** Size class of the component's radius. Defaults to theme default. */
    radius?: ComponentSize | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=OutlineContainer.d.ts.map