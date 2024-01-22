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
exports.Switch = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("react");
const ValenceProvider_1 = require("../../../ValenceProvider");
const buttons_1 = require("../../buttons");
const display_1 = require("../../display");
const framer_motion_1 = require("framer-motion");
const layout_1 = require("../../layout");
const react_2 = require("@emotion/react");
const responsive_1 = require("../../../utilities/responsive");
const color_1 = require("../../../utilities/color");
exports.Switch = (0, react_1.forwardRef)(function Switch(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const { getBgHex, getHex } = (0, color_1.useColors)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { value, setValue, label, size = theme.defaults.size, radius = "xl", variant = theme.defaults.variant, grow = false, disabled = false, readOnly = false, loading = false, onFocus, onBlur, buttonProps, labelProps, color = theme.primaryColor, backgroundColor = color, padding = 4, margin = 0, width, height, style } = _a, rest = __rest(_a, ["value", "setValue", "label", "size", "radius", "variant", "grow", "disabled", "readOnly", "loading", "onFocus", "onBlur", "buttonProps", "labelProps", "color", "backgroundColor", "padding", "margin", "width", "height", "style"]);
    // Handlers
    function handleClick() {
        if (disabled || readOnly || loading)
            return;
        setValue(!value);
    }
    // Styles
    const SwitchStyle = (0, react_2.css)(Object.assign({ display: "flex", flexDirection: "row", boxSizing: "border-box", flexGrow: grow ? 1 : "unset", width: width !== null && width !== void 0 ? width : theme.sizeClasses.height[size] * 1.75, height: height !== null && height !== void 0 ? height : theme.sizeClasses.height[size] * 0.75, borderRadius: `${theme.sizeClasses.radius[radius]}px`, padding: padding, margin: margin, opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed" : "pointer", transition: `background-color ${theme.defaults.transitionDuration} linear 0s`, backgroundColor: value ?
            getBgHex(backgroundColor, variant, false) :
            getBgHex("black", variant, false), outline: variant === "subtle" ?
            value ?
                `1px solid ${getHex(backgroundColor, "medium")}` :
                `1px solid ${getHex("black", "medium")}`
            : "none", border: "none", "&:hover": {
            backgroundColor: value ?
                getBgHex(backgroundColor, variant, true) :
                getBgHex("black", variant, true),
        } }, style));
    const HandleStyle = (0, react_2.css)({
        width: "50%",
        height: "100%",
        borderRadius: `${theme.sizeClasses.radius[radius]}px`,
        backgroundColor: value ?
            getBgHex(variant === "filled" ? "white" : color, "filled", false) :
            getBgHex(variant === "filled" ? "white" : "black", "filled", false),
        outline: "none",
        border: "none",
    });
    return ((0, jsx_runtime_1.jsxs)(buttons_1.PrimitiveButton, Object.assign({ id: rest.id, onClick: handleClick, padding: 0, height: "fit-content", color: color, backgroundColor: "#00000000", variant: "subtle", size: size, grow: grow, style: {
            gap: theme.sizeClasses.padding[size] / 2,
        }, onFocus: onFocus, onBlur: onBlur, ref: ref }, buttonProps, { children: [label &&
                (0, jsx_runtime_1.jsx)(display_1.Text, Object.assign({ size: size }, labelProps, { tabIndex: -1, children: label })), (0, jsx_runtime_1.jsx)("div", Object.assign({ tabIndex: 0, css: SwitchStyle }, rest, { children: loading ?
                    (0, jsx_runtime_1.jsx)(layout_1.Flex, { width: "100%", height: "100%", align: "center", justify: "center", children: (0, jsx_runtime_1.jsx)(display_1.Loader, { size: size, color: value ? "white" : "black" }) })
                    :
                        (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { css: HandleStyle, initial: { x: value ? "0%" : "100%" }, animate: { x: value ? "100%" : "0%" }, transition: { ease: "backOut" } }) }))] })));
});
