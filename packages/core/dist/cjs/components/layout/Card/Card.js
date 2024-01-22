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
const __1 = require("..");
const PrimitiveButton_1 = require("../../buttons/PrimitiveButton");
const react_1 = require("react");
const ValenceProvider_1 = require("../../../ValenceProvider");
const display_1 = require("../../display");
const buttons_1 = require("../../buttons");
const responsive_1 = require("../../../utilities/responsive");
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
    const theme = (0, ValenceProvider_1.useValence)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { size = theme.defaults.size, radius = theme.defaults.radius, gap = 0, buttonProps, flexProps, height = "fit-content", width = exports.CARD_DEFAULTS.width[size], padding = 0, margin, color = "black", backgroundColor = color, children, style } = _a, rest = __rest(_a, ["size", "radius", "gap", "buttonProps", "flexProps", "height", "width", "padding", "margin", "color", "backgroundColor", "children", "style"]);
    // Styles
    const cardStyle = Object.assign({ overflow: "hidden", padding: padding, margin: margin, userSelect: "none" }, style);
    return ((0, jsx_runtime_1.jsx)(PrimitiveButton_1.PrimitiveButton, Object.assign({ height: height, width: width, color: color, backgroundColor: backgroundColor, radius: radius, style: cardStyle, motion: {
            onHover: "raise",
            onTap: "bounce",
        }, ref: ref }, buttonProps, rest, { children: (0, jsx_runtime_1.jsx)(__1.Flex, Object.assign({ direction: "column", gap: gap }, flexProps, { children: children })) })));
});
const Image = (0, react_1.forwardRef)(function CardImage(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { radius = theme.defaults.radius, width = "100%", height = "fit-content" } = _a, rest = __rest(_a, ["radius", "width", "height"]);
    return ((0, jsx_runtime_1.jsx)(display_1.Image, Object.assign({ radius: radius, width: width, height: height, ref: ref }, rest)));
});
const Section = (0, react_1.forwardRef)(function CardSection(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { width = "100%", height = "fit-content", padding = theme.sizeClasses.padding[theme.defaults.size], children } = _a, rest = __rest(_a, ["width", "height", "padding", "children"]);
    return ((0, jsx_runtime_1.jsx)(__1.Flex, Object.assign({ width: width, height: height, padding: padding, ref: ref }, rest, { children: children })));
});
const Buttons = (0, react_1.forwardRef)(function CardButtons(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { width = "100%", height = "fit-content", padding = theme.sizeClasses.padding[theme.defaults.size], direction = "row", align = "center", justify = "flex-start", children } = _a, rest = __rest(_a, ["width", "height", "padding", "direction", "align", "justify", "children"]);
    // Styles
    const ButtonStyle = {
        width: width,
        height: height,
        padding: padding,
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
