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
exports.Grid = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const utils_1 = require("@valence-ui/utils");
const react_1 = require("react");
const ValenceProvider_1 = require("../../../ValenceProvider");
const hooks_1 = require("../../../hooks");
const react_2 = require("@emotion/react");
const Grid = (0, react_1.forwardRef)(function Grid(props, ref) {
    const theme = (0, react_1.useContext)(ValenceProvider_1.ValenceContext);
    const breakpoint = (0, hooks_1.useBreakpoint)();
    // Defaults
    const { grid = "auto", gap = theme.sizeClasses.padding[theme.defaultSize], rowGap, columnGap, template, templateRows, templateColumns, templateAreas, autoRows, autoColumns, autoFlow, justifyItems, justifyContent, alignItems, alignContent, children, style } = props, rest = __rest(props, ["grid", "gap", "rowGap", "columnGap", "template", "templateRows", "templateColumns", "templateAreas", "autoRows", "autoColumns", "autoFlow", "justifyItems", "justifyContent", "alignItems", "alignContent", "children", "style"]);
    // Styles
    const GridStyle = (0, react_2.css)(Object.assign({ display: "grid", grid: (0, utils_1.getReactiveProp)(grid, breakpoint), gap: (0, utils_1.getReactiveProp)(gap, breakpoint), rowGap: (0, utils_1.getReactiveProp)(rowGap, breakpoint), columnGap: (0, utils_1.getReactiveProp)(columnGap, breakpoint), gridTemplate: (0, utils_1.getReactiveProp)(template, breakpoint), gridTemplateRows: (0, utils_1.getReactiveProp)(templateRows, breakpoint), gridTemplateColumns: (0, utils_1.getReactiveProp)(templateColumns, breakpoint), gridTemplateAreas: (0, utils_1.getReactiveProp)(templateAreas, breakpoint), gridAutoRows: (0, utils_1.getReactiveProp)(autoRows, breakpoint), gridAutoColumns: (0, utils_1.getReactiveProp)(autoColumns, breakpoint), gridAutoFlow: (0, utils_1.getReactiveProp)(autoFlow, breakpoint), justifyItems: (0, utils_1.getReactiveProp)(justifyItems, breakpoint), justifyContent: (0, utils_1.getReactiveProp)(justifyContent, breakpoint), alignItems: (0, utils_1.getReactiveProp)(alignItems, breakpoint), alignContent: (0, utils_1.getReactiveProp)(alignContent, breakpoint) }, (0, utils_1.getReactiveProp)(style, breakpoint)));
    return ((0, jsx_runtime_1.jsx)(utils_1.PolymorphicLayout, Object.assign({ css: GridStyle, ref: ref }, rest, { children: children })));
});
const Item = (0, react_1.forwardRef)(function GridItem(props, ref) {
    const theme = (0, react_1.useContext)(ValenceProvider_1.ValenceContext);
    const breakpoint = (0, hooks_1.useBreakpoint)();
    // Defaults
    const { area, column = "auto", columnStart, columnEnd, row = "auto", rowStart, rowEnd, justify = "stretch", align = "stretch", place, order, children, style } = props, rest = __rest(props, ["area", "column", "columnStart", "columnEnd", "row", "rowStart", "rowEnd", "justify", "align", "place", "order", "children", "style"]);
    // Styles
    const ItemStyle = (0, react_2.css)(Object.assign({ gridArea: (0, utils_1.getReactiveProp)(area, breakpoint), gridColumn: (0, utils_1.getReactiveProp)(column, breakpoint), gridColumnStart: (0, utils_1.getReactiveProp)(columnStart, breakpoint), gridColumnEnd: (0, utils_1.getReactiveProp)(columnEnd, breakpoint), gridRow: (0, utils_1.getReactiveProp)(row, breakpoint), gridRowStart: (0, utils_1.getReactiveProp)(rowStart, breakpoint), gridRowEnd: (0, utils_1.getReactiveProp)(rowEnd, breakpoint), justifySelf: (0, utils_1.getReactiveProp)(justify, breakpoint), alignSelf: (0, utils_1.getReactiveProp)(align, breakpoint), placeSelf: (0, utils_1.getReactiveProp)(place, breakpoint), order: (0, utils_1.getReactiveProp)(order, breakpoint) }, (0, utils_1.getReactiveProp)(style, breakpoint)));
    return ((0, jsx_runtime_1.jsx)(utils_1.PolymorphicLayout, Object.assign({ css: ItemStyle, ref: ref }, rest, { children: children })));
});
const GridNamespace = Object.assign(Grid, { Item });
exports.Grid = GridNamespace;
