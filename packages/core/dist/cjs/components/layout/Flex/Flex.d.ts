/** @jsxImportSource @emotion/react */
import { CSSProperties } from "react";
import { MakeResponsive } from "../../..";
import { GenericLayoutProps, PolymorphicLayoutProps } from "@valence-ui/utils";
export type FlexProps = GenericLayoutProps & PolymorphicLayoutProps & {
    /** Sets `flex-direction` css property */
    direction?: CSSProperties["flexDirection"];
    /** Sets `align-items` css property */
    align?: CSSProperties["alignItems"];
    /** Sets `justify-content` css property */
    justify?: CSSProperties["justifyContent"];
    /** Sets `align-self` css property */
    alignSelf?: CSSProperties["alignSelf"];
    /** Sets `gap` css property */
    gap?: CSSProperties["gap"];
    /** Sets the `flex-wrap` property */
    wrap?: CSSProperties["flexWrap"];
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;
    /** A shorthand property that sets both `align` and `justify` to `center`. */
    center?: boolean;
};
/** A basic formattable flexbox component that accepts many common flexbox properties. This component is also reactive, thus it will accept both a single value and an object of values that will be applied at different breakpoints. */
export declare const Flex: import("react").ForwardRefExoticComponent<MakeResponsive<FlexProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Flex.d.ts.map