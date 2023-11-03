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
import { getReactiveProp } from "@valence-ui/utils";
import { Flex } from "../Flex";
import { forwardRef } from "react";
import { useBreakpoint } from "../../../hooks";
const Column = forwardRef(function Column(props, ref) {
    const { direction = "column", justify = "center", children } = props, rest = __rest(props, ["direction", "justify", "children"]);
    return (_jsx(Flex, Object.assign({ direction: direction, justify: justify, ref: ref }, rest, { children: children })));
});
const Container = forwardRef(function ColumnContainer(props, ref) {
    const breakpoint = useBreakpoint();
    const { direction = "row", justify = "space-between", flow, style, children } = props, rest = __rest(props, ["direction", "justify", "flow", "style", "children"]);
    // Styles
    const ContainerStyle = Object.assign({ flexFlow: getReactiveProp(flow, breakpoint) }, style);
    return (_jsx(Flex, Object.assign({ direction: direction, justify: justify, style: ContainerStyle }, rest, { children: children })));
});
const ColumnNamespace = Object.assign(Column, { Container });
export { ColumnNamespace as Column };
