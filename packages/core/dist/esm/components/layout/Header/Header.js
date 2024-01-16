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
import { forwardRef, useState } from "react";
import { Flex } from "../Flex";
import { useColors, useResponsiveProp, useResponsiveProps } from "../../..";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
function interpolateHeight(max, min, scrollY) {
    return Math.max(max + scrollY, min);
}
/** A layout component that helps position `Title` and similar components.
 *
 * On desktop devices, the `Header` will act as a static container that can be placed anywhere and will scroll with the content. On mobile devices, however, the `Header` will become fixed tot he top of the screen and can shrink as the user scrolls.
 */
export const Header = forwardRef(function Header(props, ref) {
    const { getHex } = useColors();
    // Defaults
    const _a = useResponsiveProps(props), { height: headerHeight = useResponsiveProp({ default: 100, mobile: 150 }), compactHeight = 75, position = useResponsiveProp({ default: "relative", mobile: "sticky" }), compact = useResponsiveProp({ default: false, mobile: true }), backgroundColor = "white", children, style } = _a, rest = __rest(_a, ["height", "compactHeight", "position", "compact", "backgroundColor", "children", "style"]);
    // Hooks & States
    const [height, setHeight] = useState(headerHeight);
    // Scroll listener
    useScrollPosition(({ prevPos, currPos }) => {
        if (!compact)
            return;
        setHeight(interpolateHeight(headerHeight, compactHeight, (prevPos.y + currPos.y) / 2));
    });
    // Styles
    const HeaderStyle = Object.assign({ backgroundColor: getHex(backgroundColor, "strong"), backdropFilter: "blur(10px)", position: position, top: 0, zIndex: 150, width: "100%" }, style);
    return (_jsx(Flex, Object.assign({ style: HeaderStyle, direction: "column", justify: "center", height: height, ref: ref }, rest, { children: children })));
});
