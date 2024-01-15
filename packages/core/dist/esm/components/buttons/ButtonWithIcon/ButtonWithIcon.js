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
import { useResponsiveProps, useValence } from "../../..";
import { PrimitiveButton } from "../PrimitiveButton";
import { Icon, Text } from "../../display";
import { getTextColor } from "../Helpers";
export const ButtonWithIcon = forwardRef(function ButtonWithIcon(props, ref) {
    const theme = useValence();
    // Defaults
    const _a = useResponsiveProps(props), { icon, iconPosition = "left", size = theme.defaults.size, variant = theme.defaults.variant, color = theme.primaryColor, style, textProps, children } = _a, rest = __rest(_a, ["icon", "iconPosition", "size", "variant", "color", "style", "textProps", "children"]);
    // Styles
    const padding = theme.getSize("padding", size);
    const styles = Object.assign({ flexDirection: iconPosition === "left" ? "row" : "row-reverse", justifyContent: "flex-start", paddingLeft: iconPosition === "left" ? padding / 1.5 : undefined, paddingRight: iconPosition === "right" ? padding / 1.5 : undefined, gap: padding / 2 }, style);
    return (_jsxs(PrimitiveButton, Object.assign({ size: size, variant: variant, color: color, style: styles, ref: ref }, rest, { children: [_jsx(Icon, { size: theme.getSize("iconSize", size), color: getTextColor(color, variant, theme), children: icon }), _jsx(Text, Object.assign({ size: size, color: getTextColor(color, variant, theme) }, textProps, { children: children }))] })));
});
