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
import { useBreakpoint, useValenceContext } from "../../..";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { getReactiveProp } from "@valence-ui/utils";
function interpolateHeight(max, min, scrollY) {
    return Math.max(max + scrollY, min);
}
/** A layout component that helps position `Title` and similar components.
 *
 * On desktop devices, the `Header` will act as a static container that can be placed anywhere and will scroll with the content. On mobile devices, however, the `Header` will become fixed tot he top of the screen and can shrink as the user scrolls.
 */
export const Header = forwardRef(function Header(props, ref) {
    var _a;
    const theme = useValenceContext();
    // Defaults
    const { regularHeight = 100, tallHeight = 150, compactHeight = 75, compactOnScroll = true, backgroundColor = "white", children, style } = props, rest = __rest(props, ["regularHeight", "tallHeight", "compactHeight", "compactOnScroll", "backgroundColor", "children", "style"]);
    // Hooks & States
    const breakpoint = useBreakpoint();
    const [height, setHeight] = useState(((_a = props.height) !== null && _a !== void 0 ? _a : breakpoint.isMobileTall) ? tallHeight : regularHeight);
    // Scroll listener
    useScrollPosition(({ prevPos, currPos }) => {
        var _a;
        if (!compactOnScroll || !breakpoint.isMobile)
            return;
        setHeight(interpolateHeight(((_a = props.height) !== null && _a !== void 0 ? _a : breakpoint.isMobileTall) ? tallHeight : regularHeight, compactHeight, (prevPos.y + currPos.y) / 2));
    });
    // Styles
    const HeaderStyle = Object.assign({ backgroundColor: theme.getColorHex(getReactiveProp(backgroundColor, breakpoint), "strong"), backdropFilter: breakpoint.isMobile ? "blur(5px)" : undefined, position: breakpoint.isMobile ? "fixed" : undefined, top: 0, zIndex: 150, width: "100%" }, getReactiveProp(style, breakpoint));
    return (_jsx(Flex, Object.assign({ style: HeaderStyle, direction: "column", justify: "center", height: height, ref: ref }, rest, { children: children })));
});
