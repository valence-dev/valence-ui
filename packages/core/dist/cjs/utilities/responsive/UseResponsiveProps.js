"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResponsiveProps = void 0;
const ResponsiveProps_1 = require("./ResponsiveProps");
const UseBreakpoint_1 = require("./UseBreakpoint");
/** A hook that returns the current responsive prop/s based on the current breakpoint.
 * This should be used before destructuring responsive props in a component,
 * and will automatically convert them to their mother type, considering the current
 * breakpoint.
*/
function useResponsiveProps(props) {
    const breakpoint = (0, UseBreakpoint_1.useBreakpoint)();
    const calculatedProps = (0, ResponsiveProps_1.getResponsive)(props, breakpoint);
    return calculatedProps;
}
exports.useResponsiveProps = useResponsiveProps;
