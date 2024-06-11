"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FAB = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@valence-ui/core");
const react_1 = require("react");
exports.FAB = (0, react_1.forwardRef)(function FAB(props, ref) {
    const breakpoint = (0, core_1.useBreakpoint)();
    const theme = (0, core_1.useValence)();
    // Defaults
    const _a = (0, core_1.useResponsiveProps)(props), { vPosition = "bottom", hPosition = "right", offset = 20, zIndex = 100, size, variant = "filled", square = true, shadow = true, radius = "xl", children, style } = _a, rest = __rest(_a, ["vPosition", "hPosition", "offset", "zIndex", "size", "variant", "square", "shadow", "radius", "children", "style"]);
    // Styles
    const FABStyle = Object.assign({ position: "fixed", zIndex: zIndex, bottom: vPosition !== "bottom" ? undefined :
            `calc(env(safe-area-inset-bottom) + ${breakpoint.isMobile ? offset + 60 : offset})`, top: vPosition !== "top" ? undefined :
            `calc(env(safe-area-inset-top) + ${offset})`, left: hPosition !== "left" ? undefined :
            `calc(env(safe-area-inset-left) + ${offset})`, right: hPosition !== "right" ? undefined :
            `calc(env(safe-area-inset-right) + ${offset})` }, style);
    return ((0, jsx_runtime_1.jsx)(core_1.PrimitiveButton, Object.assign({ size: size, variant: variant, square: square, shadow: shadow, radius: radius, style: FABStyle, ref: ref }, rest, { children: (0, jsx_runtime_1.jsx)(core_1.Icon, { size: theme.getSize("iconSize", size), children: children }) })));
});
