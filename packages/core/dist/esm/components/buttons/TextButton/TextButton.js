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
import { PrimitiveButton } from "../PrimitiveButton/PrimitiveButton";
import { Text } from "../../display";
import { useValence } from "../../../ValenceProvider";
import { useResponsiveProps } from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";
export const Button = forwardRef(function Button(props, ref) {
    const theme = useValence();
    const colors = useColors();
    // Defaults
    const _a = useResponsiveProps(props), { size = theme.defaults.size, variant = theme.defaults.variant, color = theme.primaryColor, textProps, children } = _a, rest = __rest(_a, ["size", "variant", "color", "textProps", "children"]);
    return (_jsx(PrimitiveButton, Object.assign({ size: size, variant: variant, color: color, ref: ref }, rest, { children: _jsx(Text, Object.assign({ size: size, color: colors.getFgHex(color, variant) }, textProps, { children: children })) })));
});
