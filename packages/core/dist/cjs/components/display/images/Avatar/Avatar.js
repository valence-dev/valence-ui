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
exports.Avatar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Image_1 = require("../Image");
const ValenceProvider_1 = require("../../../../ValenceProvider");
const icons_react_1 = require("@tabler/icons-react");
const layout_1 = require("../../../layout");
const Icon_1 = require("../../Icon");
const responsive_1 = require("../../../../utilities/responsive");
const color_1 = require("../../../../utilities/color");
exports.Avatar = (0, react_1.forwardRef)(function Avatar(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const colors = (0, color_1.useColors)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { color = theme.primaryColor, variant = theme.defaults.variant, placeholder = (0, jsx_runtime_1.jsx)(icons_react_1.IconUserCircle, {}), square = true, size = theme.defaults.size, outline, secondaryIcon, secondaryIconProps, spanStyle, width = theme.sizeClasses.height[size], height = theme.sizeClasses.height[size], style } = _a, rest = __rest(_a, ["color", "variant", "placeholder", "square", "size", "outline", "secondaryIcon", "secondaryIconProps", "spanStyle", "width", "height", "style"]);
    // Styles
    const imageStyle = Object.assign({ backgroundColor: colors.getBgHex(color, variant, false), color: colors.getFgHex(color, variant), borderRadius: "50%", border: outline ? `1px solid ${colors.getFgHex(color, variant)}` : undefined }, style);
    const secondaryIconContainerStyle = {
        backgroundColor: colors.getHex(color),
        borderRadius: "50%",
        aspectRatio: 1,
        position: "absolute",
        right: 0,
        bottom: 0,
        padding: theme.sizeClasses.padding[size] / 8,
    };
    return ((0, jsx_runtime_1.jsxs)("span", { style: Object.assign({ position: "relative" }, spanStyle), children: [(0, jsx_runtime_1.jsx)(Image_1.Image, Object.assign({ placeholder: (0, jsx_runtime_1.jsx)(layout_1.Flex, { align: "center", justify: "center", height: "100%", width: "100%", children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { size: theme.sizeClasses.iconSize[size], children: placeholder }) }), style: imageStyle, square: square, color: color, width: width, height: height, ref: ref }, rest)), secondaryIcon && ((0, jsx_runtime_1.jsx)(layout_1.Flex, { align: "center", justify: "center", style: secondaryIconContainerStyle, children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, Object.assign({ size: theme.sizeClasses.iconSize[size] * 0.65, color: color === "white" ? "black" : "white" }, secondaryIconProps, { children: secondaryIcon })) }))] }));
});
