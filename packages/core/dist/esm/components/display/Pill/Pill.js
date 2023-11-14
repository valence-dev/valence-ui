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
import { IconButton, getBackgroundColor, getTextColor } from "../../buttons";
import { forwardRef, useContext } from "react";
import { ValenceContext } from "../../../ValenceProvider";
import { IconX } from "@tabler/icons-react";
import { useDefaultIconProps } from "../../../hooks";
import { Text } from "../Text";
const SIZES = {
    xs: { paddingHorizontal: 8, paddingVertical: 2 },
    sm: { paddingHorizontal: 10, paddingVertical: 3 },
    md: { paddingHorizontal: 10, paddingVertical: 3 },
    lg: { paddingHorizontal: 14, paddingVertical: 4 },
    xl: { paddingHorizontal: 14, paddingVertical: 4 },
};
export const Pill = forwardRef(function Pill(props, ref) {
    const theme = useContext(ValenceContext);
    const defaultIconProps = useDefaultIconProps();
    // Defaults
    const { variant = theme.defaultVariant, size = theme.defaultSize, radius = "xl", withRemoveButton = false, removeButtonIcon = _jsx(IconX, Object.assign({}, defaultIconProps.get())), removeButtonProps, onRemove, textProps, color = "black", backgroundColor = color, padding = SIZES[size].paddingVertical + "px " + SIZES[size].paddingHorizontal + "px", margin, width = "fit-content", height, style, children } = props, rest = __rest(props, ["variant", "size", "radius", "withRemoveButton", "removeButtonIcon", "removeButtonProps", "onRemove", "textProps", "color", "backgroundColor", "padding", "margin", "width", "height", "style", "children"]);
    // Styles
    const PillStyle = Object.assign({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "stretch", backgroundColor: getBackgroundColor(backgroundColor, variant, false, theme), color: getTextColor(color, variant, theme), borderRadius: theme.sizeClasses.radius[radius], outline: variant === "subtle" ?
            `1px solid ${theme.getColorHex(backgroundColor, "medium")}`
            : "none", padding: padding, paddingRight: withRemoveButton ? SIZES[size].paddingVertical :
            SIZES[size].paddingHorizontal, gap: SIZES[size].paddingVertical, margin: margin, width: width, height: height, cursor: withRemoveButton ? "pointer" : undefined }, style);
    // Events
    const handleClick = (e) => {
        var _a;
        e.stopPropagation();
        if (!withRemoveButton)
            return;
        onRemove === null || onRemove === void 0 ? void 0 : onRemove();
        (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
    };
    return (_jsxs("div", Object.assign({ onClick: handleClick, style: PillStyle, ref: ref }, rest, { children: [_jsx(Text, { size: size, color: getTextColor(color, variant, theme), children: children }), withRemoveButton && (_jsx(IconButton, Object.assign({ size: size, radius: radius, color: getTextColor(color, variant, theme), variant: "subtle", onClick: handleClick, height: 16 }, removeButtonProps, { children: removeButtonIcon })))] })));
});
