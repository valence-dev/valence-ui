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
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const PrimitiveButton_1 = require("../PrimitiveButton/PrimitiveButton");
const Helpers_1 = require("../Helpers");
const display_1 = require("../../display");
const ValenceProvider_1 = require("../../../ValenceProvider");
const responsive_1 = require("../../../responsive");
exports.Button = (0, react_1.forwardRef)(function Button(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { size = theme.defaults.size, variant = theme.defaults.variant, color = theme.primaryColor, textProps, children } = _a, rest = __rest(_a, ["size", "variant", "color", "textProps", "children"]);
    return ((0, jsx_runtime_1.jsx)(PrimitiveButton_1.PrimitiveButton, Object.assign({ size: size, variant: variant, color: color, ref: ref }, rest, { children: (0, jsx_runtime_1.jsx)(display_1.Text, Object.assign({ size: size, color: (0, Helpers_1.getTextColor)(color, variant, theme) }, textProps, { children: children })) })));
});
