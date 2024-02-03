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
import { Flex } from "../Flex";
import { forwardRef } from "react";
import { useResponsiveProps } from "../../../utilities";
export const OverflowContainer = forwardRef(function OverflowContainer(props, ref) {
    const _a = useResponsiveProps(props), { direction = "vertical", width = "100%", height = "100%", innerProps, children, style } = _a, rest = __rest(_a, ["direction", "width", "height", "innerProps", "children", "style"]);
    const _b = innerProps || {}, { style: innerStyle, width: innerWidth = "100%", height: innerHeight = "fit-content", direction: innerDirection = "column" } = _b, innerRest = __rest(_b, ["style", "width", "height", "direction"]);
    // Styles
    const OverflowContainerStyle = css(Object.assign(Object.assign({ width: width, height: height }, (direction !== "none" ? {
        overflowX: direction === "horizontal" || direction === "both" ? "auto" : "hidden",
        overflowY: direction === "vertical" || direction === "both" ? "auto" : "hidden",
    } : {
        overflow: "hidden",
        touchAction: "none",
    })), style));
    return (_jsx("div", Object.assign({ css: OverflowContainerStyle }, rest, { children: _jsx(Flex, Object.assign({ ref: ref, style: innerStyle, width: innerWidth, height: innerHeight, direction: innerDirection }, innerRest, { children: children })) })));
});
