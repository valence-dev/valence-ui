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
import { PrimitiveButton, useBreakpoint } from "@valence-ui/core";
export function FAB(props) {
    const breakpoint = useBreakpoint();
    // Defaults
    const { vPosition = "bottom", hPosition = "right", offset = 20, zIndex = 100, variant = "filled", square = true, shadow = true, radius = "xl", children, style } = props, rest = __rest(props, ["vPosition", "hPosition", "offset", "zIndex", "variant", "square", "shadow", "radius", "children", "style"]);
    // Styles
    const FABStyle = Object.assign({ position: "fixed", zIndex: zIndex, bottom: vPosition === "bottom" ? breakpoint.isMobile ? offset + 60 : offset : undefined, top: vPosition === "top" ? offset : undefined, left: hPosition === "left" ? offset : undefined, right: hPosition === "right" ? offset : undefined }, style);
    return (_jsx(PrimitiveButton, Object.assign({ variant: variant, square: square, shadow: shadow, radius: radius, style: FABStyle }, rest, { children: children })));
}
