export type ResponsiveBreakpoint = {
    isMobile: boolean;
    isTablet: boolean;
    isDefault: boolean;
    isDesktopLarge: boolean;
    isTV: boolean;
};
/** A hook that returns the current responsive breakpoint. This hook
 * is the replacement for the now-depreciated `UseBreakpoint` hook from
 * previous versions of Valence.
 *
 * This hook will use breakpoints defined in the `ValenceProvider` to
 * determine the current breakpoint.
*/
export declare function useResponsiveBreakpoint(): ResponsiveBreakpoint;
//# sourceMappingURL=UseResponsiveBreakpoint.d.ts.map