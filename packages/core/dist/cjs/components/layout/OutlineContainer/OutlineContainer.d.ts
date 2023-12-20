import { CSSProperties } from "react";
import { TextProps } from "../../display";
import { FlexProps } from "../Flex";
import { ComponentSize, GenericReactiveFloatingLayoutProps, ReactiveProp } from "@valence-ui/utils";
export type OutlineContainerProps = GenericReactiveFloatingLayoutProps & FlexProps & {
    /** Determines if this container will stick to the window, or simply be a part of it. `true` by default. */
    sticky?: ReactiveProp<boolean>;
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
    style?: ReactiveProp<CSSProperties> | undefined;
    tabIndex?: ReactiveProp<number> | undefined;
} & {
    backgroundColor?: ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
    color?: ReactiveProp<import("csstype").Property.Color | undefined>;
    padding?: ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
    margin?: ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
    width?: ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
    height?: ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
} & {
    position?: ReactiveProp<import("csstype").Property.Position | undefined>;
    zIndex?: ReactiveProp<import("csstype").Property.ZIndex | undefined>;
    top?: ReactiveProp<import("csstype").Property.Top<string | number> | undefined>;
    right?: ReactiveProp<import("csstype").Property.Right<string | number> | undefined>;
    bottom?: ReactiveProp<import("csstype").Property.Bottom<string | number> | undefined>;
    left?: ReactiveProp<import("csstype").Property.Left<string | number> | undefined>;
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
    /** Determines if this container will stick to the window, or simply be a part of it. `true` by default. */
    sticky?: ReactiveProp<boolean> | undefined;
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