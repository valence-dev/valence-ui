import { ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { ReactiveProp } from "./BreakpointProps";
/** Defines standard sizes for components */
export type ComponentSize = "xs" | "sm" | "md" | "lg" | "xl";
/** A type wrapper that helps define the values for a type used for each Component size */
export type SizeClasses<C> = {
    xs: C;
    sm: C;
    md: C;
    lg: C;
    xl: C;
};
/** Defines standard variants for buttons and other components */
export type FillVariant = "subtle" | "light" | "filled";
/** Basic props that should be exposed to every component */
export type GenericProps = {
    /** Children nodes */
    children?: ReactNode;
    /** Optional additional styles */
    style?: CSSProperties;
    /** Optional ID to provide */
    id?: string;
};
/** Basic layout props that should be exposed to every layout-adjacent component */
export type GenericLayoutProps = GenericProps & {
    /** Sets `background-color` css property */
    backgroundColor?: CSSProperties["backgroundColor"];
    /** Sets `color` css property */
    color?: CSSProperties["color"];
    /** Sets `padding` css property */
    padding?: CSSProperties["padding"];
    /** Sets `margin` css property */
    margin?: CSSProperties["margin"];
    /** Sets `width` css property */
    width?: CSSProperties["width"];
    /** Sets `height` css property */
    height?: CSSProperties["height"];
};
/** Basic props that should be exposed to every component that reacts to the current breakpoint */
export type GenericReactiveProps = GenericProps & {
    /** **[REACTIVE]** Optional additional styles */
    style?: ReactiveProp<CSSProperties>;
};
/** Basic layout props that should be exposed to every layout-adjacent component and reacts to the current breakpoint */
export type GenericReactiveLayoutProps = GenericReactiveProps & {
    /** **[REACTIVE]** Sets `background-color` css property */
    backgroundColor?: ReactiveProp<CSSProperties["backgroundColor"]>;
    /** **[REACTIVE]** Sets `color` css property */
    color?: ReactiveProp<CSSProperties["color"]>;
    /** **[REACTIVE]** Sets `padding` css property */
    padding?: ReactiveProp<CSSProperties["padding"]>;
    /** **[REACTIVE]** Sets `margin` css property */
    margin?: ReactiveProp<CSSProperties["margin"]>;
    /** **[REACTIVE]** Sets `width` css property */
    width?: ReactiveProp<CSSProperties["width"]>;
    /** **[REACTIVE]** Sets `height` css property */
    height?: ReactiveProp<CSSProperties["height"]>;
};
//# sourceMappingURL=GenericProps.d.ts.map