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
const hooks_1 = require("../../../hooks");
const utils_1 = require("@valence-ui/utils");
exports.OutlineContainer = (0, react_1.forwardRef)(function OutlineContainer(props, ref) {
    const theme = (0, react_1.useContext)(ValenceProvider_1.ValenceContext);
    const breakpoint = (0, hooks_1.useBreakpoint)();
    // Defaults
    const { label, labelProps, spacing = 5, radius = theme.defaultRadius, position = "sticky", zIndex = 151, top = spacing, left = spacing, right = spacing, bottom, width = "100%", height, color = "black", children, style } = props, rest = __rest(props, ["label", "labelProps", "spacing", "radius", "position", "zIndex", "top", "left", "right", "bottom", "width", "height", "color", "children", "style"]);
    const _a = labelProps || {}, { style: labelStyle } = _a, labelRest = __rest(_a, ["style"]);
    // Styles
    const OuterFlexStyle = {
        position: position,
        zIndex: zIndex,
        top: top,
        left: left,
        right: right,
        bottom: bottom,
    };
    const OutlineContainerStyle = Object.assign({ outlineColor: theme.getColorHex((0, utils_1.getReactiveProp)(color, breakpoint), "medium"), outlineWidth: 1, outlineStyle: "solid", padding: spacing, borderRadius: theme.sizeClasses.radius[radius] + spacing }, style);
    const LabelStyle = Object.assign({ width: "100%" }, labelStyle);
    return ((0, jsx_runtime_1.jsxs)(Flex_1.Flex, { direction: "column", width: width, height: height, style: OuterFlexStyle, gap: spacing, ref: ref, children: [(0, jsx_runtime_1.jsx)(Flex_1.Flex, Object.assign({ direction: "row", width: "100%", height: "100%", style: OutlineContainerStyle, gap: spacing }, rest, { children: children })), label && ((0, jsx_runtime_1.jsx)(display_1.Text, Object.assign({ size: "xs", color: theme.getColorHex((0, utils_1.getReactiveProp)(color, breakpoint), "strong"), style: LabelStyle, align: "center" }, labelRest, { children: label })))] }));
});
