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
exports.MultipartButton = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("react");
const PrimitiveButton_1 = require("../PrimitiveButton");
const icons_react_1 = require("@tabler/icons-react");
const layout_1 = require("../../layout");
const display_1 = require("../../display");
const ValenceProvider_1 = require("../../../ValenceProvider");
const react_2 = require("@emotion/react");
const responsive_1 = require("../../../utilities/responsive");
const color_1 = require("../../../utilities/color");
const SIZES = {
    xs: { height: 50 },
    sm: { height: 60 },
    md: { height: 70 },
    lg: { height: 80 },
    xl: { height: 90 },
};
exports.MultipartButton = (0, react_1.forwardRef)(function MultipartButton(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const colors = (0, color_1.useColors)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { size = theme.defaults.size, variant = theme.defaults.variant, color = theme.primaryColor, height = SIZES[size].height, width = "100%", title, subtitle, leftIcon, rightIcon = (0, jsx_runtime_1.jsx)(icons_react_1.IconChevronRight, { opacity: 0.5 }), loading, titleProps, subtitleProps, style } = _a, rest = __rest(_a, ["size", "variant", "color", "height", "width", "title", "subtitle", "leftIcon", "rightIcon", "loading", "titleProps", "subtitleProps", "style"]);
    // Styles
    const buttonStyle = Object.assign({ justifyContent: "flex-start", padding: 0, paddingLeft: !leftIcon ? theme.sizeClasses.padding[size] : undefined }, style);
    const ContainerStyle = (0, react_2.css)({
        height: "100%",
        aspectRatio: "1 / 1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: colors.getFgHex(color, variant),
    });
    return ((0, jsx_runtime_1.jsxs)(PrimitiveButton_1.PrimitiveButton, Object.assign({ size: size, variant: variant, color: color, style: buttonStyle, height: height, width: width, ref: ref }, rest, { children: [leftIcon && (0, jsx_runtime_1.jsx)("div", { css: ContainerStyle, children: loading ?
                    (0, jsx_runtime_1.jsx)(display_1.Loader, { size: size, color: colors.getFgHex(color, variant) })
                    :
                        (0, jsx_runtime_1.jsx)(display_1.Icon, { size: theme.getSize("iconSize", size), color: colors.getFgHex(color, variant), children: leftIcon }) }), (0, jsx_runtime_1.jsxs)(layout_1.Flex, { direction: "column", align: "flex-start", justify: "center", grow: true, gap: 2, children: [(0, jsx_runtime_1.jsx)(display_1.Text, Object.assign({ size: size, color: colors.getFgHex(color, variant), bold: true }, titleProps, { children: title })), (0, jsx_runtime_1.jsx)(display_1.Text, Object.assign({ fontSize: theme.sizeClasses.fontSize[size] - 2, color: colors.getFgHex(color, variant) }, subtitleProps, { children: subtitle }))] }), (0, jsx_runtime_1.jsx)("div", { css: ContainerStyle, children: (0, jsx_runtime_1.jsx)(display_1.Icon, { size: theme.getSize("iconSize", size), color: colors.getFgHex(color, variant), children: rightIcon }) })] })));
});
