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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, useColors, useResponsiveProp, useResponsiveProps, useValence } from "@valence-ui/core";
import { forwardRef } from "react";
import { SideSheet } from "../../overlays";
export const Sidebar = forwardRef(function Sidebar(props, ref) {
    const _a = useResponsiveProps(props), { display = useResponsiveProp({
        default: "inline",
        mobile: "overlay"
    }), width = 250, height = "100%", backgroundColor = "white", padding = 10, sideSheetProps, style, children } = _a, rest = __rest(_a, ["display", "width", "height", "backgroundColor", "padding", "sideSheetProps", "style", "children"]);
    // Contexts
    const theme = useValence();
    const { getHex } = useColors();
    // Styles
    const borderRadius = theme.sizeClasses.radius[theme.defaults.radius] + 5;
    const sidebarStyle = Object.assign({ width: width, height: height, padding: padding, borderRadius: `${borderRadius}px 0px 0px ${borderRadius}px`, backgroundColor: `${getHex(backgroundColor)}E8` }, style);
    const sidebarReplacementStyle = {
        default: {
            width: borderRadius,
            borderRadius: `${borderRadius}px 0px 0px ${borderRadius}px`,
            backgroundColor: getHex("white"),
        },
        mobile: {
            height: borderRadius,
            borderRadius: `0px 0px ${borderRadius}px ${borderRadius}px`,
            backgroundColor: getHex("white"),
        }
    };
    return (display === "inline" ?
        _jsx(Flex, Object.assign({ direction: "column", style: sidebarStyle, ref: ref }, rest, { children: children }))
        :
            _jsxs(_Fragment, { children: [_jsx(Flex, { style: sidebarReplacementStyle }), display === "overlay" && sideSheetProps &&
                        _jsx(SideSheet, Object.assign({ display: "overlay", direction: "left" }, sideSheetProps, { children: children }))] }));
});
