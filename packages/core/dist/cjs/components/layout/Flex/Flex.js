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
    const theme = (0, __1.useValenceContext)();
    const breakpoint = (0, __1.useBreakpoint)();
    // Defaults
    const { direction = { default: "row" }, align = { default: "flex-start" }, justify = { default: "flex-start" }, alignSelf = { default: "stretch" }, gap = theme.sizeClasses.padding[theme.defaultSize], grow = { default: false }, wrap = { default: "nowrap" }, backgroundColor, color, padding, margin, width, height, style, children } = props, rest = __rest(props, ["direction", "align", "justify", "alignSelf", "gap", "grow", "wrap", "backgroundColor", "color", "padding", "margin", "width", "height", "style", "children"]);
    // Styles
    const FlexStyle = (0, react_2.css)(Object.assign({ display: "flex", flexDirection: (0, utils_1.getReactiveProp)(direction, breakpoint), alignItems: (0, utils_1.getReactiveProp)(align, breakpoint), justifyContent: (0, utils_1.getReactiveProp)(justify, breakpoint), boxSizing: "border-box", alignSelf: (0, utils_1.getReactiveProp)(alignSelf, breakpoint), gap: (0, utils_1.getReactiveProp)(gap, breakpoint), flexGrow: (0, utils_1.getReactiveProp)(grow, breakpoint) ? 1 : undefined, flexWrap: (0, utils_1.getReactiveProp)(wrap, breakpoint), backgroundColor: theme.getColorHex((0, utils_1.getReactiveProp)(backgroundColor, breakpoint)), color: theme.getColorHex((0, utils_1.getReactiveProp)(color, breakpoint)), padding: (0, utils_1.getReactiveProp)(padding, breakpoint), margin: (0, utils_1.getReactiveProp)(margin, breakpoint), width: (0, utils_1.getReactiveProp)(width, breakpoint), height: (0, utils_1.getReactiveProp)(height, breakpoint) }, (0, utils_1.getReactiveProp)(style, breakpoint)));
    return ((0, jsx_runtime_1.jsx)(utils_1.PolymorphicLayout, Object.assign({ css: FlexStyle, ref: ref }, rest, { children: children })));
});
