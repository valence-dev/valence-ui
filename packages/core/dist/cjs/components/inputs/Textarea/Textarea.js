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
exports.Textarea = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const ValenceProvider_1 = require("../../../ValenceProvider");
const react_1 = require("react");
const react_2 = require("@emotion/react");
const InputContainer_1 = require("../InputContainer");
const responsive_1 = require("../../../utilities/responsive");
const color_1 = require("../../../utilities/color");
exports.Textarea = (0, react_1.forwardRef)(function Textarea(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const { getFgHex } = (0, color_1.useColors)();
    const inputRef = ref !== null && ref !== void 0 ? ref : (0, react_1.createRef)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { value, setValue, icon, placeholder = "", autoComplete = false, spellCheck = true, size = theme.defaults.size, radius = theme.defaults.radius, variant = theme.defaults.variant, grow, resize = "none", minHeight = theme.sizeClasses.height[size], maxHeight, minWidth, maxWidth, autoFocus, loading, disabled, readOnly = loading, required, color = "black", backgroundColor = color, padding = 10, margin, width = "100%", height = "auto", onEnterPress, onKeyPress, style, inputStyle } = _a, rest = __rest(_a, ["value", "setValue", "icon", "placeholder", "autoComplete", "spellCheck", "size", "radius", "variant", "grow", "resize", "minHeight", "maxHeight", "minWidth", "maxWidth", "autoFocus", "loading", "disabled", "readOnly", "required", "color", "backgroundColor", "padding", "margin", "width", "height", "onEnterPress", "onKeyPress", "style", "inputStyle"]);
    // Styles
    const TextareaStyle = (0, react_2.css)(Object.assign({ outline: "none", border: "none", textDecoration: "none", padding: 0, resize: resize, minHeight: minHeight, maxHeight: maxHeight, minWidth: minWidth, maxWidth: maxWidth, verticalAlign: "center", width: "100%", height: "100%", overflowY: "auto", background: "none", color: getFgHex(color, variant), fontSize: theme.sizeClasses.fontSize[size], fontFamily: theme.getFont("default"), "&::-webkit-scrollbar": {
            width: 10,
        }, "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#11181C20",
            borderRadius: 5,
        }, "&::placeholder": {
            color: `${getFgHex(color, variant)}80`,
        } }, inputStyle));
    const ContainerStyle = Object.assign({ minHeight: height, height: "fit-content" }, style);
    // Handlers
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
    return ((0, jsx_runtime_1.jsx)(InputContainer_1.InputContainer, { icon: icon, size: size, radius: radius, variant: variant, grow: grow, disabled: disabled, required: required, loading: loading, color: color, backgroundColor: backgroundColor, padding: padding, margin: margin, width: width, height: height, style: ContainerStyle, inputRef: inputRef, children: (0, jsx_runtime_1.jsx)("textarea", Object.assign({ css: TextareaStyle, value: value !== null && value !== void 0 ? value : "", onChange: e => setValue(e.currentTarget.value), placeholder: placeholder, autoComplete: autoComplete ? "on" : "off", spellCheck: spellCheck, autoFocus: autoFocus, disabled: disabled, readOnly: readOnly, required: required, onKeyDown: handleKeyDown, ref: inputRef }, rest)) }));
});
