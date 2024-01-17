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
exports.FlexCenter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Flex_1 = require("./Flex");
exports.FlexCenter = (0, react_1.forwardRef)(function FlexCentre(props, ref) {
    const { center = true, width = "100%", height = "100%", innerWidth = "50%", innerProps, children } = props, rest = __rest(props, ["center", "width", "height", "innerWidth", "innerProps", "children"]);
    return ((0, jsx_runtime_1.jsx)(Flex_1.Flex, Object.assign({ center: center, width: width, height: height, ref: ref }, rest, { children: (0, jsx_runtime_1.jsx)(Flex_1.Flex, Object.assign({ width: innerWidth, height: "fit-content" }, innerProps, { children: children })) })));
});
