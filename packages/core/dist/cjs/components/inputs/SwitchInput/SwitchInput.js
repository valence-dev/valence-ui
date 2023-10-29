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
exports.SwitchInput = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("react");
const ValenceProvider_1 = require("../../../ValenceProvider");
const buttons_1 = require("../../buttons");
const display_1 = require("../../display");
const framer_motion_1 = require("framer-motion");
const layout_1 = require("../../layout");
const react_2 = require("@emotion/react");
function SwitchInput(props) {
    const theme = (0, react_1.useContext)(ValenceProvider_1.ValenceContext);
    // Defaults
    const { checked = true, setChecked, label, size = theme.defaultSize, radius = "xl", grow = false, disabled = false, readOnly = false, loading = false, onFocus, onBlur, buttonProps, labelProps, color = theme.primaryColor, backgroundColor = color, padding = 4, margin = 0, width, height, style } = props, rest = __rest(props, ["checked", "setChecked", "label", "size", "radius", "grow", "disabled", "readOnly", "loading", "onFocus", "onBlur", "buttonProps", "labelProps", "color", "backgroundColor", "padding", "margin", "width", "height", "style"]);
    // Handlers
    function handleClick() {
        if (disabled || readOnly || loading)
            return;
        setChecked(!checked);
    }
    // Styles
    const SwitchStyle = (0, react_2.css)(Object.assign({ display: "flex", flexDirection: "row", boxSizing: "border-box", flexGrow: grow ? 1 : "unset", width: width !== null && width !== void 0 ? width : theme.sizeClasses.height[size] * 1.75, height: height !== null && height !== void 0 ? height : theme.sizeClasses.height[size] * 0.75, borderRadius: `${theme.sizeClasses.radius[radius]}px`, padding: padding, margin: margin, opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed" : "pointer", transition: `background-color ${theme.defaultTransitionDuration} linear 0s`, backgroundColor: checked ?
            (0, buttons_1.getBackgroundColor)(backgroundColor, "filled", false, theme) :
            (0, buttons_1.getBackgroundColor)("black", "light", false, theme), outline: "none", border: "none", "&:hover": {
            backgroundColor: checked ?
                (0, buttons_1.getBackgroundColor)(backgroundColor, "filled", true, theme) :
                (0, buttons_1.getBackgroundColor)("black", "light", true, theme),
        } }, style));
    const HandleStyle = (0, react_2.css)({
        width: "50%",
        height: "100%",
        borderRadius: `${theme.sizeClasses.radius[radius]}px`,
        backgroundColor: checked ?
            (0, buttons_1.getBackgroundColor)("white", "filled", false, theme) :
            (0, buttons_1.getBackgroundColor)("black", "filled", false, theme),
        outline: "none",
        border: "none",
    });
    return ((0, jsx_runtime_1.jsxs)(buttons_1.PrimitiveButton, Object.assign({ id: rest.id, onClick: handleClick, padding: 0, height: "fit-content", color: color, backgroundColor: "#00000000", variant: "subtle", size: size, grow: grow, style: {
            gap: theme.sizeClasses.padding[size] / 2,
        } }, buttonProps, { children: [(0, jsx_runtime_1.jsx)(display_1.Text, Object.assign({ size: size }, labelProps, { children: label })), (0, jsx_runtime_1.jsx)("div", Object.assign({ tabIndex: 0, css: SwitchStyle }, rest, { children: loading ?
                    (0, jsx_runtime_1.jsx)(layout_1.Flex, { width: "100%", height: "100%", align: "center", justify: "center", children: (0, jsx_runtime_1.jsx)(display_1.Loader, { size: size, color: checked ? "white" : "black" }) })
                    :
                        (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { css: HandleStyle, initial: { x: checked ? "0%" : "100%" }, animate: { x: checked ? "100%" : "0%" }, transition: { ease: "backOut" } }) }))] })));
}
exports.SwitchInput = SwitchInput;
