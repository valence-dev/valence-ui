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
import { useColors, useResponsiveProps, useValence } from "../../..";
import { PolymorphicLayout } from "@valence-ui/utils";
import { css } from "@emotion/react";
/** A basic formattable flexbox component that accepts many common flexbox properties. This component is also reactive, thus it will accept both a single value and an object of values that will be applied at different breakpoints. */
export const Flex = forwardRef(function Flex(props, ref) {
    const theme = useValence();
    const { getHex } = useColors();
    // Defaults
    const _a = useResponsiveProps(props), { center = false, direction = "row", align = center ? "center" : "flex-start", justify = center ? "center" : "flex-start", alignSelf, gap = theme.sizeClasses.padding[theme.defaults.size], grow = false, wrap = "nowrap", backgroundColor, color, padding, margin, width, height, style, children } = _a, rest = __rest(_a, ["center", "direction", "align", "justify", "alignSelf", "gap", "grow", "wrap", "backgroundColor", "color", "padding", "margin", "width", "height", "style", "children"]);
    // Styles
    const FlexStyle = css(Object.assign({ display: "flex", flexDirection: direction, alignItems: align, justifyContent: justify, boxSizing: "border-box", alignSelf: alignSelf, gap: gap, flexGrow: grow ? 1 : undefined, flexWrap: wrap, backgroundColor: getHex(backgroundColor), color: getHex(color), padding: padding, margin: margin, width: width, height: height }, style));
    return (_jsx(PolymorphicLayout, Object.assign({ css: FlexStyle, ref: ref }, rest, { children: children })));
});
