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
exports.Sidebar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@valence-ui/core");
const react_1 = require("react");
const overlays_1 = require("../../overlays");
exports.Sidebar = (0, react_1.forwardRef)(function Sidebar(props, ref) {
    const _a = (0, core_1.useResponsiveProps)(props), { display = (0, core_1.useResponsiveProp)({
        default: "inline",
        mobile: "overlay"
    }), width = 250, height = "100%", backgroundColor = "white", padding = 10, sideSheetProps, style, children } = _a, rest = __rest(_a, ["display", "width", "height", "backgroundColor", "padding", "sideSheetProps", "style", "children"]);
    // Contexts
    const theme = (0, core_1.useValence)();
    const { getHex } = (0, core_1.useColors)();
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
        (0, jsx_runtime_1.jsx)(core_1.Flex, Object.assign({ direction: "column", style: sidebarStyle, ref: ref }, rest, { children: children }))
        :
            (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(core_1.Flex, { style: sidebarReplacementStyle }), display === "overlay" && sideSheetProps &&
                        (0, jsx_runtime_1.jsx)(overlays_1.SideSheet, Object.assign({ display: "overlay", direction: "left" }, sideSheetProps, { children: children }))] }));
});
