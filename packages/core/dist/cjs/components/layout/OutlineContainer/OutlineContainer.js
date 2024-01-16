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
exports.OutlineContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const display_1 = require("../../display");
const Flex_1 = require("../Flex");
const ValenceProvider_1 = require("../../../ValenceProvider");
const responsive_1 = require("../../../utilities/responsive");
const color_1 = require("../../../utilities/color");
exports.OutlineContainer = (0, react_1.forwardRef)(function OutlineContainer(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const { getHex } = (0, color_1.useColors)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { sticky = true, label, labelProps, spacing = 5, radius = theme.defaults.radius, position = sticky ? "sticky" : "relative", zIndex = sticky ? 151 : undefined, top = (0, responsive_1.useResponsiveProp)(sticky ? { default: spacing * 2, mobile: 75 } : undefined), left = sticky ? spacing * 2 : undefined, right = sticky ? spacing * 2 : undefined, bottom, width = "100%", height, color = "black", children, style } = _a, rest = __rest(_a, ["sticky", "label", "labelProps", "spacing", "radius", "position", "zIndex", "top", "left", "right", "bottom", "width", "height", "color", "children", "style"]);
    const _b = labelProps || {}, { style: labelStyle } = _b, labelRest = __rest(_b, ["style"]);
    // Styles
    const OuterFlexStyle = {
        position: position,
        zIndex: zIndex,
        top: top,
        left: left,
        right: right,
        bottom: bottom,
    };
    const OutlineContainerStyle = Object.assign({ backgroundColor: getHex("white", "strong"), backdropFilter: "blur(5px)", outlineColor: getHex(color, "medium"), outlineWidth: 1, outlineStyle: "solid", padding: spacing, borderRadius: theme.sizeClasses.radius[radius] + spacing }, style);
    const LabelStyle = Object.assign({ backgroundColor: getHex("white", "strong"), backdropFilter: "blur(5px)", padding: `${spacing / 2}px ${spacing * 2}px`, borderRadius: 20 }, labelStyle);
    return ((0, jsx_runtime_1.jsxs)(Flex_1.Flex, { direction: "column", width: width, height: height, style: OuterFlexStyle, gap: spacing / 2, ref: ref, children: [(0, jsx_runtime_1.jsx)(Flex_1.Flex, Object.assign({ direction: "row", width: "100%", height: "100%", style: OutlineContainerStyle, gap: spacing }, rest, { children: children })), label && ((0, jsx_runtime_1.jsx)(Flex_1.Flex, { align: "center", justify: "center", children: (0, jsx_runtime_1.jsx)(display_1.Text, Object.assign({ size: "xs", color: getHex(color, "strong"), align: "center", style: LabelStyle }, labelRest, { children: label })) }))] }));
});
