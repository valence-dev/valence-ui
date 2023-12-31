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
exports.ModalOverlay = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("react");
const __1 = require("../../..");
const framer_motion_1 = require("framer-motion");
const react_2 = require("@emotion/react");
const react_3 = require("@floating-ui/react");
exports.ModalOverlay = (0, react_1.forwardRef)(function ModalOverlay(props, ref) {
    const theme = (0, react_1.useContext)(__1.ValenceContext);
    // Defaults
    const { disclosure, closeOnClick = true, blurBackground = true, backgroundColor = "permaBlack", padding = theme.sizeClasses.padding[theme.defaultSize], zIndex = 500, children, style } = props, rest = __rest(props, ["disclosure", "closeOnClick", "blurBackground", "backgroundColor", "padding", "zIndex", "children", "style"]);
    // Styles
    const OverlayStyle = (0, react_2.css)(Object.assign({ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: zIndex, backgroundColor: theme.getColorHex(backgroundColor, "strong"), backdropFilter: blurBackground ? "blur(10px)" : "none", padding: padding, display: "flex", alignItems: "center", justifyContent: "center" }, style));
    return ((0, jsx_runtime_1.jsx)(react_3.FloatingPortal, { children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, Object.assign({ css: OverlayStyle, onClick: closeOnClick ? disclosure.close : undefined, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, ref: ref }, rest, { children: children })) }));
});
