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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useContext } from "react";
import { Text } from "../../display";
import { Flex } from "../Flex";
import { ValenceContext } from "../../../ValenceProvider";
import { useBreakpoint } from "../../../hooks";
import { getReactiveProp } from "@valence-ui/utils";
export const OutlineContainer = forwardRef(function OutlineContainer(props, ref) {
    const theme = useContext(ValenceContext);
    const breakpoint = useBreakpoint();
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
    const OutlineContainerStyle = Object.assign({ outlineColor: theme.getColorHex(getReactiveProp(color, breakpoint), "medium"), outlineWidth: 1, outlineStyle: "solid", padding: spacing, borderRadius: theme.sizeClasses.radius[radius] + spacing }, style);
    const LabelStyle = Object.assign({ width: "100%" }, labelStyle);
    return (_jsxs(Flex, { direction: "column", width: width, height: height, style: OuterFlexStyle, gap: spacing, ref: ref, children: [_jsx(Flex, Object.assign({ direction: "row", width: "100%", height: "100%", style: OutlineContainerStyle, gap: spacing }, rest, { children: children })), label && (_jsx(Text, Object.assign({ size: "xs", color: theme.getColorHex(getReactiveProp(color, breakpoint), "strong"), style: LabelStyle, align: "center" }, labelRest, { children: label })))] }));
});
