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
exports.JumpSidebar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const core_1 = require("@valence-ui/core");
/** The App Sidebar is a page used for navigation and high-level actions within the context of an individual page. This particular sidebar is designed for navigation, and will automatically adapt between desktop and mobile-class devices.  */
exports.JumpSidebar = (0, react_1.forwardRef)(function JumpSidebar(props, ref) {
    const theme = (0, react_1.useContext)(core_1.ValenceContext);
    const breakpoint = (0, core_1.useBreakpoint)();
    // Defaults
    const _a = (0, core_1.useResponsiveProps)(props), { buttons, jumpToSection, gap = 5, width = "100%", style } = _a, rest = __rest(_a, ["buttons", "jumpToSection", "gap", "width", "style"]);
    // Styles
    const containerStyle = {
        default: Object.assign({ width: width, borderRight: `1px solid ${theme.getColorHex("black")
                + theme.getColorHex("black", "weak")}`, paddingRight: 10, position: "sticky", top: 0, overflowX: "hidden", overflowY: "auto" }, style),
        mobile: Object.assign({ width: width, borderTop: `1px solid ${theme.getColorHex("black")
                + theme.getColorHex("black", "weak")}`, padding: "10px 0px 10px 0px", backgroundColor: theme.getColorHex("white"), position: "sticky", top: 0, zIndex: 999 }, style)
    };
    return ((0, jsx_runtime_1.jsx)(core_1.Flex, Object.assign({ direction: { default: "column", mobile: "row" }, justify: { default: "unset", mobile: "stretch" }, gap: gap, grow: true, style: containerStyle }, rest, { children: buttons.map(b => breakpoint.isMobile ?
            (0, jsx_runtime_1.jsx)(core_1.IconButton, { square: false, color: "black", variant: b.highlighted ? "light" : "subtle", onClick: () => jumpToSection && b.jumpTo && jumpToSection(b.jumpTo), grow: true, children: b.icon }, b.id)
            :
                (0, jsx_runtime_1.jsx)(core_1.ButtonWithIcon, { color: "black", variant: b.highlighted ? "light" : "subtle", onClick: () => jumpToSection && b.jumpTo && jumpToSection(b.jumpTo), width: "100%", icon: b.icon, children: b.children }, b.id)) })));
});
