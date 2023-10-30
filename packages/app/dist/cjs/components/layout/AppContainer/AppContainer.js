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
exports.AppContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const core_1 = require("@valence-ui/core");
/**
 * The `AppContainer` component is a layout component that provides a consistent layout for pages in the application. It includes a navigation element, a header element, and an optional sidebar element. The `AppContainer` component is responsive and adjusts its layout based on the screen size.
 */
function AppContainer(props) {
    var _a, _b, _c, _d;
    const theme = (0, react_1.useContext)(core_1.ValenceContext);
    const breakpoint = (0, core_1.useBreakpoint)();
    // Defaults
    const { nav, header, sidebar, radius = theme.defaultRadius, navContainerProps, pageProps, contentWidth = 700, sidebarWidth = 270, navWidth = 65, children } = props, rest = __rest(props, ["nav", "header", "sidebar", "radius", "navContainerProps", "pageProps", "contentWidth", "sidebarWidth", "navWidth", "children"]);
    const borderRadius = theme.sizeClasses.radius[radius] + 5;
    // Styles
    const pageContainerStyle = {
        default: {
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
        }, mobile: {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100vw",
            zIndex: 999,
        }
    };
    const sidebarContainerStyle = {
        default: {
            width: sidebar ? sidebarWidth : 0,
            backgroundColor: (_a = theme.getColor("white")) === null || _a === void 0 ? void 0 : _a.base,
            borderRadius: `${borderRadius}px 0px 0px ${borderRadius}px`,
            padding: 10,
        }, mobile: {
            backgroundColor: (_b = theme.getColor("white")) === null || _b === void 0 ? void 0 : _b.base,
            borderRadius: `0px 0px ${borderRadius}px ${borderRadius}px`,
            overflow: "auto",
            padding: `0px 10px`,
            minHeight: borderRadius,
        }
    };
    const contentContainerStyle = {
        default: {
            backgroundColor: (_c = theme.getColor("white")) === null || _c === void 0 ? void 0 : _c.base,
            paddingLeft: props.sidebar ? sidebarWidth + navWidth : navWidth,
            paddingRight: 30,
            width: "100vw",
        }, mobile: {
            backgroundColor: (_d = theme.getColor("white")) === null || _d === void 0 ? void 0 : _d.base,
            padding: 20,
        }
    };
    const contentStyle = {
        width: `min(${contentWidth}px, 100%)`,
        minHeight: "100vh"
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(core_1.Flex, Object.assign({ direction: { default: "row", mobile: "column-reverse" }, backgroundColor: "primary", style: pageContainerStyle, gap: 0 }, rest, { children: [(0, jsx_runtime_1.jsx)(core_1.Flex, Object.assign({ direction: "column", align: "center", margin: 10 }, navContainerProps, { children: nav })), (0, jsx_runtime_1.jsx)(core_1.Flex, { direction: "column", style: sidebarContainerStyle, children: sidebar &&
                            (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [!breakpoint.isMobile && header, sidebar] }) })] })), (0, jsx_runtime_1.jsx)(core_1.Flex, { align: "center", justify: "center", grow: true, style: contentContainerStyle, children: (0, jsx_runtime_1.jsxs)(core_1.Flex, Object.assign({ direction: "column", style: contentStyle }, pageProps, { children: [!props.sidebar || breakpoint.isMobile ? header : (0, jsx_runtime_1.jsx)(core_1.Header, {}), children] })) })] }));
}
exports.AppContainer = AppContainer;
