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
exports.Alert = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("react");
const framer_motion_1 = require("framer-motion");
const layout_1 = require("../../layout");
const Text_1 = require("../Text");
const buttons_1 = require("../../buttons");
const utils_1 = require("@valence-ui/utils");
const ValenceProvider_1 = require("../../../ValenceProvider");
const react_2 = require("@emotion/react");
const Icon_1 = require("../Icon");
const responsive_1 = require("../../../utilities/responsive");
const color_1 = require("../../../utilities/color");
exports.Alert = (0, react_1.forwardRef)(function Alert(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const colors = (0, color_1.useColors)();
    // Hooks & states
    const reducedMotion = (0, framer_motion_1.useReducedMotion)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { alert, show, variant = "filled", size = theme.defaults.size, radius = theme.defaults.radius, shadow = false, motion, color = theme.primaryColor, backgroundColor = color, padding = theme.sizeClasses.padding[size], margin = 0, width = "100%", height = "auto", component = "div", style } = _a, rest = __rest(_a, ["alert", "show", "variant", "size", "radius", "shadow", "motion", "color", "backgroundColor", "padding", "margin", "width", "height", "component", "style"]);
    const motionBehaviour = (0, buttons_1.getMotionBehaviour)(motion, reducedMotion);
    const AlertStyle = (0, react_2.css)(Object.assign({ display: "flex", flexDirection: "row", alignItems: "center", gap: padding, boxSizing: "border-box", width: width, height: height, padding: padding, borderRadius: theme.sizeClasses.radius[radius], border: colors.getBorderHex(backgroundColor, variant), textDecoration: "none", backgroundColor: colors.getBgHex(backgroundColor, variant, false), color: colors.getFgHex(color, variant), boxShadow: shadow ? theme.defaults.shadow : "none", cursor: utils_1.CLICKABLE_ELEMENTS.includes(component) ? "pointer" : "default" }, style));
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { children: show &&
            (0, jsx_runtime_1.jsxs)(utils_1.PolymorphicButton, Object.assign({ css: AlertStyle, onMouseDown: (e) => e.preventDefault(), component: component, initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.9 }, transition: { ease: "backOut" }, whileHover: motionBehaviour.whileHover, whileTap: motionBehaviour.whileTap, ref: ref }, rest, { children: [(0, jsx_runtime_1.jsx)("div", { style: { width: theme.getSize("iconSize", size) }, children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { size: theme.getSize("iconSize", size), children: alert.icon }) }), (0, jsx_runtime_1.jsxs)(layout_1.Flex, { direction: "column", align: "flex-start", gap: padding / 2, children: [(0, jsx_runtime_1.jsx)(Text_1.Text, { bold: true, style: { flexGrow: 1 }, color: colors.getFgHex(color, variant), size: size, children: alert.title }), alert.message &&
                                (0, jsx_runtime_1.jsx)(Text_1.Text, { fontSize: theme.sizeClasses.fontSize[size] - 2, color: colors.getFgHex(color, variant), children: alert.message })] })] })) }));
});
