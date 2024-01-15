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
const utils_1 = require("@valence-ui/utils");
const ValenceProvider_1 = require("../../../../ValenceProvider");
const hooks_1 = require("../../../../hooks");
const react_2 = require("@emotion/react");
exports.Image = (0, react_1.forwardRef)(function Image(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const breakpoint = (0, hooks_1.useBreakpoint)();
    // Defaults
    const { src, alt, placeholder, radius = theme.defaults.radius, fit = "cover", position = "center", square = false, height = "fit-content", width = square ? height : "auto", shadow = false, style } = props, rest = __rest(props, ["src", "alt", "placeholder", "radius", "fit", "position", "square", "height", "width", "shadow", "style"]);
    // Styles
    const ContainerStyle = (0, react_2.css)(Object.assign({ height: (0, utils_1.getReactiveProp)(height, breakpoint), width: (0, utils_1.getReactiveProp)(width, breakpoint), minWidth: (0, utils_1.getReactiveProp)(width, breakpoint), borderRadius: theme.sizeClasses.radius[(0, utils_1.getReactiveProp)(radius, breakpoint)], aspectRatio: square ? "1/1" : undefined, overflow: "hidden", boxShadow: (0, utils_1.getReactiveProp)(shadow, breakpoint) ? theme.defaults.shadow : "none" }, (0, utils_1.getReactiveProp)(style, breakpoint)));
    const ImageStyle = (0, react_2.css)({
        width: "100%",
        height: "100%",
        objectFit: (0, utils_1.getReactiveProp)(fit, breakpoint),
        objectPosition: (0, utils_1.getReactiveProp)(position, breakpoint)
    });
    return ((0, jsx_runtime_1.jsx)("div", { css: ContainerStyle, children: props.src ?
            (0, jsx_runtime_1.jsx)("img", Object.assign({ css: ImageStyle, src: src, alt: alt, ref: ref }, rest))
            :
                placeholder }));
});
