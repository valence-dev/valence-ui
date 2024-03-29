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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Flex, IconButton, PrimitiveButton, Space, useBreakpoint, useResponsiveProps } from "@valence-ui/core";
/** The App Nav is designed to handle inter-page navigation and application-level actions, such as page navigation, signing out, etc. This particular navigator is presented as a vertical icon button strip down the left-hand side of the screen on desktop devices, and a horizontal icon button strip along the bottom of the screen on mobile devices. */
export const Nav = forwardRef(function Nav(props, ref) {
    const breakpoint = useBreakpoint();
    // Defaults
    const _a = useResponsiveProps(props), { buttons, bottomButtons, gap = 10, padding = 10, favicon, faviconProps, style } = _a, rest = __rest(_a, ["buttons", "bottomButtons", "gap", "padding", "favicon", "faviconProps", "style"]);
    // Styles
    const navStyle = {
        default: Object.assign({ height: "100%", boxSizing: "border-box" }, style),
        mobile: Object.assign({ width: "100%", boxSizing: "border-box", marginBottom: "env(safe-area-inset-bottom)" }, style),
    };
    const faviconStyle = {
        width: 25,
    };
    return (_jsxs(Flex, Object.assign({ direction: { default: "column", mobile: "row" }, gap: gap, padding: padding, style: navStyle, justify: { default: "unset", mobile: "space-around" }, ref: ref }, rest, { children: [favicon && !breakpoint.isMobile &&
                _jsx(Flex, { align: "center", justify: "center", height: 100, children: _jsx(PrimitiveButton, Object.assign({ motion: { onHover: "grow", onTap: "shrink" }, square: true }, faviconProps, { children: _jsx("img", { src: favicon, alt: "favicon", style: faviconStyle }) })) }), buttons.map(b => {
                const { id, highlighted, show = true, children, to } = b, rest = __rest(b, ["id", "highlighted", "show", "children", "to"]);
                if (!useResponsiveProps(show))
                    return (_jsx(_Fragment, {}));
                return (_jsx(IconButton, Object.assign({ color: "white", variant: highlighted ? "light" : "subtle", radius: breakpoint.isMobile ? "xl" : undefined, square: !breakpoint.isMobile, component: to ? "link" : undefined, to: to }, rest, { children: children }), id));
            }), !breakpoint.isMobile && _jsx(Space, { grow: true, height: "100%" }), bottomButtons && bottomButtons.map(b => {
                const { id, highlighted, show = true, children, to } = b, rest = __rest(b, ["id", "highlighted", "show", "children", "to"]);
                if (!useResponsiveProps(show))
                    return (_jsx(_Fragment, {}));
                return (_jsx(IconButton, Object.assign({ color: "white", variant: highlighted ? "light" : "subtle", radius: breakpoint.isMobile ? "xl" : undefined, square: !breakpoint.isMobile, component: to ? "link" : undefined, to: to }, rest, { children: children }), id));
            })] })));
});
