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
import { useContext } from "react";
import { ValenceContext } from "../../..";
import { motion } from "framer-motion";
import { css } from "@emotion/react";
export function ModalOverlay(props) {
    var _a, _b;
    const theme = useContext(ValenceContext);
    // Defaults
    const { opened, close, closeOnClick = true, blurBackground = true, backgroundColor = `${(_a = theme.getColor("permaBlack")) === null || _a === void 0 ? void 0 : _a.base}${(_b = theme.getColor("permaBlack")) === null || _b === void 0 ? void 0 : _b.opacity.strong}`, padding = theme.sizeClasses.padding[theme.defaultSize], zIndex = 200, children, style } = props, rest = __rest(props, ["opened", "close", "closeOnClick", "blurBackground", "backgroundColor", "padding", "zIndex", "children", "style"]);
    // Styles
    const OverlayStyle = css(Object.assign({ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: zIndex, backgroundColor: backgroundColor, backdropFilter: blurBackground ? "blur(10px)" : "none", padding: padding, display: "flex", alignItems: "center", justifyContent: "center" }, style));
    return (_jsx(motion.div, Object.assign({ css: OverlayStyle, onClick: closeOnClick ? close : undefined, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }, rest, { children: children })));
}
