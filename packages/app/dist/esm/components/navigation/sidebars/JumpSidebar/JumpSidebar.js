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
import { forwardRef, useContext } from "react";
import { ButtonWithIcon, Flex, IconButton, ValenceContext, useBreakpoint, useResponsiveProps } from "@valence-ui/core";
/** The App Sidebar is a page used for navigation and high-level actions within the context of an individual page. This particular sidebar is designed for navigation, and will automatically adapt between desktop and mobile-class devices.  */
export const JumpSidebar = forwardRef(function JumpSidebar(props, ref) {
    const theme = useContext(ValenceContext);
    const breakpoint = useBreakpoint();
    // Defaults
    const _a = useResponsiveProps(props), { buttons, jumpToSection, gap = 5, width = "100%", style } = _a, rest = __rest(_a, ["buttons", "jumpToSection", "gap", "width", "style"]);
    // Styles
    const containerStyle = {
        default: Object.assign({ width: width, borderRight: `1px solid ${theme.getColorHex("black")
                + theme.getColorHex("black", "weak")}`, paddingRight: 10, position: "sticky", top: 0, overflowX: "hidden", overflowY: "auto" }, style),
        mobile: Object.assign({ width: width, borderTop: `1px solid ${theme.getColorHex("black")
                + theme.getColorHex("black", "weak")}`, padding: "10px 0px 10px 0px", backgroundColor: theme.getColorHex("white"), position: "sticky", top: 0, zIndex: 999 }, style)
    };
    return (_jsx(Flex, Object.assign({ direction: { default: "column", mobile: "row" }, justify: { default: "unset", mobile: "stretch" }, gap: gap, grow: true, style: containerStyle }, rest, { children: buttons.map(b => breakpoint.isMobile ?
            _jsx(IconButton, { square: false, color: "black", variant: b.highlighted ? "light" : "subtle", onClick: () => jumpToSection && b.jumpTo && jumpToSection(b.jumpTo), grow: true, children: b.icon }, b.id)
            :
                _jsx(ButtonWithIcon, { color: "black", variant: b.highlighted ? "light" : "subtle", onClick: () => jumpToSection && b.jumpTo && jumpToSection(b.jumpTo), width: "100%", icon: b.icon, children: b.children }, b.id)) })));
});
