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
exports.StyledFlex = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const __1 = require("../../..");
const Flex_1 = require("./Flex");
/** A styled version of the `Flex` component that offers many props in line with the button styling system */
exports.StyledFlex = (0, react_1.forwardRef)(function StyledFlex(props, ref) {
    const theme = (0, __1.useValence)();
    const { getFgHex, getBgHex } = (0, __1.useColors)();
    // Defaults
    const _a = (0, __1.useResponsiveProps)(props), { size = theme.defaults.size, radius = theme.defaults.radius, variant = theme.defaults.variant, padding = theme.sizeClasses.padding[theme.defaults.size], color = theme.primaryColor, backgroundColor = color, style, children } = _a, rest = __rest(_a, ["size", "radius", "variant", "padding", "color", "backgroundColor", "style", "children"]);
    // Styles
    const styles = Object.assign({ backgroundColor: getBgHex(backgroundColor, variant, false), color: getFgHex(color, variant), borderRadius: theme.sizeClasses.radius[radius], boxShadow: props.shadow
            ? theme.defaults.shadow : undefined }, style);
    return ((0, jsx_runtime_1.jsx)(Flex_1.Flex, Object.assign({ padding: padding, style: styles, ref: ref }, rest, { children: children })));
});
