"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBreakpoint = void 0;
const ValenceProvider_1 = require("../ValenceProvider");
const usehooks_ts_1 = require("usehooks-ts");
/** A hook that returns the current responsive breakpoint. This hook
 * is the replacement for the now-depreciated `UseBreakpoint` hook from
 * previous versions of Valence.
 *
 * This hook will use breakpoints defined in the `ValenceProvider` to
 * determine the current breakpoint.
*/
function useBreakpoint() {
    const { breakpoints } = (0, ValenceProvider_1.useValence)();
    const { width } = (0, usehooks_ts_1.useWindowSize)();
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
exports.useBreakpoint = useBreakpoint;
