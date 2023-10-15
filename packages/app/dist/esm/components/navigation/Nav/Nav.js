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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, IconButton, PrimitiveButton, Space, useBreakpoint } from "@valence-ui/core";
import { getReactiveProp } from "@valence-ui/utils";
/** The App Nav is designed to handle inter-page navigation and application-level actions, such as page navigation, signing out, etc. This particular navigator is presented as a vertical icon button strip down the left-hand side of the screen on desktop devices, and a horizontal icon button strip along the bottom of the screen on mobile devices. */
export function Nav(props) {
    const breakpoint = useBreakpoint();
    // Defaults
    const { buttons, bottomButtons, gap = 5, favicon, faviconProps, style } = props, rest = __rest(props, ["buttons", "bottomButtons", "gap", "favicon", "faviconProps", "style"]);
    // Styles
    const navStyle = {
        default: Object.assign({ height: "100%" }, getReactiveProp(style, breakpoint)),
        mobile: Object.assign({ width: "100%" }, getReactiveProp(style, breakpoint)),
    };
    const faviconStyle = {
        width: 25,
    };
    return (_jsxs(Flex, Object.assign({ direction: { default: "column", mobile: "row" }, gap: props.gap, style: navStyle, justify: { default: "unset", mobile: "space-around" } }, rest, { children: [favicon && !breakpoint.isMobile &&
                _jsx(Flex, { align: "center", justify: "center", height: 100, children: _jsx(PrimitiveButton, Object.assign({ motion: { onHover: "grow", onTap: "shrink" }, square: true }, faviconProps, { children: _jsx("img", { src: favicon, alt: "favicon", style: faviconStyle }) })) }), buttons.map(b => _jsx(IconButton, Object.assign({ color: "white", variant: b.highlighted ? "light" : "subtle", radius: breakpoint.isMobile ? "xl" : undefined, square: !breakpoint.isMobile, grow: true, component: "link" }, b, { children: b.children }), b.id)), !breakpoint.isMobile && _jsx(Space, { grow: true, height: "100%" }), bottomButtons && bottomButtons.map(b => _jsx(IconButton, Object.assign({ color: "white", variant: b.highlighted ? "light" : "subtle", radius: breakpoint.isMobile ? "xl" : undefined, square: !breakpoint.isMobile, grow: true, component: "link" }, b, { children: b.children }), b.id))] })));
}
