/** @jsxImportSource @emotion/react */
import { CSSProperties } from "react";
import { GenericReactiveLayoutProps, PolymorphicLayoutProps, ReactiveProp } from "@valence-ui/utils";
export type FlexProps = GenericReactiveLayoutProps & PolymorphicLayoutProps & {
    /** **[REACTIVE]** Sets `flex-direction` css property */
    direction?: ReactiveProp<CSSProperties["flexDirection"]>;
    /** **[REACTIVE]** Sets `align-items` css property */
    align?: ReactiveProp<CSSProperties["alignItems"]>;
    /** **[REACTIVE]** Sets `justify-content` css property */
    justify?: ReactiveProp<CSSProperties["justifyContent"]>;
    /** **[REACTIVE]** Sets `align-self` css property */
    alignSelf?: ReactiveProp<CSSProperties["alignSelf"]>;
    /** **[REACTIVE]** Sets `gap` css property */
    gap?: ReactiveProp<CSSProperties["gap"]>;
    /** **[REACTIVE]** Shorthand for `flex-grow = 1` */
    grow?: ReactiveProp<boolean>;
    /** **[REACTIVE]** Sets the `flex-wrap` property */
    wrap?: ReactiveProp<CSSProperties["flexWrap"]>;
};
/** A basic formattable flexbox component that accepts many common flexbox properties. This component is also reactive, thus it will accept both a single value and an object of values that will be applied at different breakpoints. */
export declare const Flex: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
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
    /** **[REACTIVE]** Sets `flex-direction` css property */
    direction?: ReactiveProp<CSSProperties["flexDirection"]>;
    /** **[REACTIVE]** Sets `align-items` css property */
    align?: ReactiveProp<CSSProperties["alignItems"]>;
    /** **[REACTIVE]** Sets `justify-content` css property */
    justify?: ReactiveProp<CSSProperties["justifyContent"]>;
    /** **[REACTIVE]** Sets `align-self` css property */
    alignSelf?: ReactiveProp<CSSProperties["alignSelf"]>;
    /** **[REACTIVE]** Sets `gap` css property */
    gap?: ReactiveProp<CSSProperties["gap"]>;
    /** **[REACTIVE]** Shorthand for `flex-grow = 1` */
    grow?: ReactiveProp<boolean> | undefined;
    /** **[REACTIVE]** Sets the `flex-wrap` property */
    wrap?: ReactiveProp<CSSProperties["flexWrap"]>;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Flex.d.ts.map