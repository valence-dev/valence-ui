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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { forwardRef, useContext } from "react";
import { Flex, ValenceContext, useColors, useDisclosure, useResponsiveProps } from "@valence-ui/core";
import { useElementSize } from "usehooks-ts";
import { AppContext } from "../../../contexts/AppContext";
/**
 * The `AppContainer` component is a layout component that provides a consistent layout for pages in the application. It includes a navigation element, a header element, and an optional sidebar element. The `AppContainer` component is responsive and adjusts its layout based on the screen size.
 */
export const AppContainer = forwardRef(function AppContainer(props, ref) {
    const theme = useContext(ValenceContext);
    const { getHex } = useColors();
    // Defaults
    const _a = useResponsiveProps(props), { nav, header, sidebar, pageProps, contentWidth = 700, showNav = true, children, style } = _a, rest = __rest(_a, ["nav", "header", "sidebar", "pageProps", "contentWidth", "showNav", "children", "style"]);
    const radius = theme.sizeClasses.radius[theme.defaults.radius] + 5;
    // Hooks
    const [leftRef, { width: leftWidth }] = useElementSize();
    // States
    const sidebarDisclosure = useDisclosure();
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
    const sidebarReplacementStyle = {
        default: {
            width: radius,
            height: "100%",
            borderRadius: `${radius}px 0px 0px ${radius}px`,
            backgroundColor: getHex("white"),
        },
        mobile: {
            height: radius,
            width: "100%",
            borderRadius: `0px 0px ${radius}px ${radius}px`,
            backgroundColor: getHex("white"),
        }
    };
    const contentContainerStyle = {
        default: {
            backgroundColor: getHex("white"),
            paddingLeft: leftWidth + 10,
            paddingRight: 0,
            width: "100vw",
            transition: "padding-right 0.3s ease-in-out",
        }, mobile: {
            backgroundColor: getHex("white"),
            padding: 20,
        }
    };
    const contentStyle = {
        width: `min(${contentWidth}px, 100%)`,
        minHeight: "100vh",
        paddingBottom: 200,
    };
    return (_jsx(_Fragment, { children: _jsxs(AppContext.Provider, { value: {
                sidebarDisclosure,
                contentWidth,
                leftWidth,
            }, children: [_jsxs(Flex, Object.assign({ direction: { default: "row", mobile: "column-reverse" }, backgroundColor: "primary", style: pageContainerStyle, gap: 0, ref: leftRef }, rest, { children: [showNav && nav, sidebar ? React.cloneElement(sidebar, {
                            sideSheetProps: {
                                disclosure: sidebarDisclosure,
                            }
                        }) :
                            _jsx(Flex, { style: sidebarReplacementStyle }, "flex2")] })), _jsx(Flex, { id: "root-content", align: "center", justify: "center", grow: true, style: contentContainerStyle, children: _jsxs(Flex, Object.assign({ direction: "column", style: contentStyle }, pageProps, { children: [header, children] })) })] }) }));
});
