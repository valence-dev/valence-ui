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
import { forwardRef, useContext } from "react";
import { DialogOverlay, ValenceContext, useDefaultIconProps, useDetectKeyDown } from "../../..";
import { Flex } from "../../layout";
import { AnimatePresence, motion } from "framer-motion";
import { Text } from "../../display";
import { IconX } from "@tabler/icons-react";
import { IconButton } from "../../buttons";
import { css } from "@emotion/react";
import { FloatingFocusManager, useFloating, useId, useInteractions, useRole } from "@floating-ui/react";
export const Dialog = forwardRef(function Dialog(props, ref) {
    const theme = useContext(ValenceContext);
    // Defaults
    const { title, disclosure, closeOnClickOutside = true, closeOnEscape = true, lockScroll = true, withShadow = true, radius = theme.defaultRadius, backgroundColor = "white", color = "black", padding = theme.sizeClasses.padding[theme.defaultSize], margin, width = 500, height = "fit-content", overlayProps, flexProps, closeButtonProps, children, style } = props, rest = __rest(props, ["title", "disclosure", "closeOnClickOutside", "closeOnEscape", "lockScroll", "withShadow", "radius", "backgroundColor", "color", "padding", "margin", "width", "height", "overlayProps", "flexProps", "closeButtonProps", "children", "style"]);
    // Hooks
    const defaultIconProps = useDefaultIconProps();
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
    const ContainerStyle = css(Object.assign({ backgroundColor: theme.getColorHex(backgroundColor), color: theme.getColorHex(color), padding: padding, margin: margin, width: width, height: height, borderRadius: theme.sizeClasses.radius[radius], boxShadow: withShadow ? theme.defaultShadow : undefined }, style));
    const HeaderStyle = css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    });
    return (_jsx(AnimatePresence, { children: disclosure.opened &&
            _jsx(DialogOverlay, Object.assign({ disclosure: disclosure }, overlayProps, { children: _jsx(FloatingFocusManager, { context: context, children: _jsx(motion.div, Object.assign({ css: ContainerStyle, onClick: e => e.stopPropagation(), initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.9 }, transition: { ease: "backOut" }, ref: refs.setFloating, "aria-labelledby": labelId, "aria-describedby": descriptionId }, getFloatingProps(), rest, { children: _jsxs(Flex, Object.assign({ direction: "column", gap: 15 }, flexProps, { children: [_jsxs("header", { css: HeaderStyle, children: [_jsx(Text, { bold: true, fontSize: 20, id: labelId, children: title }), _jsx(IconButton, Object.assign({ onClick: disclosure.close, color: color, variant: "subtle" }, closeButtonProps, { children: _jsx(IconX, Object.assign({}, defaultIconProps.get())) }))] }), children] })) })) }) })) }));
});
