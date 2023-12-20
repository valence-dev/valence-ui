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
import { useBreakpoint, useValence } from "../../..";
import { PolymorphicLayout, getReactiveProp } from "@valence-ui/utils";
import { css } from "@emotion/react";
/** A basic formattable flexbox component that accepts many common flexbox properties. This component is also reactive, thus it will accept both a single value and an object of values that will be applied at different breakpoints. */
export const Flex = forwardRef(function Flex(props, ref) {
    const theme = useValence();
    const breakpoint = useBreakpoint();
    // Defaults
    const { direction = { default: "row" }, align = { default: "flex-start" }, justify = { default: "flex-start" }, alignSelf = { default: "stretch" }, gap = theme.sizeClasses.padding[theme.defaultSize], grow = { default: false }, wrap = { default: "nowrap" }, backgroundColor, color, padding, margin, width, height, style, children } = props, rest = __rest(props, ["direction", "align", "justify", "alignSelf", "gap", "grow", "wrap", "backgroundColor", "color", "padding", "margin", "width", "height", "style", "children"]);
    // Styles
    const FlexStyle = css(Object.assign({ display: "flex", flexDirection: getReactiveProp(direction, breakpoint), alignItems: getReactiveProp(align, breakpoint), justifyContent: getReactiveProp(justify, breakpoint), boxSizing: "border-box", alignSelf: getReactiveProp(alignSelf, breakpoint), gap: getReactiveProp(gap, breakpoint), flexGrow: getReactiveProp(grow, breakpoint) ? 1 : undefined, flexWrap: getReactiveProp(wrap, breakpoint), backgroundColor: theme.getColorHex(getReactiveProp(backgroundColor, breakpoint)), color: theme.getColorHex(getReactiveProp(color, breakpoint)), padding: getReactiveProp(padding, breakpoint), margin: getReactiveProp(margin, breakpoint), width: getReactiveProp(width, breakpoint), height: getReactiveProp(height, breakpoint) }, getReactiveProp(style, breakpoint)));
    return (_jsx(PolymorphicLayout, Object.assign({ css: FlexStyle, ref: ref }, rest, { children: children })));
});
