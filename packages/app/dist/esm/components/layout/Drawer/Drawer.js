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
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Flex, useColors, useResponsiveProps, useValence } from "@valence-ui/core";
import { forwardRef } from "react";
import { DragSizing } from "react-drag-sizing";
import { SideSheet } from "../../overlays";
import { useAppContainerContext } from "../../../contexts/AppContainerContext";
export const Drawer = forwardRef(function Drawer(props, ref) {
    const { getHex } = useColors();
    const theme = useValence();
    const containerContext = useAppContainerContext();
    const { resizeDirection = "right", minWidth = 250, maxWidth = 400, initialWidth = minWidth, type = useResponsiveProps({ default: "inline", mobile: "overlay" }), backgroundColor = getHex("primary") + "15", dragResizeProps, flexProps, children, } = useResponsiveProps(props);
    const _a = flexProps !== null && flexProps !== void 0 ? flexProps : {}, { width: flexWidth = "100%", height: flexHeight = "100%", direction: flexDirection = "column", padding: flexPadding = theme.getSize("padding"), style: flexStyle } = _a, flexRest = __rest(_a, ["width", "height", "direction", "padding", "style"]);
    // Styles
    const SizingCSS = css({
        height: "100%",
        minWidth: minWidth,
        maxWidth: maxWidth,
        width: initialWidth,
        overflowX: "hidden",
    });
    const FlexStyle = Object.assign({ backgroundColor: backgroundColor, overflowX: "hidden" }, flexStyle);
    const subComponents = (_jsx(Flex, Object.assign({ ref: ref, width: flexWidth, height: flexHeight, direction: flexDirection, padding: flexPadding, style: FlexStyle }, flexRest, { children: children })));
    return (type === "overlay" ? (_jsx(SideSheet, { title: "", disclosure: containerContext.drawerDisclosure, direction: "left", children: subComponents })) : resizeDirection !== "none" ? (_jsx(DragSizing, Object.assign({ border: resizeDirection, css: SizingCSS }, dragResizeProps, { children: subComponents }))) : (subComponents));
});
