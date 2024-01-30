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
import { Image } from "../Image";
import { useValence } from "../../../../ValenceProvider";
import { IconUserCircle } from "@tabler/icons-react";
import { Flex } from "../../../layout";
import { Icon } from "../../Icon";
import { useResponsiveProps } from "../../../../utilities/responsive";
import { useColors } from "../../../../utilities/color";
export const Avatar = forwardRef(function Avatar(props, ref) {
    const theme = useValence();
    const colors = useColors();
    // Defaults
    const _a = useResponsiveProps(props), { color = theme.primaryColor, variant = theme.defaults.variant, placeholder = _jsx(IconUserCircle, {}), square = true, size = theme.defaults.size, outline, secondaryIcon, secondaryIconProps, spanStyle, width = theme.sizeClasses.height[size], height = theme.sizeClasses.height[size], style } = _a, rest = __rest(_a, ["color", "variant", "placeholder", "square", "size", "outline", "secondaryIcon", "secondaryIconProps", "spanStyle", "width", "height", "style"]);
    // Styles
    const imageStyle = Object.assign({ backgroundColor: colors.getBgHex(color, variant, false), color: colors.getFgHex(color, variant), borderRadius: "50%", border: outline ? `1px solid ${colors.getFgHex(color, variant)}` : undefined }, style);
    const secondaryIconContainerStyle = {
        backgroundColor: colors.getHex(color),
        borderRadius: "50%",
        aspectRatio: 1,
        position: "absolute",
        right: 0,
        bottom: 0,
        padding: theme.sizeClasses.padding[size] / 8,
    };
    return (_jsxs("span", { style: Object.assign({ position: "relative" }, spanStyle), children: [_jsx(Image, Object.assign({ placeholder: _jsx(Flex, { align: "center", justify: "center", height: "100%", width: "100%", children: _jsx(Icon, { size: theme.sizeClasses.iconSize[size], children: placeholder }) }), style: imageStyle, square: square, color: color, width: width, height: height, ref: ref }, rest)), secondaryIcon && (_jsx(Flex, { align: "center", justify: "center", style: secondaryIconContainerStyle, children: _jsx(Icon, Object.assign({ size: theme.sizeClasses.iconSize[size] * 0.65, color: color === "white" ? "black" : "white" }, secondaryIconProps, { children: secondaryIcon })) }))] }));
});
