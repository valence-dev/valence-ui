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
exports.Space = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("react");
const react_2 = require("@emotion/react");
/** A basic, unstyled layout assistant that creates blank space between any two objects. */
exports.Space = (0, react_1.forwardRef)(function Space(props, ref) {
    // Defaults
    const { height, width, grow, style } = props, rest = __rest(props, ["height", "width", "grow", "style"]);
    // Styles
    const SpaceStyle = (0, react_2.css)(Object.assign({ width: width, height: height, flexGrow: grow ? 1 : undefined }, style));
    return ((0, jsx_runtime_1.jsx)("span", Object.assign({ css: SpaceStyle, ref: ref }, rest)));
});
