/** Retrieves the best-fitting prop from a ReactProp, given the availability of that prop and the current breakpoint.
 * @param prop The prop to retrieve
 * @param breakpoint Information about the current breakpoint, as provided by the useBreakpoint hook
 * @returns The best-fitting prop, or undefined if no prop is available
 */
export function getReactiveProp(prop, breakpoint) {
    var _a, _b, _c, _d;
    if (prop && prop.hasOwnProperty("default")) {
        //@ts-ignore
        if (breakpoint.isDesktopThin)
            return (_a = prop.desktopThin) !== null && _a !== void 0 ? _a : prop.default;
        //@ts-ignore
        if (breakpoint.isMobileTall)
            return (_c = (_b = prop.mobileTall) !== null && _b !== void 0 ? _b : prop.mobile) !== null && _c !== void 0 ? _c : prop.default;
        //@ts-ignore
        if (breakpoint.isMobile)
            return (_d = prop.mobile) !== null && _d !== void 0 ? _d : prop.default;
        //@ts-ignore
        return prop.default;
    }
    // @ts-ignore
    return prop;
}
