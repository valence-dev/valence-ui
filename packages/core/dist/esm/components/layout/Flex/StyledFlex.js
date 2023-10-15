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
import { useContext } from "react";
import { ValenceContext, useBreakpoint } from "../../..";
import { getBackgroundColor, getTextColor } from "../../buttons";
import { Flex } from "./Flex";
import { getReactiveProp } from "@valence-ui/utils";
/** A styled version of the `Flex` component that offers many props in line with the button styling system */
export function StyledFlex(props) {
    const theme = useContext(ValenceContext);
    const breakpoint = useBreakpoint();
    // Defaults
    const { variant = theme.defaultVariant, size = { default: theme.defaultSize }, radius = { default: theme.defaultRadius }, color = { default: theme.primaryColor }, backgroundColor = color, style, children } = props, rest = __rest(props, ["variant", "size", "radius", "color", "backgroundColor", "style", "children"]);
    // Styles
    const styles = Object.assign({ backgroundColor: getBackgroundColor(getReactiveProp(backgroundColor, breakpoint), getReactiveProp(variant, breakpoint), false, theme), color: getTextColor(getReactiveProp(color, breakpoint), getReactiveProp(variant, breakpoint), theme), borderRadius: theme.sizeClasses.radius[getReactiveProp(radius, breakpoint)] }, getReactiveProp(style, breakpoint));
    return (_jsx(Flex, Object.assign({ style: styles, padding: theme.sizeClasses.padding[getReactiveProp(size, breakpoint)] }, rest, { children: children })));
}
