/** A list of names for the breakpoint conditions */
export type BreakpointCondition = "desktop" | "desktopThin" | "mobile" | "mobileTall";
export type Breakpoint = {
    isDesktopThin: boolean;
    isMobile: boolean;
    isMobileTall: boolean;
};
/** Checks whether the current breakpoint and condition/s meet
 * @param breakpoint Information about the current breakpoint, as provided by the useBreakpoint hook
 * @param condition The condition or conditions to check
 * @param matchAll Whether all conditions must be met, or just one (only useful when a list of conditions are supplied); defaults to `false`
*/
export declare function meetsBreakpointCondition(breakpoint: Breakpoint, condition: BreakpointCondition | BreakpointCondition[], matchAll?: boolean): boolean;
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