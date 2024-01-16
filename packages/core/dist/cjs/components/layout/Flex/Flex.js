"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flex = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("react");
const __1 = require("../../..");
const utils_1 = require("@valence-ui/utils");
const react_2 = require("@emotion/react");
/** A basic formattable flexbox component that accepts many common flexbox properties. This component is also reactive, thus it will accept both a single value and an object of values that will be applied at different breakpoints. */
exports.Flex = (0, react_1.forwardRef)(function Flex(props, ref) {
    const theme = (0, __1.useValence)();
    const { getHex } = (0, __1.useColors)();
    // Defaults
    const _a = (0, __1.useResponsiveProps)(props), { direction = "row", align = "flex-start", justify = "flex-start", alignSelf = "stretch", gap = theme.sizeClasses.padding[theme.defaults.size], grow = false, wrap = "nowrap", backgroundColor, color, padding, margin, width, height, style, children } = _a, rest = __rest(_a, ["direction", "align", "justify", "alignSelf", "gap", "grow", "wrap", "backgroundColor", "color", "padding", "margin", "width", "height", "style", "children"]);
    // Styles
    const FlexStyle = (0, react_2.css)(Object.assign({ display: "flex", flexDirection: direction, alignItems: align, justifyContent: justify, boxSizing: "border-box", alignSelf: alignSelf, gap: gap, flexGrow: grow ? 1 : undefined, flexWrap: wrap, backgroundColor: getHex(backgroundColor), color: getHex(color), padding: padding, margin: margin, width: width, height: height }, style));
    return ((0, jsx_runtime_1.jsx)(utils_1.PolymorphicLayout, Object.assign({ css: FlexStyle, ref: ref }, rest, { children: children })));
});
