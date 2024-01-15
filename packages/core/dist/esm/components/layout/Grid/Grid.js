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
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { PolymorphicLayout } from "@valence-ui/utils";
import { forwardRef } from "react";
import { useValence } from "../../../ValenceProvider";
import { css } from "@emotion/react";
import { useResponsiveProps } from "../../../responsive";
const Grid = forwardRef(function Grid(props, ref) {
    const theme = useValence();
    // Defaults
    const _a = useResponsiveProps(props), { grid = "auto", gap = theme.sizeClasses.padding[theme.defaults.size], rowGap, columnGap, template, templateRows, templateColumns, templateAreas, autoRows, autoColumns, autoFlow, justifyItems, justifyContent, alignItems, alignContent, backgroundColor, color, padding, margin, width, height, style, children } = _a, rest = __rest(_a, ["grid", "gap", "rowGap", "columnGap", "template", "templateRows", "templateColumns", "templateAreas", "autoRows", "autoColumns", "autoFlow", "justifyItems", "justifyContent", "alignItems", "alignContent", "backgroundColor", "color", "padding", "margin", "width", "height", "style", "children"]);
    // Styles
    const GridStyle = css(Object.assign({ display: "grid", grid: grid, gap: gap, rowGap: rowGap, columnGap: columnGap, gridTemplate: template, gridTemplateRows: templateRows, gridTemplateColumns: templateColumns, gridTemplateAreas: templateAreas, gridAutoRows: autoRows, gridAutoColumns: autoColumns, gridAutoFlow: autoFlow, justifyItems: justifyItems, justifyContent: justifyContent, alignItems: alignItems, alignContent: alignContent, backgroundColor: theme.getColorHex(backgroundColor), color: theme.getColorHex(color), padding: padding, margin: margin, width: width, height: height }, style));
    return (_jsx(PolymorphicLayout, Object.assign({ css: GridStyle, ref: ref }, rest, { children: children })));
});
const Item = forwardRef(function GridItem(props, ref) {
    const theme = useValence();
    // Defaults
    const _a = useResponsiveProps(props), { area, column = "auto", columnStart, columnEnd, row = "auto", rowStart, rowEnd, justify = "stretch", align = "stretch", place, order, backgroundColor, color, padding, margin, width, height, style, children } = _a, rest = __rest(_a, ["area", "column", "columnStart", "columnEnd", "row", "rowStart", "rowEnd", "justify", "align", "place", "order", "backgroundColor", "color", "padding", "margin", "width", "height", "style", "children"]);
    // Styles
    const ItemStyle = css(Object.assign({ gridArea: area, gridColumn: column, gridColumnStart: columnStart, gridColumnEnd: columnEnd, gridRow: row, gridRowStart: rowStart, gridRowEnd: rowEnd, justifySelf: justify, alignSelf: align, placeSelf: place, order: order, backgroundColor: theme.getColorHex(backgroundColor), color: theme.getColorHex(color), padding: padding, margin: margin, width: width, height: height }, style));
    return (_jsx(PolymorphicLayout, Object.assign({ css: ItemStyle, ref: ref }, rest, { children: children })));
});
const GridNamespace = Object.assign(Grid, { Item });
export { GridNamespace as Grid };
