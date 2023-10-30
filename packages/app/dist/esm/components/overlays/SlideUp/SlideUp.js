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
import { ValenceContext, useBreakpoint, ModalOverlay, Flex, useDetectKeyDown } from "@valence-ui/core";
import { getReactiveProp } from "@valence-ui/utils";
import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLockedBody } from "usehooks-ts";
export function SlideUp(props) {
    var _a, _b;
    const theme = useContext(ValenceContext);
    const breakpoint = useBreakpoint();
    // Defaults
    const { opened, close, closeOnOverlayClick = true, closeOnEscape = true, lockScroll = false, radius = "lg", shadow = true, backgroundColor = (_a = theme.getColor("white")) === null || _a === void 0 ? void 0 : _a.base, color = (_b = theme.getColor("black")) === null || _b === void 0 ? void 0 : _b.base, padding = theme.sizeClasses.padding[theme.defaultSize], margin = 0, width, height = "50vh", overlayProps, flexProps, style, children } = props, rest = __rest(props, ["opened", "close", "closeOnOverlayClick", "closeOnEscape", "lockScroll", "radius", "shadow", "backgroundColor", "color", "padding", "margin", "width", "height", "overlayProps", "flexProps", "style", "children"]);
    // Styles
    const borderRadius = theme.sizeClasses.radius[getReactiveProp(radius, breakpoint)];
    const ContainerStyles = css(Object.assign({ position: "fixed", bottom: 0, left: 0, right: 0, width: getReactiveProp(width, breakpoint), height: getReactiveProp(height, breakpoint), backgroundColor: getReactiveProp(backgroundColor, breakpoint), color: getReactiveProp(color, breakpoint), padding: getReactiveProp(padding, breakpoint), margin: getReactiveProp(margin, breakpoint), borderRadius: `${borderRadius}px ${borderRadius}px 0 0`, boxShadow: getReactiveProp(shadow, breakpoint) ? theme.defaultShadow : undefined, zIndex: 999 }, getReactiveProp(style, breakpoint)));
    const OverlayStyle = {
        padding: 0,
        alignItems: "flex-end",
    };
    // Hooks
    useLockedBody(opened && lockScroll, "root");
    useDetectKeyDown(close, "Escape", closeOnEscape, [closeOnEscape, close]);
    return (_jsx(AnimatePresence, { children: opened &&
            _jsx(ModalOverlay, Object.assign({ blurBackground: false, opened: opened, close: close, closeOnClick: closeOnOverlayClick, style: OverlayStyle }, overlayProps, { children: _jsx(motion.div, { css: ContainerStyles, id: rest.id, onClick: e => e.stopPropagation(), initial: { y: "100%" }, animate: { y: 0 }, exit: { y: "100%" }, transition: { ease: "easeOut", duration: 0.1 }, children: _jsx(Flex, Object.assign({ direction: "column" }, flexProps, { children: children })) }) })) }));
}
