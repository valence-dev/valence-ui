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
import { jsx as _jsx } from "react/jsx-runtime";
import { Flex } from "../Flex";
import { forwardRef } from "react";
import { Grid } from "../Grid";
import { useValence } from "../../../ValenceProvider";
import { useResponsiveProps } from "../../../utilities/responsive";
const Column = forwardRef(function Column(props, ref) {
    const theme = useValence();
    // Defaults
    const _a = useResponsiveProps(props), { direction = "column", justify = "center", color = "black", backgroundColor, padding = theme.sizeClasses.padding[theme.defaults.size], margin, width, height, children } = _a, rest = __rest(_a, ["direction", "justify", "color", "backgroundColor", "padding", "margin", "width", "height", "children"]);
    return (_jsx(Flex, Object.assign({ direction: direction, justify: justify, color: color, backgroundColor: backgroundColor, padding: padding, margin: margin, width: width, height: height, ref: ref }, rest, { children: children })));
});
const Container = forwardRef(function ColumnContainer(props, ref) {
    // Defaults
    const _a = useResponsiveProps(props), { columns = 2, rows = 1, templateColumns = `repeat(${columns}, 1fr)`, templateRows = `repeat(${rows}, 1fr)`, color = "black", backgroundColor, padding, margin, width, height, children } = _a, rest = __rest(_a, ["columns", "rows", "templateColumns", "templateRows", "color", "backgroundColor", "padding", "margin", "width", "height", "children"]);
    // Styles
    const ContainerStyle = {
        color: color,
        backgroundColor: backgroundColor,
        padding: padding,
        margin: margin,
        width: width,
        height: height,
    };
    return (_jsx(Grid, Object.assign({ templateColumns: templateColumns, style: ContainerStyle, ref: ref }, rest, { children: children })));
});
const ColumnNamespace = Object.assign(Column, { Container });
export { ColumnNamespace as Column };
