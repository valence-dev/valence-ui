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
exports.OverflowContainer = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("@emotion/react");
const Flex_1 = require("../Flex");
const react_2 = require("react");
const utilities_1 = require("../../../utilities");
exports.OverflowContainer = (0, react_2.forwardRef)(function OverflowContainer(props, ref) {
    const _a = (0, utilities_1.useResponsiveProps)(props), { direction = "vertical", width = "100%", height = "100%", innerProps, children, style } = _a, rest = __rest(_a, ["direction", "width", "height", "innerProps", "children", "style"]);
    const _b = innerProps || {}, { style: innerStyle, width: innerWidth = "100%", height: innerHeight = "fit-content" } = _b, innerRest = __rest(_b, ["style", "width", "height"]);
    // Styles
    const OverflowContainerStyle = (0, react_1.css)(Object.assign(Object.assign({ width: width, height: height }, (direction !== "none" ? {
        overflowX: direction === "horizontal" || direction === "both" ? "auto" : "hidden",
        overflowY: direction === "vertical" || direction === "both" ? "auto" : "hidden",
    } : {
        overflow: "hidden",
        touchAction: "none",
    })), style));
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ css: OverflowContainerStyle }, rest, { children: (0, jsx_runtime_1.jsx)(Flex_1.Flex, Object.assign({ ref: ref, style: innerStyle, width: innerWidth, height: innerHeight }, innerRest, { children: children })) })));
});
