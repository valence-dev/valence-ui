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
exports.Title = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Text_1 = require("./Text");
const __1 = require("../../..");
exports.Title = (0, react_1.forwardRef)(function Title(props, ref) {
    const theme = (0, __1.useValence)();
    const _a = (0, __1.useResponsiveProps)(props), { order = 1, component = `h${order !== null && order !== void 0 ? order : 1}`, family = theme.getFont("heading") } = _a, rest = __rest(_a, ["order", "component", "family"]);
    return ((0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ component: component, family: family, ref: ref }, theme.titles[order], rest, { children: props.children })));
});
