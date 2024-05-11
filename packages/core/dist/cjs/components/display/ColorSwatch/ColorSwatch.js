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
exports.ColorSwatch = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("react");
const utilities_1 = require("../../../utilities");
const ValenceProvider_1 = require("../../../ValenceProvider");
const react_2 = require("@emotion/react");
exports.ColorSwatch = (0, react_1.forwardRef)(function ColorSwatch(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const { getHex } = (0, utilities_1.useColors)();
    // Defaults
    const _a = (0, utilities_1.useResponsiveProps)(props), { color = theme.primaryColor, opacity, size = theme.defaults.size, radius = "xl", withOutline = true } = _a, rest = __rest(_a, ["color", "opacity", "size", "radius", "withOutline"]);
    // Styles
    const SwatchStyle = (0, react_2.css)({
        width: theme.sizeClasses.height[size],
        height: theme.sizeClasses.height[size],
        borderRadius: theme.sizeClasses.radius[radius],
        backgroundColor: getHex(color, opacity),
        border: withOutline ? `1px solid ${getHex("black", "medium")}` : "none",
    });
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ ref: ref, css: SwatchStyle }, rest)));
});
