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
    const theme = (0, ValenceProvider_1.useValence)();
    const breakpoint = (0, hooks_1.useBreakpoint)();
    // Defaults
    const { sticky = true, label, labelProps, spacing = 5, radius = theme.defaultRadius, position = sticky ? "sticky" : "relative", zIndex = sticky ? 151 : undefined, top = sticky ? { default: spacing * 2, mobile: 75 } : undefined, left = sticky ? spacing * 2 : undefined, right = sticky ? spacing * 2 : undefined, bottom, width = "100%", height, color = "black", children, style } = props, rest = __rest(props, ["sticky", "label", "labelProps", "spacing", "radius", "position", "zIndex", "top", "left", "right", "bottom", "width", "height", "color", "children", "style"]);
    const _a = labelProps || {}, { style: labelStyle } = _a, labelRest = __rest(_a, ["style"]);
    // Styles
    const OuterFlexStyle = {
        position: (0, utils_1.getReactiveProp)(position, breakpoint),
        zIndex: (0, utils_1.getReactiveProp)(zIndex, breakpoint),
        top: (0, utils_1.getReactiveProp)(top, breakpoint),
        left: (0, utils_1.getReactiveProp)(left, breakpoint),
        right: (0, utils_1.getReactiveProp)(right, breakpoint),
        bottom: (0, utils_1.getReactiveProp)(bottom, breakpoint),
    };
    const OutlineContainerStyle = Object.assign({ backgroundColor: theme.getColorHex("white", "strong"), backdropFilter: "blur(5px)", outlineColor: theme.getColorHex((0, utils_1.getReactiveProp)(color, breakpoint), "medium"), outlineWidth: 1, outlineStyle: "solid", padding: spacing, borderRadius: theme.sizeClasses.radius[radius] + spacing }, style);
    const LabelStyle = Object.assign({ backgroundColor: theme.getColorHex("white", "strong"), backdropFilter: "blur(5px)", padding: `${spacing / 2}px ${spacing * 2}px`, borderRadius: 20 }, labelStyle);
    return ((0, jsx_runtime_1.jsxs)(Flex_1.Flex, { direction: "column", width: width, height: height, style: OuterFlexStyle, gap: spacing / 2, ref: ref, children: [(0, jsx_runtime_1.jsx)(Flex_1.Flex, Object.assign({ direction: "row", width: "100%", height: "100%", style: OutlineContainerStyle, gap: spacing }, rest, { children: children })), label && ((0, jsx_runtime_1.jsx)(Flex_1.Flex, { align: "center", justify: "center", children: (0, jsx_runtime_1.jsx)(display_1.Text, Object.assign({ size: "xs", color: theme.getColorHex((0, utils_1.getReactiveProp)(color, breakpoint), "strong"), align: "center", style: LabelStyle }, labelRest, { children: label })) }))] }));
});
