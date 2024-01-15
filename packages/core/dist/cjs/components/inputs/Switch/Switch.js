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
exports.Switch = (0, react_1.forwardRef)(function Switch(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    // Defaults
    const { value, setValue, label, size = theme.defaults.size, radius = "xl", variant = theme.defaults.variant, grow = false, disabled = false, readOnly = false, loading = false, onFocus, onBlur, buttonProps, labelProps, color = theme.primaryColor, backgroundColor = color, padding = 4, margin = 0, width, height, style } = props, rest = __rest(props, ["value", "setValue", "label", "size", "radius", "variant", "grow", "disabled", "readOnly", "loading", "onFocus", "onBlur", "buttonProps", "labelProps", "color", "backgroundColor", "padding", "margin", "width", "height", "style"]);
    // Handlers
    function handleClick() {
        if (disabled || readOnly || loading)
            return;
        setValue(!value);
    }
    // Styles
    const SwitchStyle = (0, react_2.css)(Object.assign({ display: "flex", flexDirection: "row", boxSizing: "border-box", flexGrow: grow ? 1 : "unset", width: width !== null && width !== void 0 ? width : theme.sizeClasses.height[size] * 1.75, height: height !== null && height !== void 0 ? height : theme.sizeClasses.height[size] * 0.75, borderRadius: `${theme.sizeClasses.radius[radius]}px`, padding: padding, margin: margin, opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed" : "pointer", transition: `background-color ${theme.defaults.transitionDuration} linear 0s`, backgroundColor: value ?
            (0, buttons_1.getBackgroundColor)(backgroundColor, variant, false, theme) :
            (0, buttons_1.getBackgroundColor)("black", variant, false, theme), outline: variant === "subtle" ?
            value ?
                `1px solid ${theme.getColorHex(backgroundColor, "medium")}` :
                `1px solid ${theme.getColorHex("black", "medium")}`
            : "none", border: "none", "&:hover": {
            backgroundColor: value ?
                (0, buttons_1.getBackgroundColor)(backgroundColor, variant, true, theme) :
                (0, buttons_1.getBackgroundColor)("black", variant, true, theme),
        } }, style));
    const HandleStyle = (0, react_2.css)({
        width: "50%",
        height: "100%",
        borderRadius: `${theme.sizeClasses.radius[radius]}px`,
        backgroundColor: value ?
            (0, buttons_1.getBackgroundColor)(variant === "filled" ? "white" : color, "filled", false, theme) :
            (0, buttons_1.getBackgroundColor)(variant === "filled" ? "white" : "black", "filled", false, theme),
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
