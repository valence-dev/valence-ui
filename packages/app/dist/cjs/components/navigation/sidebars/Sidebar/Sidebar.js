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
const utils_1 = require("@valence-ui/utils");
const react_1 = require("react");
const buttons_1 = require("../../../buttons");
const overlays_1 = require("../../../overlays");
const icons_react_1 = require("@tabler/icons-react");
exports.Sidebar = (0, react_1.forwardRef)(function Sidebar(props, ref) {
    var _a, _b;
    const theme = (0, react_1.useContext)(core_1.ValenceContext);
    const breakpoint = (0, core_1.useBreakpoint)();
    const defaultIconProps = (0, core_1.useDefaultIconProps)();
    // Defaults 
    const { gap = theme.sizeClasses.padding[theme.defaultSize], mobileFabProps = {}, mobileFabIcon = (0, jsx_runtime_1.jsx)(icons_react_1.IconMenu, Object.assign({}, defaultIconProps.get("white"))), width = "100%", height = "100%", children, style } = props, rest = __rest(props, ["gap", "mobileFabProps", "mobileFabIcon", "width", "height", "children", "style"]);
    // Styles
    const DesktopStyle = Object.assign({ width: (0, utils_1.getReactiveProp)(width, breakpoint), height: (0, utils_1.getReactiveProp)(height, breakpoint), borderRight: `1px solid ${((_a = theme.getColor("black")) === null || _a === void 0 ? void 0 : _a.base)
            + ((_b = theme.getColor("black")) === null || _b === void 0 ? void 0 : _b.opacity.weak)}`, paddingRight: 10, position: "sticky", top: 0, overflowX: "hidden", overflowY: "auto" }, (0, utils_1.getReactiveProp)(style, breakpoint));
    // States
    const [slideUpOpened, setSlideUpOpened] = (0, react_1.useState)(false);
    return (breakpoint.isMobile ?
        (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(buttons_1.FAB, Object.assign({ color: "black", onClick: () => setSlideUpOpened(true) }, mobileFabProps, { children: mobileFabIcon })), (0, jsx_runtime_1.jsx)(overlays_1.SlideUp, { opened: slideUpOpened, close: () => setSlideUpOpened(false), children: children })] })
        :
            (0, jsx_runtime_1.jsx)(core_1.Flex, Object.assign({ direction: "column", gap: gap, grow: true, style: DesktopStyle, ref: ref }, rest, { children: children })));
});
