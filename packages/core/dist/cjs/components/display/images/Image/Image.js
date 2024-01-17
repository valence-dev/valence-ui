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
exports.Image = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("react");
const ValenceProvider_1 = require("../../../../ValenceProvider");
const react_2 = require("@emotion/react");
const responsive_1 = require("../../../../utilities/responsive");
const layout_1 = require("../../../layout");
const Icon_1 = require("../../Icon");
const icons_react_1 = require("@tabler/icons-react");
const utilities_1 = require("../../../../utilities");
exports.Image = (0, react_1.forwardRef)(function Image(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const { getHex } = (0, utilities_1.useColors)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { src, alt, color = "black", placeholder = ((0, jsx_runtime_1.jsx)(layout_1.Flex, { align: "center", justify: "center", height: "100%", width: "100%", children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { color: color, children: (0, jsx_runtime_1.jsx)(icons_react_1.IconPhoto, {}) }) })), radius = theme.defaults.radius, fit = "cover", position = "center", square = false, height = "fit-content", width = square ? height : "auto", shadow = false, style } = _a, rest = __rest(_a, ["src", "alt", "color", "placeholder", "radius", "fit", "position", "square", "height", "width", "shadow", "style"]);
    // Styles
    const ContainerStyle = (0, react_2.css)(Object.assign({ height: height, width: width, minWidth: width, borderRadius: theme.sizeClasses.radius[radius], aspectRatio: square ? "1/1" : undefined, overflow: "hidden", boxShadow: shadow ? theme.defaults.shadow : "none", backgroundColor: getHex(color, "weak") }, style));
    const ImageStyle = (0, react_2.css)({
        width: "100%",
        height: "100%",
        objectFit: fit,
        objectPosition: position
    });
    return ((0, jsx_runtime_1.jsx)("div", { css: ContainerStyle, children: props.src ?
            (0, jsx_runtime_1.jsx)("img", Object.assign({ css: ImageStyle, src: src, alt: alt, ref: ref }, rest))
            :
                placeholder }));
});
