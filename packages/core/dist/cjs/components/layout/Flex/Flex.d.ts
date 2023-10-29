/** @jsxImportSource @emotion/react */
import { CSSProperties } from "react";
import { GenericReactiveLayoutProps, ReactiveProp } from "@valence-ui/utils";
export type FlexProps = GenericReactiveLayoutProps & {
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
    /** **[REACTIVE]** Shorthand for `flex-wrap = "nowrap"` */
    noWrap?: ReactiveProp<boolean>;
};
/** A basic formattable flexbox component that accepts many common flexbox properties. This component is also reactive, thus it will accept both a single value and an object of values that will be applied at different breakpoints. */
export declare function Flex(props: FlexProps): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Flex.d.ts.map