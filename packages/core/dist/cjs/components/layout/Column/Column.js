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
const utils_1 = require("@valence-ui/utils");
const ValenceProvider_1 = require("../../../ValenceProvider");
const hooks_1 = require("../../../hooks");
const Column = (0, react_1.forwardRef)(function Column(props, ref) {
    const theme = (0, react_1.useContext)(ValenceProvider_1.ValenceContext);
    // Defaults
    const { direction = "column", justify = "center", color = "black", backgroundColor, padding = theme.sizeClasses.padding[theme.defaultSize], margin, width, height, children } = props, rest = __rest(props, ["direction", "justify", "color", "backgroundColor", "padding", "margin", "width", "height", "children"]);
    return ((0, jsx_runtime_1.jsx)(Flex_1.Flex, Object.assign({ direction: direction, justify: justify, color: color, backgroundColor: backgroundColor, padding: padding, margin: margin, width: width, height: height, ref: ref }, rest, { children: children })));
});
const Container = (0, react_1.forwardRef)(function ColumnContainer(props, ref) {
    const breakpoint = (0, hooks_1.useBreakpoint)();
    // Defaults
    const { columns = 2, rows = 1, templateColumns = `repeat(${columns}, 1fr)`, templateRows = `repeat(${rows}, 1fr)`, color = "black", backgroundColor, padding, margin, width, height, children } = props, rest = __rest(props, ["columns", "rows", "templateColumns", "templateRows", "color", "backgroundColor", "padding", "margin", "width", "height", "children"]);
    // Styles
    const ContainerStyle = {
        color: (0, utils_1.getReactiveProp)(color, breakpoint),
        backgroundColor: (0, utils_1.getReactiveProp)(backgroundColor, breakpoint),
        padding: (0, utils_1.getReactiveProp)(padding, breakpoint),
        margin: (0, utils_1.getReactiveProp)(margin, breakpoint),
        width: (0, utils_1.getReactiveProp)(width, breakpoint),
        height: (0, utils_1.getReactiveProp)(height, breakpoint),
    };
    return ((0, jsx_runtime_1.jsx)(Grid_1.Grid, Object.assign({ templateColumns: templateColumns, style: ContainerStyle, ref: ref }, rest, { children: children })));
});
const ColumnNamespace = Object.assign(Column, { Container });
exports.Column = ColumnNamespace;
