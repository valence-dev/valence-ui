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
import { Icon, PrimitiveButton, useBreakpoint, useResponsiveProps, useValence } from "@valence-ui/core";
import { forwardRef } from "react";
export const FAB = forwardRef(function FAB(props, ref) {
    const breakpoint = useBreakpoint();
    const theme = useValence();
    // Defaults
    const _a = useResponsiveProps(props), { vPosition = "bottom", hPosition = "right", offset = 20, zIndex = 100, size, variant = "filled", square = true, shadow = true, radius = "xl", children, style } = _a, rest = __rest(_a, ["vPosition", "hPosition", "offset", "zIndex", "size", "variant", "square", "shadow", "radius", "children", "style"]);
    // Styles
    const FABStyle = Object.assign({ position: "fixed", zIndex: zIndex, bottom: vPosition !== "bottom" ? undefined :
            `calc(env(safe-area-inset-bottom) + ${breakpoint.isMobile ? offset + 60 : offset}px)`, top: vPosition !== "top" ? undefined :
            `calc(env(safe-area-inset-top) + ${offset}px)`, left: hPosition !== "left" ? undefined :
            `calc(env(safe-area-inset-left) + ${offset}px)`, right: hPosition !== "right" ? undefined :
            `calc(env(safe-area-inset-right) + ${offset}px)` }, style);
    return (_jsx(PrimitiveButton, Object.assign({ size: size, variant: variant, square: square, shadow: shadow, radius: radius, style: FABStyle, ref: ref }, rest, { children: _jsx(Icon, { size: theme.getSize("iconSize", size), children: children }) })));
});
