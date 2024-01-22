import { useValence } from "../../ValenceProvider";
import { useWindowSize } from "usehooks-ts";
/** A hook that returns the current responsive breakpoint. This hook
 * is the replacement for the now-depreciated `UseBreakpoint` hook from
 * previous versions of Valence.
 *
 * This hook will use breakpoints defined in the `ValenceProvider` to
 * determine the current breakpoint.
*/
export function useBreakpoint() {
    const { breakpoints } = useValence();
    const { width } = useWindowSize();
    const isMobile = width <= breakpoints.mobileWidth;
    const isTablet = width <= breakpoints.tabletWidth
        && width > breakpoints.mobileWidth;
    const isDefault = width <= breakpoints.desktopLargeWidth
        && width > breakpoints.tabletWidth;
    const isDesktopLarge = width <= breakpoints.tvWidth
        && width > breakpoints.desktopLargeWidth;
    const isTV = width > breakpoints.tvWidth;
    const breakpoint = {
        isMobile,
        isTablet,
        isDefault,
        isDesktopLarge,
        isTV,
    };
    return breakpoint;
}
