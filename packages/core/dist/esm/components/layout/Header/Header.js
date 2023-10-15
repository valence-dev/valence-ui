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
import { useContext, useState } from "react";
import { Flex } from "../Flex";
import { ValenceContext, useBreakpoint } from "../../..";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import styled from "styled-components";
import { getReactiveProp } from "@valence-ui/utils";
function interpolateHeight(max, min, scrollY) {
    return Math.max(max + scrollY, min);
}
/** A layout component that helps position `Title` and similar components.
 *
 * On desktop devices, the `Header` will act as a static container that can be placed anywhere and will scroll with the content. On mobile devices, however, the `Header` will become fixed tot he top of the screen and can shrink as the user scrolls.
 */
export function Header(props) {
    var _a, _b;
    const theme = useContext(ValenceContext);
    // Defaults
    const { regularHeight = 100, tallHeight = 150, compactHeight = 75, compactOnScroll = true, backgroundColor = (_a = theme.getColor("white")) === null || _a === void 0 ? void 0 : _a.base, children, style } = props, rest = __rest(props, ["regularHeight", "tallHeight", "compactHeight", "compactOnScroll", "backgroundColor", "children", "style"]);
    // Hooks & States
    const breakpoint = useBreakpoint();
    const [height, setHeight] = useState(((_b = props.height) !== null && _b !== void 0 ? _b : breakpoint.isMobileTall) ? tallHeight : regularHeight);
    // Scroll listener
    useScrollPosition(({ prevPos, currPos }) => {
        var _a;
        if (!compactOnScroll || !breakpoint.isMobile)
            return;
        setHeight(interpolateHeight(((_a = props.height) !== null && _a !== void 0 ? _a : breakpoint.isMobileTall) ? tallHeight : regularHeight, compactHeight, (prevPos.y + currPos.y) / 2));
    });
    // Styles
    const StyledHeader = styled.header(Object.assign({ backgroundColor: getReactiveProp(backgroundColor, breakpoint), position: breakpoint.isMobile ? "fixed" : undefined, top: 0, zIndex: 150, width: "100%" }, style));
    return (_jsx(StyledHeader, Object.assign({ as: Flex, direction: "column", justify: "center", height: height }, rest, { children: children })));
}
