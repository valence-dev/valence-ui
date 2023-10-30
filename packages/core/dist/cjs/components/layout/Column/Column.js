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
exports.Column = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const utils_1 = require("@valence-ui/utils");
const Flex_1 = require("../Flex");
const hooks_1 = require("../../../hooks");
const Column = function Column(props) {
    const { direction = "column", justify = "center", children } = props, rest = __rest(props, ["direction", "justify", "children"]);
    return ((0, jsx_runtime_1.jsx)(Flex_1.Flex, Object.assign({ direction: direction, justify: justify }, rest, { children: children })));
};
exports.Column = Column;
exports.Column.Container = function ColumnContainer(props) {
    const breakpoint = (0, hooks_1.useBreakpoint)();
    const { direction = "row", justify = "space-between", flow, style, children } = props, rest = __rest(props, ["direction", "justify", "flow", "style", "children"]);
    // Styles
    const ContainerStyle = Object.assign({ flexFlow: (0, utils_1.getReactiveProp)(flow, breakpoint) }, style);
    return ((0, jsx_runtime_1.jsx)(Flex_1.Flex, Object.assign({ direction: direction, justify: justify, style: ContainerStyle }, rest, { children: children })));
};
