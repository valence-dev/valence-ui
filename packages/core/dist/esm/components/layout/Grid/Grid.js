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
import { PolymorphicLayout, getReactiveProp } from "@valence-ui/utils";
import { forwardRef, useContext } from "react";
import { ValenceContext } from "../../../ValenceProvider";
import { useBreakpoint } from "../../../hooks";
import { css } from "@emotion/react";
const Grid = forwardRef(function Grid(props, ref) {
    const theme = useContext(ValenceContext);
    const breakpoint = useBreakpoint();
    // Defaults
    const { grid = "auto", gap = theme.sizeClasses.padding[theme.defaultSize], rowGap, columnGap, template, templateRows, templateColumns, templateAreas, autoRows, autoColumns, autoFlow, justifyItems, justifyContent, alignItems, alignContent, children, style } = props, rest = __rest(props, ["grid", "gap", "rowGap", "columnGap", "template", "templateRows", "templateColumns", "templateAreas", "autoRows", "autoColumns", "autoFlow", "justifyItems", "justifyContent", "alignItems", "alignContent", "children", "style"]);
    // Styles
    const GridStyle = css(Object.assign({ display: "grid", grid: getReactiveProp(grid, breakpoint), gap: getReactiveProp(gap, breakpoint), rowGap: getReactiveProp(rowGap, breakpoint), columnGap: getReactiveProp(columnGap, breakpoint), gridTemplate: getReactiveProp(template, breakpoint), gridTemplateRows: getReactiveProp(templateRows, breakpoint), gridTemplateColumns: getReactiveProp(templateColumns, breakpoint), gridTemplateAreas: getReactiveProp(templateAreas, breakpoint), gridAutoRows: getReactiveProp(autoRows, breakpoint), gridAutoColumns: getReactiveProp(autoColumns, breakpoint), gridAutoFlow: getReactiveProp(autoFlow, breakpoint), justifyItems: getReactiveProp(justifyItems, breakpoint), justifyContent: getReactiveProp(justifyContent, breakpoint), alignItems: getReactiveProp(alignItems, breakpoint), alignContent: getReactiveProp(alignContent, breakpoint) }, getReactiveProp(style, breakpoint)));
    return (_jsx(PolymorphicLayout, Object.assign({ css: GridStyle, ref: ref }, rest, { children: children })));
});
const Item = forwardRef(function GridItem(props, ref) {
    const theme = useContext(ValenceContext);
    const breakpoint = useBreakpoint();
    // Defaults
    const { area, column = "auto", columnStart, columnEnd, row = "auto", rowStart, rowEnd, justify = "stretch", align = "stretch", place, order, children, style } = props, rest = __rest(props, ["area", "column", "columnStart", "columnEnd", "row", "rowStart", "rowEnd", "justify", "align", "place", "order", "children", "style"]);
    // Styles
    const ItemStyle = css(Object.assign({ gridArea: getReactiveProp(area, breakpoint), gridColumn: getReactiveProp(column, breakpoint), gridColumnStart: getReactiveProp(columnStart, breakpoint), gridColumnEnd: getReactiveProp(columnEnd, breakpoint), gridRow: getReactiveProp(row, breakpoint), gridRowStart: getReactiveProp(rowStart, breakpoint), gridRowEnd: getReactiveProp(rowEnd, breakpoint), justifySelf: getReactiveProp(justify, breakpoint), alignSelf: getReactiveProp(align, breakpoint), placeSelf: getReactiveProp(place, breakpoint), order: getReactiveProp(order, breakpoint) }, getReactiveProp(style, breakpoint)));
    return (_jsx(PolymorphicLayout, Object.assign({ css: ItemStyle, ref: ref }, rest, { children: children })));
});
const GridNamespace = Object.assign(Grid, { Item });
export { GridNamespace as Grid };
