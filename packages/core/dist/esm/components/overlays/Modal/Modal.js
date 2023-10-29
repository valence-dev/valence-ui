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
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { useContext } from "react";
import { ValenceContext, useDefaultIconProps, useDetectKeyDown } from "../../..";
import { Flex } from "../../layout";
import { ModalOverlay } from "../ModalOverlay";
import { useLockedBody } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";
import { Text } from "../../display";
import { IconX } from "@tabler/icons-react";
import { IconButton } from "../../buttons";
import { css } from "@emotion/react";
export function Modal(props) {
    var _a, _b;
    const theme = useContext(ValenceContext);
    // Defaults
    const { title, opened, close, closeOnOverlayClick = true, closeOnEscape = true, lockScroll = true, withShadow = true, radius = theme.defaultRadius, backgroundColor = (_a = theme.getColor("white")) === null || _a === void 0 ? void 0 : _a.base, color = (_b = theme.getColor("black")) === null || _b === void 0 ? void 0 : _b.base, padding = theme.sizeClasses.padding[theme.defaultSize], margin, width = 500, height = "fit-content", overlayProps, flexProps, children, style } = props, rest = __rest(props, ["title", "opened", "close", "closeOnOverlayClick", "closeOnEscape", "lockScroll", "withShadow", "radius", "backgroundColor", "color", "padding", "margin", "width", "height", "overlayProps", "flexProps", "children", "style"]);
    // Hooks
    useLockedBody(opened && lockScroll, "root");
    useDetectKeyDown(close, "Escape", closeOnEscape, [closeOnEscape, close]);
    const defaultIconProps = useDefaultIconProps();
    // Styles
    const ContainerStyle = css(Object.assign({ backgroundColor: backgroundColor, color: color, padding: padding, margin: margin, width: width, height: height, borderRadius: theme.sizeClasses.radius[radius], boxShadow: withShadow ? theme.defaultShadow : undefined }, style));
    const HeaderStyle = css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    });
    return (_jsx(AnimatePresence, { children: opened &&
            _jsx(ModalOverlay, Object.assign({ opened: opened, close: close, closeOnClick: closeOnOverlayClick }, overlayProps, { children: _jsx(motion.div, { css: ContainerStyle, id: rest.id, onClick: e => e.stopPropagation(), initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.9 }, transition: { ease: "backOut" }, children: _jsxs(Flex, Object.assign({ direction: "column", gap: 15 }, flexProps, { children: [_jsxs("header", { css: HeaderStyle, children: [_jsx(Text, { bold: true, fontSize: 20, children: title }), _jsx(IconButton, { onClick: close, color: "black", variant: "subtle", children: _jsx(IconX, Object.assign({}, defaultIconProps.get())) })] }), children] })) }) })) }));
}
