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
import { Flex, Icon, ValenceContext, useBreakpoint, useDisclosure } from "@valence-ui/core";
import { getReactiveProp } from "@valence-ui/utils";
import { forwardRef, useContext } from "react";
import { FAB } from "../../../buttons";
import { BottomSheet } from "../../../overlays";
import { IconMenu } from "@tabler/icons-react";
export const Sidebar = forwardRef(function Sidebar(props, ref) {
    var _a, _b;
    const theme = useContext(ValenceContext);
    const breakpoint = useBreakpoint();
    // Defaults 
    const { gap = theme.sizeClasses.padding[theme.defaultSize], mobileFabProps = {}, mobileFabIcon = _jsx(Icon, { color: "white", children: _jsx(IconMenu, {}) }), width = "100%", height = "100%", children, style } = props, rest = __rest(props, ["gap", "mobileFabProps", "mobileFabIcon", "width", "height", "children", "style"]);
    // Styles
    const DesktopStyle = Object.assign({ width: getReactiveProp(width, breakpoint), height: getReactiveProp(height, breakpoint), borderRight: `1px solid ${((_a = theme.getColor("black")) === null || _a === void 0 ? void 0 : _a.base)
            + ((_b = theme.getColor("black")) === null || _b === void 0 ? void 0 : _b.opacity.weak)}`, paddingRight: 10, position: "sticky", top: 0, overflowX: "hidden", overflowY: "auto" }, getReactiveProp(style, breakpoint));
    // States
    const slideUp = useDisclosure();
    return (breakpoint.isMobile ?
        _jsxs(_Fragment, { children: [_jsx(FAB, Object.assign({ color: "black", onClick: () => slideUp.open() }, mobileFabProps, { children: mobileFabIcon })), _jsx(BottomSheet, { disclosure: slideUp, title: "", header: () => null, children: children })] })
        :
            _jsx(Flex, Object.assign({ direction: "column", gap: gap, grow: true, style: DesktopStyle, ref: ref }, rest, { children: children })));
});
