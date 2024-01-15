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
const Flex_1 = require("../Flex");
const react_1 = require("react");
const Grid_1 = require("../Grid");
const ValenceProvider_1 = require("../../../ValenceProvider");
const responsive_1 = require("../../../responsive");
const Column = (0, react_1.forwardRef)(function Column(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { direction = "column", justify = "center", color = "black", backgroundColor, padding = theme.sizeClasses.padding[theme.defaults.size], margin, width, height, children } = _a, rest = __rest(_a, ["direction", "justify", "color", "backgroundColor", "padding", "margin", "width", "height", "children"]);
    return ((0, jsx_runtime_1.jsx)(Flex_1.Flex, Object.assign({ direction: direction, justify: justify, color: color, backgroundColor: backgroundColor, padding: padding, margin: margin, width: width, height: height, ref: ref }, rest, { children: children })));
});
const Container = (0, react_1.forwardRef)(function ColumnContainer(props, ref) {
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { columns = 2, rows = 1, templateColumns = `repeat(${columns}, 1fr)`, templateRows = `repeat(${rows}, 1fr)`, color = "black", backgroundColor, padding, margin, width, height, children } = _a, rest = __rest(_a, ["columns", "rows", "templateColumns", "templateRows", "color", "backgroundColor", "padding", "margin", "width", "height", "children"]);
    // Styles
    const ContainerStyle = {
        color: color,
        backgroundColor: backgroundColor,
        padding: padding,
        margin: margin,
        width: width,
        height: height,
    };
    return ((0, jsx_runtime_1.jsx)(Grid_1.Grid, Object.assign({ templateColumns: templateColumns, style: ContainerStyle, ref: ref }, rest, { children: children })));
});
const ColumnNamespace = Object.assign(Column, { Container });
exports.Column = ColumnNamespace;
