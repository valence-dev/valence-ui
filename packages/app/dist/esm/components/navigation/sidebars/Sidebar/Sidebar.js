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
import { Flex, Icon, ValenceContext, useBreakpoint, useDisclosure, useResponsiveProps } from "@valence-ui/core";
import { forwardRef, useContext } from "react";
import { FAB } from "../../../buttons";
import { BottomSheet } from "../../../overlays";
import { IconMenu } from "@tabler/icons-react";
export const Sidebar = forwardRef(function Sidebar(props, ref) {
    const theme = useContext(ValenceContext);
    const breakpoint = useBreakpoint();
    // Defaults 
    const _a = useResponsiveProps(props), { gap = theme.sizeClasses.padding[theme.defaults.size], mobileFabProps = {}, mobileFabIcon = _jsx(Icon, { color: "white", children: _jsx(IconMenu, {}) }), width = "100%", height = "100%", children, style } = _a, rest = __rest(_a, ["gap", "mobileFabProps", "mobileFabIcon", "width", "height", "children", "style"]);
    // Styles
    const DesktopStyle = Object.assign({ width: width, height: height, borderRight: `1px solid ${theme.getColorHex("black")
            + theme.getColorHex("black", "weak")}`, paddingRight: 10, position: "sticky", top: 0, overflowX: "hidden", overflowY: "auto" }, style);
    // States
    const slideUp = useDisclosure();
    return (breakpoint.isMobile ?
        _jsxs(_Fragment, { children: [_jsx(FAB, Object.assign({ color: "black", onClick: () => slideUp.open() }, mobileFabProps, { children: mobileFabIcon })), _jsx(BottomSheet, { disclosure: slideUp, title: "", header: () => null, children: children })] })
        :
            _jsx(Flex, Object.assign({ direction: "column", gap: gap, grow: true, style: DesktopStyle, ref: ref }, rest, { children: children })));
});
