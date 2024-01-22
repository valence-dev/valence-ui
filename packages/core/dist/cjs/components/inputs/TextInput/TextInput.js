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
exports.TextInput = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("react");
const __1 = require("../../..");
const InputContainer_1 = require("../InputContainer");
const react_2 = require("@emotion/react");
exports.TextInput = (0, react_1.forwardRef)(function TextInput(props, ref) {
    const theme = (0, __1.useValence)();
    const { getFgHex } = (0, __1.useColors)();
    const inputRef = ref !== null && ref !== void 0 ? ref : (0, react_1.createRef)();
    // Defaults
    const _a = (0, __1.useResponsiveProps)(props), { value, setValue, icon, type = "text", autoComplete = "off", size = theme.defaults.size, radius = theme.defaults.radius, variant = theme.defaults.variant, grow, loading, autoFocus, disabled, readOnly = loading, required, color = "black", backgroundColor = color, padding, margin, width, height, onEnterPress, onKeyPress, inputStyle, style } = _a, rest = __rest(_a, ["value", "setValue", "icon", "type", "autoComplete", "size", "radius", "variant", "grow", "loading", "autoFocus", "disabled", "readOnly", "required", "color", "backgroundColor", "padding", "margin", "width", "height", "onEnterPress", "onKeyPress", "inputStyle", "style"]);
    // Styles
    const InputStyle = (0, react_2.css)(Object.assign({ border: "none", outline: "none", background: "none", flexGrow: 1, width: "100%", height: "100%", margin: 0, padding: 0, cursor: disabled ? "not-allowed" : "text", fontSize: theme.sizeClasses.fontSize[size], fontFamily: theme.getFont("default"), color: getFgHex(color, variant), "&::placeholder": {
            color: `${getFgHex(color, variant)}80`,
        }, 
        // Remove awful autofill color
        "&:-webkit-autofill": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:focus": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:hover": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:active": { transition: `background-color 5000s ease-in-out 0s` } }, inputStyle));
    // Functions
    const handleKeyDown = (e) => {
        // Blur on "Escape" key
        if (e.key === "Escape")
            e.currentTarget.blur();
        // Call onEnterPress on "Enter" key
        if (e.key === "Enter")
            onEnterPress === null || onEnterPress === void 0 ? void 0 : onEnterPress(e);
        // Call onKeyPress on any key
        onKeyPress === null || onKeyPress === void 0 ? void 0 : onKeyPress(e);
    };
    return ((0, jsx_runtime_1.jsx)(InputContainer_1.InputContainer, { icon: icon, size: size, radius: radius, variant: variant, grow: grow, disabled: disabled, required: required, loading: loading, color: color, backgroundColor: backgroundColor, padding: padding, margin: margin, width: width, height: height, style: style, inputRef: inputRef, children: (0, jsx_runtime_1.jsx)("input", Object.assign({ css: InputStyle, value: value !== null && value !== void 0 ? value : "", onChange: e => setValue(e.currentTarget.value), type: type, autoComplete: autoComplete, autoFocus: autoFocus, disabled: disabled, readOnly: readOnly, required: required, onKeyDown: handleKeyDown, ref: inputRef }, rest)) }));
});
