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
import { forwardRef } from "react";
import { ModalBackground, useDetectKeyDown, useValence, useResponsiveProps } from "../../..";
import { Flex } from "../../layout";
import { AnimatePresence, motion } from "framer-motion";
import { Icon, Title } from "../../display";
import { IconX } from "@tabler/icons-react";
import { IconButton } from "../../buttons";
import { css } from "@emotion/react";
import { FloatingFocusManager, useFloating, useId, useInteractions, useRole } from "@floating-ui/react";
import { useLockedBody } from "usehooks-ts";
export const Modal = forwardRef(function Modal(props, ref) {
    const theme = useValence();
    // Defaults
    const _a = useResponsiveProps(props), { disclosure, title, header = (props) => _jsx(DefaultModalHeader, Object.assign({ disclosure: disclosure }, props)), closeOnOverlayClick = true, closeOnEscape = true, lockScroll = true, withShadow = true, radius = theme.defaults.radius, backgroundColor = "white", color = "black", padding = theme.sizeClasses.padding[theme.defaults.size], margin, width = 500, height = "fit-content", flexProps, overlayBackgroundProps, children, style } = _a, rest = __rest(_a, ["disclosure", "title", "header", "closeOnOverlayClick", "closeOnEscape", "lockScroll", "withShadow", "radius", "backgroundColor", "color", "padding", "margin", "width", "height", "flexProps", "overlayBackgroundProps", "children", "style"]);
    // Hooks
    useLockedBody(disclosure.opened && lockScroll, "root");
    useDetectKeyDown(() => disclosure.close(), "Escape", closeOnEscape && disclosure.opened);
    // Floating UI
    const { refs, context } = useFloating({
        open: disclosure.opened,
        onOpenChange: disclosure.update,
    });
    const role = useRole(context);
    const { getFloatingProps } = useInteractions([
        role,
    ]);
    const labelId = useId();
    const descriptionId = useId();
    // Styles
    const ContainerStyle = css(Object.assign({ backgroundColor: theme.getColorHex(backgroundColor), color: theme.getColorHex(color), padding: padding, margin: margin, width: width, height: height, borderRadius: theme.sizeClasses.radius[radius], boxShadow: withShadow ? theme.defaults.shadow : undefined, boxSizing: "border-box", maxWidth: "100%" }, style));
    return (_jsx(AnimatePresence, { children: disclosure.opened &&
            _jsx(ModalBackground, Object.assign({ disclosure: disclosure }, overlayBackgroundProps, { children: _jsx(FloatingFocusManager, { context: context, children: _jsx(motion.div, Object.assign({ css: ContainerStyle, onClick: e => e.stopPropagation(), initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.9 }, transition: { ease: "backOut" }, ref: refs.setFloating, "aria-labelledby": labelId, "aria-describedby": descriptionId }, getFloatingProps(), rest, { children: _jsxs(Flex, Object.assign({ direction: "column", gap: 15 }, flexProps, { children: [header({ title }), children] })) })) }) })) }));
});
export const DefaultModalHeader = forwardRef(function DefaultModalHeader(props, ref) {
    const { title, disclosure } = useResponsiveProps(props);
    const HeaderStyle = css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    });
    return (_jsxs("header", { css: HeaderStyle, ref: ref, children: [_jsx(Title, { order: 2, children: title }), _jsx(IconButton, { onClick: disclosure.close, color: "black", variant: "subtle", children: _jsx(Icon, { children: _jsx(IconX, {}) }) })] }));
});
