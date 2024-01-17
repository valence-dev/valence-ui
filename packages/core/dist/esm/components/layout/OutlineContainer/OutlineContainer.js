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
import { forwardRef } from "react";
import { Text } from "../../display";
import { Flex } from "../Flex";
import { useValence } from "../../../ValenceProvider";
import { useResponsiveProp, useResponsiveProps } from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";
export const OutlineContainer = forwardRef(function OutlineContainer(props, ref) {
    const theme = useValence();
    const { getHex } = useColors();
    // Defaults
    const _a = useResponsiveProps(props), { sticky = true, label, labelProps, spacing = 5, radius = theme.defaults.radius, position = sticky ? "sticky" : "relative", zIndex = sticky ? 151 : undefined, top = useResponsiveProp(sticky ? { default: spacing * 2, mobile: 75 } : undefined), left = sticky ? spacing * 2 : undefined, right = sticky ? spacing * 2 : undefined, bottom, width = "100%", height, color = "black", children, style } = _a, rest = __rest(_a, ["sticky", "label", "labelProps", "spacing", "radius", "position", "zIndex", "top", "left", "right", "bottom", "width", "height", "color", "children", "style"]);
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
    return (_jsxs(Flex, { direction: "column", width: width, height: height, style: OuterFlexStyle, gap: spacing / 2, ref: ref, children: [_jsx(Flex, Object.assign({ direction: "row", width: "100%", height: "100%", style: OutlineContainerStyle, gap: spacing }, rest, { children: children })), label && (_jsx(Flex, { alignSelf: "stretch", align: "center", justify: "center", children: _jsx(Text, Object.assign({ size: "xs", color: getHex(color, "strong"), align: "center", style: LabelStyle }, labelRest, { children: label })) }))] }));
});
