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
import { forwardRef } from "react";
import { useValence } from "../../..";
import { motion } from "framer-motion";
import { css } from "@emotion/react";
import { FloatingPortal } from "@floating-ui/react";
export const ModalBackground = forwardRef(function ModalBackground(props, ref) {
    const theme = useValence();
    // Defaults
    const { disclosure, closeOnClick = true, backdropFilter = "blur", backgroundColor = "permaBlack", padding = theme.sizeClasses.padding[theme.defaults.size], zIndex = 1002, children, style } = props, rest = __rest(props, ["disclosure", "closeOnClick", "backdropFilter", "backgroundColor", "padding", "zIndex", "children", "style"]);
    // Styles
    const OverlayStyle = css(Object.assign({ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: zIndex, padding: padding, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: backdropFilter === "dot-blur" ? undefined : theme.getColorHex(backgroundColor, "strong"), backgroundImage: backdropFilter !== "dot-blur" ? undefined :
            `radial-gradient(rgba(0, 0, 0, 0) 1px, ${theme.getColorHex("white")} 1px)`, backgroundSize: backdropFilter !== "dot-blur" ? undefined : "4px 4px", backdropFilter: backdropFilter === "dot-blur" ? "blur(3px)" :
            backdropFilter === "blur" ? "blur(10px)" : undefined }, style));
    return (_jsx(FloatingPortal, { children: _jsx(motion.div, Object.assign({ css: OverlayStyle, onClick: closeOnClick ? disclosure.close : undefined, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, ref: ref }, rest, { children: children })) }));
});
