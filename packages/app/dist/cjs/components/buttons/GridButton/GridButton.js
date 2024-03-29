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
exports.GridButton = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("@emotion/react");
const core_1 = require("@valence-ui/core");
const react_2 = require("react");
exports.GridButton = (0, react_2.forwardRef)(function GridButton(props, ref) {
    const theme = (0, react_2.useContext)(core_1.ValenceContext);
    const { getFgHex } = (0, core_1.useColors)();
    // Defaults
    const _a = (0, core_1.useResponsiveProps)(props), { icon, iconPosition = "top", size = theme.defaults.size, variant = theme.defaults.variant, color = theme.primaryColor, width = theme.sizeClasses.height[size] * 2.5, height = width, square = true, style, textProps } = _a, rest = __rest(_a, ["icon", "iconPosition", "size", "variant", "color", "width", "height", "square", "style", "textProps"]);
    // Styles
    const styles = Object.assign({ flexDirection: iconPosition === "top" ? "column" : "column-reverse", justifyContent: "flex-start", padding: theme.sizeClasses.padding[size], gap: theme.sizeClasses.padding[size] / 2 }, style);
    const IconContainerStyle = (0, react_1.css)({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    });
    return ((0, jsx_runtime_1.jsxs)(core_1.PrimitiveButton, Object.assign({ size: size, variant: variant, color: color, height: height, width: width, square: square, style: styles, ref: ref }, rest, { children: [(0, jsx_runtime_1.jsx)("div", { css: IconContainerStyle, children: (0, jsx_runtime_1.jsx)(core_1.Icon, { size: theme.getSize("iconSize", size) * 1.5, children: icon }) }), (0, jsx_runtime_1.jsx)(core_1.Text, Object.assign({ fontSize: theme.sizeClasses.fontSize[size] * 0.8, color: getFgHex(color, variant), align: "center" }, textProps, { children: props.children }))] })));
});
