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
import { forwardRef } from "react";
import { Flex } from "../Flex";
import { useColors, useResponsiveProps } from "../../..";
/** A layout component that helps position `Title` and similar components.
 *
 * On desktop devices, the `Header` will act as a static container that can be placed anywhere and will scroll with the content. On mobile devices, however, the `Header` will become fixed tot he top of the screen and can shrink as the user scrolls.
 */
export const Header = forwardRef(function Header(props, ref) {
    const { getHex } = useColors();
    // Defaults
    const _a = useResponsiveProps(props), { height = 75, position = "sticky", direction = "row", align = "center", justify = "space-between", margin = "30px 0", backgroundColor = "white", innerProps = {
        height: height,
        width: "100%",
        direction: direction,
        align: align,
        justify: justify,
    }, children, style } = _a, rest = __rest(_a, ["height", "position", "direction", "align", "justify", "margin", "backgroundColor", "innerProps", "children", "style"]);
    // Styles
    const HeaderStyle = Object.assign({ backgroundColor: getHex(backgroundColor, "strong"), backdropFilter: "blur(10px)", position: position, top: 0, zIndex: 150, width: "100%", margin: margin }, style);
    return (_jsx(Flex, Object.assign({ style: HeaderStyle, height: "fit-content", ref: ref }, rest, { children: _jsx(Flex, Object.assign({}, innerProps, { children: children })) })));
});
