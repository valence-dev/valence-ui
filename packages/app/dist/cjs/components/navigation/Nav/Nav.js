"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nav = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const core_1 = require("@valence-ui/core");
/** The App Nav is designed to handle inter-page navigation and application-level actions, such as page navigation, signing out, etc. This particular navigator is presented as a vertical icon button strip down the left-hand side of the screen on desktop devices, and a horizontal icon button strip along the bottom of the screen on mobile devices. */
exports.Nav = (0, react_1.forwardRef)(function Nav(props, ref) {
    const breakpoint = (0, core_1.useBreakpoint)();
    // Defaults
    const _a = (0, core_1.useResponsiveProps)(props), { buttons, bottomButtons, gap = 10, padding = 10, favicon, faviconProps, style } = _a, rest = __rest(_a, ["buttons", "bottomButtons", "gap", "padding", "favicon", "faviconProps", "style"]);
    // Styles
    const navStyle = {
        default: Object.assign({ height: "100%", boxSizing: "border-box" }, style),
        mobile: Object.assign({ width: "100%", boxSizing: "border-box", marginBottom: "env(safe-area-inset-bottom)" }, style),
    };
    const faviconStyle = {
        width: 25,
    };
    return ((0, jsx_runtime_1.jsxs)(core_1.Flex, Object.assign({ direction: { default: "column", mobile: "row" }, gap: gap, padding: padding, style: navStyle, justify: { default: "unset", mobile: "space-around" }, ref: ref }, rest, { children: [favicon && !breakpoint.isMobile &&
                (0, jsx_runtime_1.jsx)(core_1.Flex, { align: "center", justify: "center", height: 100, children: (0, jsx_runtime_1.jsx)(core_1.PrimitiveButton, Object.assign({ motion: { onHover: "grow", onTap: "shrink" }, square: true }, faviconProps, { children: (0, jsx_runtime_1.jsx)("img", { src: favicon, alt: "favicon", style: faviconStyle }) })) }), buttons.map(b => {
                const { id, highlighted, show = true, children, to } = b, rest = __rest(b, ["id", "highlighted", "show", "children", "to"]);
                if (!(0, core_1.useResponsiveProps)(show))
                    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}));
                return ((0, jsx_runtime_1.jsx)(core_1.IconButton, Object.assign({ color: "white", variant: highlighted ? "light" : "subtle", radius: breakpoint.isMobile ? "xl" : undefined, square: !breakpoint.isMobile, component: to ? "link" : undefined, to: to }, rest, { children: children }), id));
            }), !breakpoint.isMobile && (0, jsx_runtime_1.jsx)(core_1.Space, { grow: true, height: "100%" }), bottomButtons && bottomButtons.map(b => {
                const { id, highlighted, show = true, children, to } = b, rest = __rest(b, ["id", "highlighted", "show", "children", "to"]);
                if (!(0, core_1.useResponsiveProps)(show))
                    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}));
                return ((0, jsx_runtime_1.jsx)(core_1.IconButton, Object.assign({ color: "white", variant: highlighted ? "light" : "subtle", radius: breakpoint.isMobile ? "xl" : undefined, square: !breakpoint.isMobile, component: to ? "link" : undefined, to: to }, rest, { children: children }), id));
            })] })));
});
