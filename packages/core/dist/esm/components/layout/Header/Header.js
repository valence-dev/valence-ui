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
import { useBreakpoint, useValence } from "../../..";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { getReactiveProp, meetsBreakpointCondition } from "@valence-ui/utils";
function interpolateHeight(max, min, scrollY) {
    return Math.max(max + scrollY, min);
}
/** A layout component that helps position `Title` and similar components.
 *
 * On desktop devices, the `Header` will act as a static container that can be placed anywhere and will scroll with the content. On mobile devices, however, the `Header` will become fixed tot he top of the screen and can shrink as the user scrolls.
 */
export const Header = forwardRef(function Header(props, ref) {
    const theme = useValence();
    // Defaults
    const { height: headerHeight = {
        default: 100,
        mobileTall: 150,
    }, compactHeight = 75, position = {
        default: "relative",
        mobile: "fixed",
    }, compact = ["mobile", "mobileTall"], backgroundColor = "white", children, style } = props, rest = __rest(props, ["height", "compactHeight", "position", "compact", "backgroundColor", "children", "style"]);
    // Hooks & States
    const breakpoint = useBreakpoint();
    const [height, setHeight] = useState(getReactiveProp(headerHeight, breakpoint));
    // Scroll listener
    useScrollPosition(({ prevPos, currPos }) => {
        if (!meetsBreakpointCondition(breakpoint, compact))
            return;
        setHeight(interpolateHeight(getReactiveProp(headerHeight, breakpoint), compactHeight, (prevPos.y + currPos.y) / 2));
    });
    // Styles
    const HeaderStyle = Object.assign({ backgroundColor: theme.getColorHex(getReactiveProp(backgroundColor, breakpoint), "strong"), backdropFilter: "blur(10px)", position: getReactiveProp(position, breakpoint), top: 0, zIndex: 150, width: "100%" }, getReactiveProp(style, breakpoint));
    return (_jsx(Flex, Object.assign({ style: HeaderStyle, direction: "column", justify: "center", height: height, ref: ref }, rest, { children: children })));
});
