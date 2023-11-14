import { CSSProperties } from "react";
import { GenericProps, GenericReactiveProps } from "./Global";
import { ReactiveProp } from "../props";
/** Basic layout props that should be exposed to every layout-adjacent component */
export type GenericLayoutProps = GenericProps & {
    /** Sets `color` css property */
    color?: CSSProperties["color"];
    /** Sets `background-color` css property */
    backgroundColor?: CSSProperties["backgroundColor"];
    /** Sets `padding` css property */
    padding?: CSSProperties["padding"];
    /** Sets `margin` css property */
    margin?: CSSProperties["margin"];
    /** Sets `width` css property */
    width?: CSSProperties["width"];
    /** Sets `height` css property */
    height?: CSSProperties["height"];
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
export type GenericFloatingLayoutProps = GenericLayoutProps & {
    /** Sets `position` css property */
    position?: CSSProperties["position"];
    /** Sets `zIndex` css property */
    zIndex?: CSSProperties["zIndex"];
    /** Sets `top` css property */
    top?: CSSProperties["top"];
    /** Sets `right` css property */
    right?: CSSProperties["right"];
    /** Sets `bottom` css property */
    bottom?: CSSProperties["bottom"];
    /** Sets `left` css property */
    left?: CSSProperties["left"];
};
export type GenericReactiveFloatingLayoutProps = GenericReactiveLayoutProps & {
    /** **[REACTIVE]** Sets `position` css property */
    position?: ReactiveProp<CSSProperties["position"]>;
    /** **[REACTIVE]** Sets `zIndex` css property */
    zIndex?: ReactiveProp<CSSProperties["zIndex"]>;
    /** **[REACTIVE]** Sets `top` css property */
    top?: ReactiveProp<CSSProperties["top"]>;
    /** **[REACTIVE]** Sets `right` css property */
    right?: ReactiveProp<CSSProperties["right"]>;
    /** **[REACTIVE]** Sets `bottom` css property */
    bottom?: ReactiveProp<CSSProperties["bottom"]>;
    /** **[REACTIVE]** Sets `left` css property */
    left?: ReactiveProp<CSSProperties["left"]>;
};
//# sourceMappingURL=Layout.d.ts.map