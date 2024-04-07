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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, useColors, useDisclosure, useResponsiveProps, useValence } from "@valence-ui/core";
import { forwardRef } from "react";
import { AppContainerContext } from "../../../contexts";
export const AppContainer = forwardRef(function AppContainer(props, ref) {
    const theme = useValence();
    const { getHex } = useColors();
    // Defaults
    const _a = useResponsiveProps(props), { navRail, drawer, showNavRail = true, mainOuterProps, mainProps, navColor = "primary", backgroundColor = "white", children } = _a, rest = __rest(_a, ["navRail", "drawer", "showNavRail", "mainOuterProps", "mainProps", "navColor", "backgroundColor", "children"]);
    const _b = mainOuterProps !== null && mainOuterProps !== void 0 ? mainOuterProps : {}, { justify: mainJustify = "center", style: outerMainStyle } = _b, outerMainRest = __rest(_b, ["justify", "style"]);
    const _c = mainProps !== null && mainProps !== void 0 ? mainProps : {}, { component: mainComponent = "main", width: mainWidth = "min(700px, 100%)", direction: mainDirection = "column", style: mainStyle } = _c, mainRest = __rest(_c, ["component", "width", "direction", "style"]);
    // App Container context
    const drawerDisclosure = useDisclosure(true);
    // Styles
    const ContainerStyle = {
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: getHex(navColor),
    };
    const radius = theme.sizeClasses.radius[theme.defaults.radius] + 5;
    const InnerContainerStyle = {
        default: {
            backgroundColor: getHex(backgroundColor),
            borderRadius: `${radius}px 0px 0px ${radius}px`,
            overflow: "hidden",
            width: "100%",
            height: "100%",
        },
        mobile: {
            backgroundColor: getHex(backgroundColor),
            borderRadius: `0px 0px ${radius}px ${radius}px`,
            overflow: "hidden",
            width: "100%",
            height: 200,
            flexGrow: 1,
        }
    };
    const OuterMainStyle = Object.assign({ width: 300, flexGrow: 1, 
        // width: "100%",
        height: "100%", overflowY: "auto" }, outerMainStyle);
    const MainStyle = Object.assign({ padding: theme.getSize("padding"), height: "fit-content", minHeight: "100%", paddingBottom: 200 }, mainStyle);
    return (_jsx(AppContainerContext.Provider, { value: {
            drawerDisclosure
        }, children: _jsxs(Flex, Object.assign({ direction: { default: "row", mobile: "column-reverse" }, style: ContainerStyle, gap: 0, ref: ref }, rest, { children: [showNavRail && navRail, _jsxs(Flex, { direction: "row", gap: 0, style: InnerContainerStyle, children: [drawer, _jsx(Flex, Object.assign({ justify: mainJustify, style: OuterMainStyle }, outerMainRest, { children: _jsx(Flex, Object.assign({ component: mainComponent, width: mainWidth, direction: mainDirection, style: MainStyle }, mainRest, { children: children })) }))] })] })) }));
});
