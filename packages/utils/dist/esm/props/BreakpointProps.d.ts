export type Breakpoint = {
    isDesktopThin: boolean;
    isMobile: boolean;
    isMobileTall: boolean;
};
/** A prop that can be responsive to the current breakpoint. Supplying the raw prop without the full `BreakpointSensitive` surrounds will cause that prop to act as `default`. */
export type ReactiveProp<T> = T | {
    default: T;
    desktopThin?: T;
    mobile?: T;
    mobileTall?: T;
};
/** Retrieves the best-fitting prop from a ReactProp, given the availability of that prop and the current breakpoint.
 * @param prop The prop to retrieve
 * @param breakpoint Information about the current breakpoint, as provided by the useBreakpoint hook
 * @returns The best-fitting prop, or undefined if no prop is available
 */
export declare function getReactiveProp<T>(prop: ReactiveProp<T> | undefined, breakpoint: Breakpoint): T;
//# sourceMappingURL=BreakpointProps.d.ts.map