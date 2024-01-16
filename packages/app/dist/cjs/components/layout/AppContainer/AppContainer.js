"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = __importStar(require("react"));
const core_1 = require("@valence-ui/core");
const usehooks_ts_1 = require("usehooks-ts");
const AppContext_1 = require("../../../contexts/AppContext");
/**
 * The `AppContainer` component is a layout component that provides a consistent layout for pages in the application. It includes a navigation element, a header element, and an optional sidebar element. The `AppContainer` component is responsive and adjusts its layout based on the screen size.
 */
exports.AppContainer = (0, react_1.forwardRef)(function AppContainer(props, ref) {
    const theme = (0, react_1.useContext)(core_1.ValenceContext);
    // Defaults
    const _a = (0, core_1.useResponsiveProps)(props), { nav, header, sidebar, radius = theme.defaults.radius, pageProps, contentWidth = 700, showNav = true, children, style } = _a, rest = __rest(_a, ["nav", "header", "sidebar", "radius", "pageProps", "contentWidth", "showNav", "children", "style"]);
    const borderRadius = theme.sizeClasses.radius[radius] + 5;
    // Hooks
    const [leftRef, { width: leftWidth }] = (0, usehooks_ts_1.useElementSize)();
    // States
    const sidebarDisclosure = (0, core_1.useDisclosure)();
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
            width: borderRadius,
            borderRadius: `${borderRadius}px 0px 0px ${borderRadius}px`,
            backgroundColor: theme.getColorHex("white"),
        },
        mobile: {
            height: borderRadius,
            borderRadius: `0px 0px ${borderRadius}px ${borderRadius}px`,
            backgroundColor: theme.getColorHex("white"),
        }
    };
    const contentContainerStyle = {
        default: {
            backgroundColor: theme.getColorHex("white"),
            paddingLeft: leftWidth + 10,
            paddingRight: 0,
            width: "100vw",
            transition: "padding-right 0.3s ease-in-out",
        }, mobile: {
            backgroundColor: theme.getColorHex("white"),
            padding: 20,
        }
    };
    const contentStyle = {
        width: `min(${contentWidth}px, 100%)`,
        minHeight: "100vh",
        paddingBottom: 200,
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(AppContext_1.AppContext.Provider, { value: {
                sidebarDisclosure,
                contentWidth,
                leftWidth,
            }, children: [(0, jsx_runtime_1.jsxs)(core_1.Flex, Object.assign({ direction: { default: "row", mobile: "column-reverse" }, backgroundColor: "primary", style: pageContainerStyle, gap: 0, ref: leftRef }, rest, { children: [showNav && nav, sidebar ? react_1.default.cloneElement(sidebar, {
                            sideSheetProps: {
                                disclosure: sidebarDisclosure,
                            }
                        }) :
                            (0, jsx_runtime_1.jsx)(core_1.Flex, { style: sidebarReplacementStyle })] })), (0, jsx_runtime_1.jsx)(core_1.Flex, { id: "root-content", align: "center", justify: "center", grow: true, style: contentContainerStyle, children: (0, jsx_runtime_1.jsxs)(core_1.Flex, Object.assign({ direction: "column", style: contentStyle }, pageProps, { children: [header, children] })) })] }) }));
});
