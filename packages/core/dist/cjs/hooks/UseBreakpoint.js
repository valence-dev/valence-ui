"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBreakpoint = void 0;
const usehooks_ts_1 = require("usehooks-ts");
const __1 = require("..");
/** @deprecated Use `useResponsiveBreakpoint` instead!
 */
function useBreakpoint() {
    const theme = (0, __1.useValence)();
    const { width, height } = (0, usehooks_ts_1.useWindowSize)();
    const isDesktopThin = width <= theme.breakpoints.desktopThinWidth
        && width > theme.breakpoints.mobileWidth;
    const isMobile = width <= theme.breakpoints.mobileWidth;
    const isMobileTall = isMobile && height >= theme.breakpoints.mobileTallHeight;
    return {
        isDesktopThin: isDesktopThin,
        isMobile: isMobile,
        isMobileTall: isMobileTall,
    };
}
exports.useBreakpoint = useBreakpoint;
