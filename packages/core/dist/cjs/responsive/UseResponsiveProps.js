"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResponsiveProps = void 0;
const ResponsiveProps_1 = require("./ResponsiveProps");
const UseResponsiveBreakpoint_1 = require("./UseResponsiveBreakpoint");
/** A hook that returns the current responsive props based on the current breakpoint.
 * This should be used before destructuring responsive props in a component,
 * and will automatically convert them to their mother type, considering the current
 * breakpoint.
*/
function useResponsiveProps(props) {
    const breakpoint = (0, UseResponsiveBreakpoint_1.useResponsiveBreakpoint)();
    const calculatedProps = (0, ResponsiveProps_1.getResponsiveProps)(props, breakpoint);
    return calculatedProps;
}
exports.useResponsiveProps = useResponsiveProps;
