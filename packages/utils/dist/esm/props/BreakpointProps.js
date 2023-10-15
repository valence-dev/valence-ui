/** Retrieves the best-fitting prop from a ReactProp, given the availability of that prop and the current breakpoint.
 * @param prop The prop to retrieve
 * @param breakpoint Information about the current breakpoint, as provided by the useBreakpoint hook
 * @returns The best-fitting prop, or undefined if no prop is available
 */
export function getReactiveProp(prop, breakpoint) {
    var _a, _b, _c;
    if (prop && prop.hasOwnProperty("default")) {
        //@ts-ignore
        if (breakpoint.isMobileTall)
            return (_b = (_a = prop.mobileTall) !== null && _a !== void 0 ? _a : prop.mobile) !== null && _b !== void 0 ? _b : prop.default;
        //@ts-ignore
        if (breakpoint.isMobile)
            return (_c = prop.mobile) !== null && _c !== void 0 ? _c : prop.default;
        //@ts-ignore
        return prop.default;
    }
    // @ts-ignore
    return prop;
}
