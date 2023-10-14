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
const core_1 = require("@valence-ui/core");
const utils_1 = require("@valence-ui/utils");
/** The App Nav is designed to handle inter-page navigation and application-level actions, such as page navigation, signing out, etc. This particular navigator is presented as a vertical icon button strip down the left-hand side of the screen on desktop devices, and a horizontal icon button strip along the bottom of the screen on mobile devices. */
function Nav(props) {
    const breakpoint = (0, core_1.useBreakpoint)();
    // Defaults
    const { buttons, bottomButtons, gap = 5, favicon, faviconProps, style } = props, rest = __rest(props, ["buttons", "bottomButtons", "gap", "favicon", "faviconProps", "style"]);
    // Styles
    const navStyle = {
        default: Object.assign({ height: "100%" }, (0, utils_1.getReactiveProp)(style, breakpoint)),
        mobile: Object.assign({ width: "100%" }, (0, utils_1.getReactiveProp)(style, breakpoint)),
    };
    const faviconStyle = {
        width: 25,
    };
    return ((0, jsx_runtime_1.jsxs)(core_1.Flex, Object.assign({ direction: { default: "column", mobile: "row" }, gap: props.gap, style: navStyle, justify: { default: "unset", mobile: "space-around" } }, rest, { children: [favicon && !breakpoint.isMobile &&
                (0, jsx_runtime_1.jsx)(core_1.Flex, { align: "center", justify: "center", height: 100, children: (0, jsx_runtime_1.jsx)(core_1.PrimitiveButton, Object.assign({ motion: { onHover: "grow", onTap: "shrink" }, square: true }, faviconProps, { children: (0, jsx_runtime_1.jsx)("img", { src: favicon, alt: "favicon", style: faviconStyle }) })) }), buttons.map(b => (0, jsx_runtime_1.jsx)(core_1.IconButton, Object.assign({ color: "white", variant: b.highlighted ? "light" : "subtle", radius: breakpoint.isMobile ? "xl" : undefined, square: !breakpoint.isMobile, grow: true, component: "link" }, b, { children: b.children }), b.id)), !breakpoint.isMobile && (0, jsx_runtime_1.jsx)(core_1.Space, { grow: true, height: "100%" }), bottomButtons && bottomButtons.map(b => (0, jsx_runtime_1.jsx)(core_1.IconButton, Object.assign({ color: "white", variant: b.highlighted ? "light" : "subtle", radius: breakpoint.isMobile ? "xl" : undefined, square: !breakpoint.isMobile, grow: true, component: "link" }, b, { children: b.children }), b.id))] })));
}
exports.Nav = Nav;
