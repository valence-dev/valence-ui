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
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { useColors, useResponsiveProps, useValence } from "../../..";
import { Flex } from "./Flex";
/** A styled version of the `Flex` component that offers many props in line with the button styling system */
export const StyledFlex = forwardRef(function StyledFlex(props, ref) {
    const theme = useValence();
    const { getFgHex, getBorderHex, getBgHex } = useColors();
    // Defaults
    const _a = useResponsiveProps(props), { size = theme.defaults.size, radius = theme.defaults.radius, variant = theme.defaults.variant, padding = theme.sizeClasses.padding[theme.defaults.size], color = theme.primaryColor, backgroundColor = color, style, children } = _a, rest = __rest(_a, ["size", "radius", "variant", "padding", "color", "backgroundColor", "style", "children"]);
    // Styles
    const styles = Object.assign({ backgroundColor: getBgHex(backgroundColor, variant, false), border: getBorderHex(color, variant), color: getFgHex(color, variant), borderRadius: theme.sizeClasses.radius[radius], boxShadow: props.shadow ? theme.defaults.shadow : undefined }, style);
    return (_jsx(Flex, Object.assign({ padding: padding, style: styles, ref: ref }, rest, { children: children })));
});
