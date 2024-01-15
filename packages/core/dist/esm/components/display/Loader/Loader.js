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
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useResponsiveProps, useValence } from "../../..";
const SIZES = {
    xs: { height: 12, thickness: 2 },
    sm: { height: 14, thickness: 2 },
    md: { height: 16, thickness: 2.5 },
    lg: { height: 20, thickness: 3 },
    xl: { height: 25, thickness: 3.5 },
};
export const Loader = forwardRef(function Loader(props, ref) {
    const theme = useValence();
    // Defaults
    const _a = useResponsiveProps(props), { size = theme.defaults.size, color = theme.primaryColor, style } = _a, rest = __rest(_a, ["size", "color", "style"]);
    // Styles
    const loaderStyle = Object.assign({ width: SIZES[size].height, height: SIZES[size].height, border: `${SIZES[size].thickness}px solid #11181C00`, borderBottomColor: theme.getColorHex(color), borderRadius: "50%", display: "inline-block", boxSizing: "border-box" }, style);
    return (_jsx(motion.div, Object.assign({ style: loaderStyle, animate: { rotate: 360 }, transition: { repeat: Infinity, type: "tween", duration: 0.8, ease: "linear" }, ref: ref }, rest)));
});
