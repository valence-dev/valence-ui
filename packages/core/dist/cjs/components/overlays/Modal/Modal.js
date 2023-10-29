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
exports.Modal = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("react");
const __1 = require("../../..");
const layout_1 = require("../../layout");
const ModalOverlay_1 = require("../ModalOverlay");
const usehooks_ts_1 = require("usehooks-ts");
const framer_motion_1 = require("framer-motion");
const display_1 = require("../../display");
const icons_react_1 = require("@tabler/icons-react");
const buttons_1 = require("../../buttons");
const react_2 = require("@emotion/react");
function Modal(props) {
    var _a, _b;
    const theme = (0, react_1.useContext)(__1.ValenceContext);
    // Defaults
    const { title, opened, close, closeOnOverlayClick = true, closeOnEscape = true, lockScroll = true, withShadow = true, radius = theme.defaultRadius, backgroundColor = (_a = theme.getColor("white")) === null || _a === void 0 ? void 0 : _a.base, color = (_b = theme.getColor("black")) === null || _b === void 0 ? void 0 : _b.base, padding = theme.sizeClasses.padding[theme.defaultSize], margin, width = 500, height = "fit-content", overlayProps, flexProps, children, style } = props, rest = __rest(props, ["title", "opened", "close", "closeOnOverlayClick", "closeOnEscape", "lockScroll", "withShadow", "radius", "backgroundColor", "color", "padding", "margin", "width", "height", "overlayProps", "flexProps", "children", "style"]);
    // Hooks
    (0, usehooks_ts_1.useLockedBody)(opened && lockScroll, "root");
    (0, __1.useDetectKeyDown)(close, "Escape", closeOnEscape, [closeOnEscape, close]);
    const defaultIconProps = (0, __1.useDefaultIconProps)();
    // Styles
    const ContainerStyle = (0, react_2.css)(Object.assign({ backgroundColor: backgroundColor, color: color, padding: padding, margin: margin, width: width, height: height, borderRadius: theme.sizeClasses.radius[radius], boxShadow: withShadow ? theme.defaultShadow : undefined }, style));
    const HeaderStyle = (0, react_2.css)({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    });
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { children: opened &&
            (0, jsx_runtime_1.jsx)(ModalOverlay_1.ModalOverlay, Object.assign({ opened: opened, close: close, closeOnClick: closeOnOverlayClick }, overlayProps, { children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { css: ContainerStyle, id: rest.id, onClick: e => e.stopPropagation(), initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.9 }, transition: { ease: "backOut" }, children: (0, jsx_runtime_1.jsxs)(layout_1.Flex, Object.assign({ direction: "column", gap: 15 }, flexProps, { children: [(0, jsx_runtime_1.jsxs)("header", { css: HeaderStyle, children: [(0, jsx_runtime_1.jsx)(display_1.Text, { bold: true, fontSize: 20, children: title }), (0, jsx_runtime_1.jsx)(buttons_1.IconButton, { onClick: close, color: "black", variant: "subtle", children: (0, jsx_runtime_1.jsx)(icons_react_1.IconX, Object.assign({}, defaultIconProps.get())) })] }), children] })) }) })) }));
}
exports.Modal = Modal;
