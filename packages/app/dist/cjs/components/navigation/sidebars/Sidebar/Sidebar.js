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
exports.Sidebar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@valence-ui/core");
const react_1 = require("react");
const buttons_1 = require("../../../buttons");
const overlays_1 = require("../../../overlays");
const icons_react_1 = require("@tabler/icons-react");
exports.Sidebar = (0, react_1.forwardRef)(function Sidebar(props, ref) {
    const theme = (0, react_1.useContext)(core_1.ValenceContext);
    const breakpoint = (0, core_1.useBreakpoint)();
    // Defaults 
    const _a = (0, core_1.useResponsiveProps)(props), { gap = theme.sizeClasses.padding[theme.defaults.size], mobileFabProps = {}, mobileFabIcon = (0, jsx_runtime_1.jsx)(core_1.Icon, { color: "white", children: (0, jsx_runtime_1.jsx)(icons_react_1.IconMenu, {}) }), width = "100%", height = "100%", children, style } = _a, rest = __rest(_a, ["gap", "mobileFabProps", "mobileFabIcon", "width", "height", "children", "style"]);
    // Styles
    const DesktopStyle = Object.assign({ width: width, height: height, borderRight: `1px solid ${theme.getColorHex("black")
            + theme.getColorHex("black", "weak")}`, paddingRight: 10, position: "sticky", top: 0, overflowX: "hidden", overflowY: "auto" }, style);
    // States
    const slideUp = (0, core_1.useDisclosure)();
    return (breakpoint.isMobile ?
        (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(buttons_1.FAB, Object.assign({ color: "black", onClick: () => slideUp.open() }, mobileFabProps, { children: mobileFabIcon })), (0, jsx_runtime_1.jsx)(overlays_1.BottomSheet, { disclosure: slideUp, title: "", header: () => null, children: children })] })
        :
            (0, jsx_runtime_1.jsx)(core_1.Flex, Object.assign({ direction: "column", gap: gap, grow: true, style: DesktopStyle, ref: ref }, rest, { children: children })));
});
