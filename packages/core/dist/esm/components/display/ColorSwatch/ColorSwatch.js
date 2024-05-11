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
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { forwardRef } from "react";
import { useColors, useResponsiveProps } from "../../../utilities";
import { useValence } from "../../../ValenceProvider";
import { css } from "@emotion/react";
export const ColorSwatch = forwardRef(function ColorSwatch(props, ref) {
    const theme = useValence();
    const { getHex } = useColors();
    // Defaults
    const _a = useResponsiveProps(props), { color = theme.primaryColor, opacity, size = theme.defaults.size, radius = "xl", withOutline = true } = _a, rest = __rest(_a, ["color", "opacity", "size", "radius", "withOutline"]);
    // Styles
    const SwatchStyle = css({
        width: theme.sizeClasses.height[size],
        height: theme.sizeClasses.height[size],
        borderRadius: theme.sizeClasses.radius[radius],
        backgroundColor: getHex(color, opacity),
        border: withOutline ? `1px solid ${getHex("black", "medium")}` : "none",
    });
    return (_jsx("div", Object.assign({ ref: ref, css: SwatchStyle }, rest)));
});
