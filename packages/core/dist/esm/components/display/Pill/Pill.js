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
import { IconButton } from "../../buttons";
import { forwardRef } from "react";
import { useValence } from "../../../ValenceProvider";
import { IconX } from "@tabler/icons-react";
import { Text } from "../Text";
import { useResponsiveProps } from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";
const SIZES = {
    xs: { paddingHorizontal: 8, paddingVertical: 2 },
    sm: { paddingHorizontal: 10, paddingVertical: 3 },
    md: { paddingHorizontal: 10, paddingVertical: 3 },
    lg: { paddingHorizontal: 14, paddingVertical: 4 },
    xl: { paddingHorizontal: 14, paddingVertical: 4 },
};
export const Pill = forwardRef(function Pill(props, ref) {
    const theme = useValence();
    const colors = useColors();
    // Defaults
    const _a = useResponsiveProps(props), { size = theme.defaults.size, radius = "xl", variant = theme.defaults.variant, withRemoveButton = false, removeButtonIcon = _jsx(IconX, {}), removeButtonProps, onRemove, textProps, color = "black", backgroundColor = color, padding = SIZES[size].paddingVertical + "px " + SIZES[size].paddingHorizontal + "px", margin, width = "fit-content", height, onClick, style, children } = _a, rest = __rest(_a, ["size", "radius", "variant", "withRemoveButton", "removeButtonIcon", "removeButtonProps", "onRemove", "textProps", "color", "backgroundColor", "padding", "margin", "width", "height", "onClick", "style", "children"]);
    // Styles
    const PillStyle = Object.assign({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "stretch", backgroundColor: colors.getBgHex(backgroundColor, variant, false), color: colors.getFgHex(color, variant), borderRadius: theme.sizeClasses.radius[radius], outline: variant === "subtle" ?
            `1px solid ${colors.getHex(backgroundColor)}`
            : "none", padding: padding, paddingRight: withRemoveButton ? SIZES[size].paddingVertical :
            SIZES[size].paddingHorizontal, gap: SIZES[size].paddingVertical, margin: margin, width: width, height: height, cursor: withRemoveButton ? "pointer" : undefined }, style);
    // Events
    const handleClick = (e) => {
        e.stopPropagation();
        if (!withRemoveButton)
            return;
        onRemove === null || onRemove === void 0 ? void 0 : onRemove();
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    };
    return (_jsxs("div", Object.assign({ onClick: handleClick, style: PillStyle, ref: ref }, rest, { children: [_jsx(Text, { size: size, color: colors.getFgHex(color, variant), children: children }), withRemoveButton && (_jsx(IconButton, Object.assign({ size: size, radius: radius, color: colors.getFgHex(color, variant), variant: "subtle", onClick: handleClick, height: 16 }, removeButtonProps, { children: removeButtonIcon })))] })));
});
