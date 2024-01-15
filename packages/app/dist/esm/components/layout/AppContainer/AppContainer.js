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
import { forwardRef, useContext } from "react";
import { Flex, Header, Space, ValenceContext, useBreakpoint, useResponsiveProps } from "@valence-ui/core";
/**
 * The `AppContainer` component is a layout component that provides a consistent layout for pages in the application. It includes a navigation element, a header element, and an optional sidebar element. The `AppContainer` component is responsive and adjusts its layout based on the screen size.
 */
export const AppContainer = forwardRef(function AppContainer(props, ref) {
    var _a;
    const theme = useContext(ValenceContext);
    const breakpoint = useBreakpoint();
    // Defaults
    const _b = useResponsiveProps(props), { nav, header, sidebar, radius = theme.defaults.radius, navContainerProps, pageProps, contentWidth = 700, sidebarWidth = 270, navWidth = 65, showHeaderSpacer = true, showNav = true, children, style } = _b, rest = __rest(_b, ["nav", "header", "sidebar", "radius", "navContainerProps", "pageProps", "contentWidth", "sidebarWidth", "navWidth", "showHeaderSpacer", "showNav", "children", "style"]);
    const borderRadius = theme.sizeClasses.radius[radius] + 5;
    // Styles
    const pageContainerStyle = Object.assign({ default: {
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
        } }, style);
    const sidebarContainerStyle = {
        default: {
            width: sidebar ? sidebarWidth : 0,
            backgroundColor: theme.getColorHex("white"),
            borderRadius: `${borderRadius}px 0px 0px ${borderRadius}px`,
            padding: 10,
        }, mobile: {
            backgroundColor: theme.getColorHex("white"),
            borderRadius: showNav ?
                `0px 0px ${borderRadius}px ${borderRadius}px`
                : 0,
            overflow: "auto",
            padding: `0px 10px`,
            minHeight: borderRadius,
        },
    };
    const contentContainerStyle = {
        default: {
            backgroundColor: theme.getColorHex("white"),
            paddingLeft: sidebar ? sidebarWidth + navWidth : navWidth,
            paddingRight: 30,
            width: "100vw",
            transition: "padding-right 0.3s ease-in-out",
        }, mobile: {
            backgroundColor: (_a = theme.getColor("white")) === null || _a === void 0 ? void 0 : _a.base,
            padding: 20,
        }
    };
    const contentStyle = {
        width: `min(${contentWidth}px, 100%)`,
        minHeight: "100vh",
        paddingBottom: 200,
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Flex, Object.assign({ direction: { default: "row", mobile: "column-reverse" }, backgroundColor: "primary", style: pageContainerStyle, gap: 0, ref: ref }, rest, { children: [showNav && _jsx(Flex, Object.assign({ direction: "column", align: "center", margin: 10 }, navContainerProps, { children: nav })), _jsx(Flex, { direction: "column", style: sidebarContainerStyle, children: sidebar &&
                            _jsxs(_Fragment, { children: [!breakpoint.isMobile && header, sidebar] }) })] })), _jsx(Flex, { id: "root-content", align: "center", justify: "center", grow: true, style: contentContainerStyle, children: _jsxs(Flex, Object.assign({ direction: "column", style: contentStyle }, pageProps, { children: [!props.sidebar || breakpoint.isMobile ? header : _jsx(Header, {}), breakpoint.isMobile && showHeaderSpacer && _jsx(Space, { height: 120 }), children] })) })] }));
});
