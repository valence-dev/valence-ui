"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReactiveProp = exports.meetsBreakpointCondition = void 0;
/** @deprecated Checks whether the current breakpoint and condition/s meet
 * @param breakpoint Information about the current breakpoint, as provided by the useBreakpoint hook
 * @param condition The condition or conditions to check
 * @param matchAll Whether all conditions must be met, or just one (only useful when a list of conditions are supplied); defaults to `false`
*/
function meetsBreakpointCondition(breakpoint, condition, matchAll = false) {
    if (Array.isArray(condition)) {
        if (matchAll)
            return condition.every(c => meetsBreakpointCondition(breakpoint, c));
        return condition.some(c => meetsBreakpointCondition(breakpoint, c));
    }
    switch (condition) {
        case "mobile": return breakpoint.isMobile;
        case "mobileTall": return breakpoint.isMobileTall;
        case "desktopThin": return breakpoint.isDesktopThin;
        default: return condition === "desktop";
    }
}
exports.meetsBreakpointCondition = meetsBreakpointCondition;
/** @deprecated Retrieves the best-fitting prop from a ReactProp, given the availability of that prop and the current breakpoint.
 * @param prop The prop to retrieve
 * @param breakpoint Information about the current breakpoint, as provided by the useBreakpoint hook
 * @returns The best-fitting prop, or undefined if no prop is available
 */
function getReactiveProp(prop, breakpoint) {
    var _a, _b, _c, _d;
    if (prop && prop.hasOwnProperty("default")) {
        //@ts-ignore
        if (breakpoint.isMobileTall)
            return (_b = (_a = prop.mobileTall) !== null && _a !== void 0 ? _a : prop.mobile) !== null && _b !== void 0 ? _b : prop.default;
        //@ts-ignore
        if (breakpoint.isMobile)
            return (_c = prop.mobile) !== null && _c !== void 0 ? _c : prop.default;
        //@ts-ignore
        if (breakpoint.isDesktopThin)
            return (_d = prop.desktopThin) !== null && _d !== void 0 ? _d : prop.default;
        //@ts-ignore
        return prop.default;
    }
    // @ts-ignore
    return prop;
}
exports.getReactiveProp = getReactiveProp;
