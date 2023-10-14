"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBreakpoint = void 0;
const react_1 = require("react");
const usehooks_ts_1 = require("usehooks-ts");
const __1 = require("..");
function useBreakpoint() {
    const theme = (0, react_1.useContext)(__1.ValenceContext);
    const { width, height } = (0, usehooks_ts_1.useWindowSize)();
    const isMobile = width <= theme.breakpoints.mobileWidth;
    const isMobileTall = isMobile && height >= theme.breakpoints.mobileTallHeight;
    return {
        isMobile: isMobile,
        isMobileTall: isMobileTall,
    };
}
exports.useBreakpoint = useBreakpoint;
