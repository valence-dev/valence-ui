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
import { forwardRef, useContext } from "react";
import { ValenceContext } from "../../..";
import { motion } from "framer-motion";
import { css } from "@emotion/react";
import { FloatingOverlay } from "@floating-ui/react";
export const ModalOverlay = forwardRef(function ModalOverlay(props, ref) {
    const theme = useContext(ValenceContext);
    // Defaults
    const { disclosure, closeOnClick = true, blurBackground = true, backgroundColor = "permaBlack", padding = theme.sizeClasses.padding[theme.defaultSize], zIndex = 500, children, style } = props, rest = __rest(props, ["disclosure", "closeOnClick", "blurBackground", "backgroundColor", "padding", "zIndex", "children", "style"]);
    // Styles
    const OverlayStyle = css(Object.assign({ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: zIndex, backgroundColor: theme.getColorHex(backgroundColor, "strong"), backdropFilter: blurBackground ? "blur(10px)" : "none", padding: padding, display: "flex", alignItems: "center", justifyContent: "center" }, style));
    return (_jsx(FloatingOverlay, { children: _jsx(motion.div, Object.assign({ css: OverlayStyle, onClick: closeOnClick ? disclosure.close : undefined, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, ref: ref }, rest, { children: children })) }));
});
