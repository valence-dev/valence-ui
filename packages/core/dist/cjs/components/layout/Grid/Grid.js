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
const react_2 = require("@emotion/react");
const responsive_1 = require("../../../utilities/responsive");
const color_1 = require("../../../utilities/color");
const Grid = (0, react_1.forwardRef)(function Grid(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const { getHex } = (0, color_1.useColors)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { grid = "auto", gap = theme.sizeClasses.padding[theme.defaults.size], rowGap, columnGap, template, templateRows, templateColumns, templateAreas, autoRows, autoColumns, autoFlow, justifyItems, justifyContent, alignItems, alignContent, backgroundColor, color, padding, margin, width, height, style, children } = _a, rest = __rest(_a, ["grid", "gap", "rowGap", "columnGap", "template", "templateRows", "templateColumns", "templateAreas", "autoRows", "autoColumns", "autoFlow", "justifyItems", "justifyContent", "alignItems", "alignContent", "backgroundColor", "color", "padding", "margin", "width", "height", "style", "children"]);
    // Styles
    const GridStyle = (0, react_2.css)(Object.assign({ display: "grid", grid: grid, gap: gap, rowGap: rowGap, columnGap: columnGap, gridTemplate: template, gridTemplateRows: templateRows, gridTemplateColumns: templateColumns, gridTemplateAreas: templateAreas, gridAutoRows: autoRows, gridAutoColumns: autoColumns, gridAutoFlow: autoFlow, justifyItems: justifyItems, justifyContent: justifyContent, alignItems: alignItems, alignContent: alignContent, backgroundColor: getHex(backgroundColor), color: getHex(color), padding: padding, margin: margin, width: width, height: height }, style));
    return ((0, jsx_runtime_1.jsx)(utils_1.PolymorphicLayout, Object.assign({ css: GridStyle, ref: ref }, rest, { children: children })));
});
const Item = (0, react_1.forwardRef)(function GridItem(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const { getHex } = (0, color_1.useColors)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { area, column = "auto", columnStart, columnEnd, row = "auto", rowStart, rowEnd, justify = "stretch", align = "stretch", place, order, backgroundColor, color, padding, margin, width, height, style, children } = _a, rest = __rest(_a, ["area", "column", "columnStart", "columnEnd", "row", "rowStart", "rowEnd", "justify", "align", "place", "order", "backgroundColor", "color", "padding", "margin", "width", "height", "style", "children"]);
    // Styles
    const ItemStyle = (0, react_2.css)(Object.assign({ gridArea: area, gridColumn: column, gridColumnStart: columnStart, gridColumnEnd: columnEnd, gridRow: row, gridRowStart: rowStart, gridRowEnd: rowEnd, justifySelf: justify, alignSelf: align, placeSelf: place, order: order, backgroundColor: getHex(backgroundColor), color: getHex(color), padding: padding, margin: margin, width: width, height: height }, style));
    return ((0, jsx_runtime_1.jsx)(utils_1.PolymorphicLayout, Object.assign({ css: ItemStyle, ref: ref }, rest, { children: children })));
});
const GridNamespace = Object.assign(Grid, { Item });
exports.Grid = GridNamespace;
