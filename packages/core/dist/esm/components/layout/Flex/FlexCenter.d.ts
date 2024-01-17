/// <reference types="react" />
import { FlexProps } from "./Flex";
export type FlexCenterProps = FlexProps & {
    /** Width of the inner Flex component. Defaults to `50%`. */
    innerWidth?: FlexProps["width"];
    /** Optional props to pass to the inner Flex component. */
    innerProps?: Omit<FlexProps, "children">;
};
export declare const FlexCenter: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    color?: import("csstype").Property.Color | undefined;
    backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
    padding?: import("csstype").Property.Padding<string | number> | undefined;
    margin?: import("csstype").Property.Margin<string | number> | undefined;
    width?: import("csstype").Property.Width<string | number> | undefined;
    height?: import("csstype").Property.Height<string | number> | undefined;
} & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & {
    center?: boolean | undefined;
    direction?: import("csstype").Property.FlexDirection | undefined;
    align?: import("csstype").Property.AlignItems | undefined;
    justify?: import("csstype").Property.JustifyContent | undefined;
    alignSelf?: import("csstype").Property.AlignSelf | undefined;
    gap?: import("csstype").Property.Gap<string | number> | undefined;
    grow?: boolean | undefined;
    wrap?: import("csstype").Property.FlexWrap | undefined;
} & {
    /** Width of the inner Flex component. Defaults to `50%`. */
    innerWidth?: FlexProps["width"];
    /** Optional props to pass to the inner Flex component. */
    innerProps?: Omit<FlexProps, "children"> | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=FlexCenter.d.ts.map