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
exports.Loader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const framer_motion_1 = require("framer-motion");
const __1 = require("../../..");
const SIZES = {
    xs: { height: 12, thickness: 2 },
    sm: { height: 14, thickness: 2 },
    md: { height: 16, thickness: 2.5 },
    lg: { height: 20, thickness: 3 },
    xl: { height: 25, thickness: 3.5 },
};
exports.Loader = (0, react_1.forwardRef)(function Loader(props, ref) {
    const theme = (0, __1.useValenceContext)();
    // Defaults
    const { size = theme.defaultSize, color = theme.primaryColor, style } = props, rest = __rest(props, ["size", "color", "style"]);
    // Styles
    const loaderStyle = Object.assign({ width: SIZES[size].height, height: SIZES[size].height, border: `${SIZES[size].thickness}px solid #11181C00`, borderBottomColor: theme.getColorHex(color), borderRadius: "50%", display: "inline-block", boxSizing: "border-box" }, style);
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, Object.assign({ style: loaderStyle, animate: { rotate: 360 }, transition: { repeat: Infinity, type: "tween", duration: 0.8, ease: "linear" }, ref: ref }, rest)));
});
