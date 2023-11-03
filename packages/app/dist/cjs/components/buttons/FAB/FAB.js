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
    // Defaults
    const { vPosition = "bottom", hPosition = "right", offset = 20, zIndex = 100, variant = "filled", square = true, shadow = true, radius = "xl", children, style } = props, rest = __rest(props, ["vPosition", "hPosition", "offset", "zIndex", "variant", "square", "shadow", "radius", "children", "style"]);
    // Styles
    const FABStyle = Object.assign({ position: "fixed", zIndex: zIndex, bottom: vPosition === "bottom" ? breakpoint.isMobile ? offset + 60 : offset : undefined, top: vPosition === "top" ? offset : undefined, left: hPosition === "left" ? offset : undefined, right: hPosition === "right" ? offset : undefined }, style);
    return ((0, jsx_runtime_1.jsx)(core_1.PrimitiveButton, Object.assign({ variant: variant, square: square, shadow: shadow, radius: radius, style: FABStyle, ref: ref }, rest, { children: children })));
});
