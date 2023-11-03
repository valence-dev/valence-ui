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
exports.Card = exports.CARD_DEFAULTS = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const utils_1 = require("@valence-ui/utils");
const __1 = require("..");
const PrimitiveButton_1 = require("../../buttons/PrimitiveButton");
const react_1 = require("react");
const ValenceProvider_1 = require("../../../ValenceProvider");
const hooks_1 = require("../../../hooks");
const display_1 = require("../../display");
const buttons_1 = require("../../buttons");
exports.CARD_DEFAULTS = {
    width: {
        "xs": 150,
        "sm": 200,
        "md": 250,
        "lg": 300,
        "xl": 350
    }
};
const Card = (0, react_1.forwardRef)(function Card(props, ref) {
    const theme = (0, react_1.useContext)(ValenceProvider_1.ValenceContext);
    const breakpoint = (0, hooks_1.useBreakpoint)();
    // Defaults
    const { size = theme.defaultSize, radius = theme.defaultRadius, gap = 0, buttonProps, flexProps, height = "fit-content", width = exports.CARD_DEFAULTS.width[(0, utils_1.getReactiveProp)(size, breakpoint)], padding = 0, margin, color = "black", backgroundColor = color, children, style } = props, rest = __rest(props, ["size", "radius", "gap", "buttonProps", "flexProps", "height", "width", "padding", "margin", "color", "backgroundColor", "children", "style"]);
    // Styles
    const cardStyle = Object.assign({ overflow: "hidden", padding: (0, utils_1.getReactiveProp)(padding, breakpoint), margin: (0, utils_1.getReactiveProp)(margin, breakpoint) }, (0, utils_1.getReactiveProp)(style, breakpoint));
    return ((0, jsx_runtime_1.jsx)(PrimitiveButton_1.PrimitiveButton, Object.assign({ height: (0, utils_1.getReactiveProp)(height, breakpoint), width: (0, utils_1.getReactiveProp)(width, breakpoint), color: (0, utils_1.getReactiveProp)(color, breakpoint), backgroundColor: (0, utils_1.getReactiveProp)(backgroundColor, breakpoint), radius: (0, utils_1.getReactiveProp)(radius, breakpoint), style: cardStyle, motion: {
            onHover: "raise",
            onTap: "bounce",
        }, ref: ref }, buttonProps, rest, { children: (0, jsx_runtime_1.jsx)(__1.Flex, Object.assign({ direction: "column", gap: gap }, flexProps, { children: children })) })));
});
const Image = (0, react_1.forwardRef)(function CardImage(props, ref) {
    const theme = (0, react_1.useContext)(ValenceProvider_1.ValenceContext);
    // Defaults
    const { radius = theme.defaultRadius, width = "100%", height = "fit-content" } = props, rest = __rest(props, ["radius", "width", "height"]);
    return ((0, jsx_runtime_1.jsx)(display_1.Image, Object.assign({ radius: radius, width: width, height: height, ref: ref }, rest)));
});
const Section = (0, react_1.forwardRef)(function CardSection(props, ref) {
    const theme = (0, react_1.useContext)(ValenceProvider_1.ValenceContext);
    // Defaults
    const { width = "100%", height = "fit-content", padding = theme.sizeClasses.padding[theme.defaultSize], children } = props, rest = __rest(props, ["width", "height", "padding", "children"]);
    return ((0, jsx_runtime_1.jsx)(__1.Flex, Object.assign({ width: width, height: height, padding: padding, ref: ref }, rest, { children: children })));
});
const Buttons = (0, react_1.forwardRef)(function CardButtons(props, ref) {
    const theme = (0, react_1.useContext)(ValenceProvider_1.ValenceContext);
    const breakpoint = (0, hooks_1.useBreakpoint)();
    // Defaults
    const { width = "100%", height = "fit-content", padding = theme.sizeClasses.padding[theme.defaultSize], direction = "row", align = "center", justify = "flex-start", children } = props, rest = __rest(props, ["width", "height", "padding", "direction", "align", "justify", "children"]);
    // Styles
    const ButtonStyle = {
        width: (0, utils_1.getReactiveProp)(width, breakpoint),
        height: (0, utils_1.getReactiveProp)(height, breakpoint),
        padding: (0, utils_1.getReactiveProp)(padding, breakpoint),
        boxSizing: "border-box",
    };
    return ((0, jsx_runtime_1.jsx)(buttons_1.UnstyledButton, { onClick: (e) => e.stopPropagation(), component: "div", style: ButtonStyle, ref: ref, children: (0, jsx_runtime_1.jsx)(__1.Flex, Object.assign({ width: "100%", height: "100%", padding: 0, direction: direction, align: align, justify: justify }, rest, { children: children })) }));
});
const CardNamesapce = Object.assign(Card, {
    Image,
    Section,
    Buttons,
});
exports.Card = CardNamesapce;
