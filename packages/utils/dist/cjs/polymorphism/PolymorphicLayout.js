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
exports.PolymorphicLayout = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
exports.PolymorphicLayout = (0, react_1.forwardRef)(function Input(props, ref) {
    const { component = "div", children } = props, rest = __rest(props, ["component", "children"]);
    let Component = component;
    if (component === "link")
        Component = react_router_dom_1.Link;
    return ((0, jsx_runtime_1.jsx)(Component, Object.assign({ ref: ref }, rest, { children: children })));
});
