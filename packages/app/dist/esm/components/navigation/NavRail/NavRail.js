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
import { Flex, IconButton, PrimitiveButton, Space, useBreakpoint, useResponsiveProps, useValence } from "@valence-ui/core";
import { forwardRef } from "react";
export const NavRail = forwardRef(function Nav(props, ref) {
    const theme = useValence();
    const breakpoint = useBreakpoint();
    const _a = useResponsiveProps(props), { buttons, favicon, showFavicon = useResponsiveProps({ default: true, mobile: false }), faviconProps, padding = theme.getSize("padding") / 2, gap = padding, direction = useResponsiveProps({ default: "column", mobile: "row" }), justify = useResponsiveProps({ default: "unset", mobile: "space-around" }), component = "nav", style } = _a, rest = __rest(_a, ["buttons", "favicon", "showFavicon", "faviconProps", "padding", "gap", "direction", "justify", "component", "style"]);
    const _b = faviconProps !== null && faviconProps !== void 0 ? faviconProps : {}, { alt: faviconAlt = "Favicon", square: faviconSquare = true, motion: faviconMotion = { onHover: "grow", onTap: "shrink" } } = _b, faviconPropsRest = __rest(_b, ["alt", "square", "motion"]);
    const topButtons = buttons.filter(b => b.position !== "bottom");
    const bottomButtons = buttons.filter(b => b.position === "bottom");
    // Styles
    const ContainerStyle = {
        default: Object.assign({ height: "100%" }, style),
        mobile: Object.assign({ width: "100%", marginBottom: "env(safe-area-inset-bottom)" }, style),
    };
    return (_jsxs(Flex, Object.assign({ component: component, direction: direction, justify: justify, padding: padding, gap: gap, style: ContainerStyle, ref: ref }, rest, { children: [showFavicon && favicon && (typeof favicon === "string" ? (_jsx(Flex, { align: "center", justify: "center", height: 100, children: _jsx(PrimitiveButton, Object.assign({ motion: faviconMotion, square: faviconSquare }, faviconPropsRest, { children: _jsx("img", { src: favicon, alt: faviconAlt, style: { width: 25 } }) })) })) : favicon), topButtons.map(button => {
                const { id, highlighted, position, show = true, children, to, color = "white", variant = highlighted ? "light" : "subtle", radius = useResponsiveProps({ default: undefined, mobile: "xl" }), square = useResponsiveProps({ default: true, mobile: false }), component = to ? "link" : undefined } = button, buttonRest = __rest(button, ["id", "highlighted", "position", "show", "children", "to", "color", "variant", "radius", "square", "component"]);
                if (!useResponsiveProps(show))
                    return null;
                return (_jsx(IconButton, Object.assign({ color: color, variant: variant, radius: radius, square: square, component: component, to: to }, buttonRest, { children: children }), id));
            }), !breakpoint.isMobile && _jsx(Space, { grow: true, height: "100%" }), bottomButtons.map(button => {
                const { id, highlighted, position, show = true, children, to, color = "white", variant = highlighted ? "light" : "subtle", radius = useResponsiveProps({ default: undefined, mobile: "xl" }), square = useResponsiveProps({ default: true, mobile: false }), component = to ? "link" : undefined } = button, buttonRest = __rest(button, ["id", "highlighted", "position", "show", "children", "to", "color", "variant", "radius", "square", "component"]);
                if (!useResponsiveProps(show))
                    return null;
                return (_jsx(IconButton, Object.assign({ color: color, variant: variant, radius: radius, square: square, component: component, to: to }, buttonRest, { children: children }), id));
            })] })));
});
