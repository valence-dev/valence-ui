"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dialog = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("react");
const __1 = require("../../..");
const layout_1 = require("../../layout");
const framer_motion_1 = require("framer-motion");
const display_1 = require("../../display");
const icons_react_1 = require("@tabler/icons-react");
const buttons_1 = require("../../buttons");
const react_2 = require("@emotion/react");
const react_3 = require("@floating-ui/react");
exports.Dialog = (0, react_1.forwardRef)(function Dialog(props, ref) {
    const theme = (0, react_1.useContext)(__1.ValenceContext);
    // Defaults
    const { title, disclosure, closeOnClickOutside = true, closeOnEscape = true, lockScroll = true, withShadow = true, radius = theme.defaultRadius, backgroundColor = "white", color = "black", padding = theme.sizeClasses.padding[theme.defaultSize], margin, width = 500, height = "fit-content", overlayProps, flexProps, closeButtonProps, children, style } = props, rest = __rest(props, ["title", "disclosure", "closeOnClickOutside", "closeOnEscape", "lockScroll", "withShadow", "radius", "backgroundColor", "color", "padding", "margin", "width", "height", "overlayProps", "flexProps", "closeButtonProps", "children", "style"]);
    // Hooks
    const defaultIconProps = (0, __1.useDefaultIconProps)();
    (0, __1.useDetectKeyDown)(() => disclosure.close(), "Escape", closeOnEscape && disclosure.opened);
    // Floating UI
    const { refs, context } = (0, react_3.useFloating)({
        open: disclosure.opened,
        onOpenChange: disclosure.update,
    });
    const role = (0, react_3.useRole)(context);
    const { getFloatingProps } = (0, react_3.useInteractions)([
        role,
    ]);
    const labelId = (0, react_3.useId)();
    const descriptionId = (0, react_3.useId)();
    // Styles
    const ContainerStyle = (0, react_2.css)(Object.assign({ backgroundColor: theme.getColorHex(backgroundColor), color: theme.getColorHex(color), padding: padding, margin: margin, width: width, height: height, borderRadius: theme.sizeClasses.radius[radius], boxShadow: withShadow ? theme.defaultShadow : undefined }, style));
    const HeaderStyle = (0, react_2.css)({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    });
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { children: disclosure.opened &&
            (0, jsx_runtime_1.jsx)(__1.DialogOverlay, Object.assign({ disclosure: disclosure }, overlayProps, { children: (0, jsx_runtime_1.jsx)(react_3.FloatingFocusManager, { context: context, children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, Object.assign({ css: ContainerStyle, onClick: e => e.stopPropagation(), initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.9 }, transition: { ease: "backOut" }, ref: refs.setFloating, "aria-labelledby": labelId, "aria-describedby": descriptionId }, getFloatingProps(), rest, { children: (0, jsx_runtime_1.jsxs)(layout_1.Flex, Object.assign({ direction: "column", gap: 15 }, flexProps, { children: [(0, jsx_runtime_1.jsxs)("header", { css: HeaderStyle, children: [(0, jsx_runtime_1.jsx)(display_1.Text, { bold: true, fontSize: 20, id: labelId, children: title }), (0, jsx_runtime_1.jsx)(buttons_1.IconButton, Object.assign({ onClick: disclosure.close, color: color, variant: "subtle" }, closeButtonProps, { children: (0, jsx_runtime_1.jsx)(icons_react_1.IconX, Object.assign({}, defaultIconProps.get())) }))] }), children] })) })) }) })) }));
});
