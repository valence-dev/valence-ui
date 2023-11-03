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
exports.NumberInput = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("react");
const InputContainer_1 = require("../InputContainer");
const __1 = require("../../..");
const layout_1 = require("../../layout");
const buttons_1 = require("../../buttons");
const icons_react_1 = require("@tabler/icons-react");
const react_2 = require("@emotion/react");
exports.NumberInput = (0, react_1.forwardRef)(function NumberInput(props, ref) {
    const theme = (0, react_1.useContext)(__1.ValenceContext);
    const defaultIconProps = (0, __1.useDefaultIconProps)();
    const inputRef = ref !== null && ref !== void 0 ? ref : (0, react_1.createRef)();
    // Defaults
    const { value, setValue, icon, min, max, step = 1, controlIcons = {
        up: (0, jsx_runtime_1.jsx)(icons_react_1.IconChevronUp, Object.assign({}, defaultIconProps.get(), { opacity: 0.5 })),
        down: (0, jsx_runtime_1.jsx)(icons_react_1.IconChevronDown, Object.assign({}, defaultIconProps.get(), { opacity: 0.5 }))
    }, showControls = true, size = theme.defaultSize, radius = theme.defaultRadius, variant = theme.defaultVariant, grow, loading, autoFocus, disabled, readOnly = loading, required, color = "black", backgroundColor = color, padding, margin, width, height, onEnterPress, onKeyPress, inputStyle, style } = props, rest = __rest(props, ["value", "setValue", "icon", "min", "max", "step", "controlIcons", "showControls", "size", "radius", "variant", "grow", "loading", "autoFocus", "disabled", "readOnly", "required", "color", "backgroundColor", "padding", "margin", "width", "height", "onEnterPress", "onKeyPress", "inputStyle", "style"]);
    // Styles
    const InputStyle = (0, react_2.css)(Object.assign({ border: "none", outline: "none", background: "none", flexGrow: 1, width: "100%", height: "100%", margin: 0, padding: 0, cursor: disabled ? "not-allowed" : "text", fontSize: theme.sizeClasses.fontSize[size], fontFamily: theme.getFont("default"), color: (0, buttons_1.getTextColor)(color, variant, theme), "&::placeholder": {
            color: `${(0, buttons_1.getTextColor)(color, variant, theme)}80`,
        }, 
        // Remove awful autofill color
        "&:-webkit-autofill": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:focus": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:hover": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:active": { transition: `background-color 5000s ease-in-out 0s` }, 
        // Remove default arrows
        "&::-webkit-outer-spin-button": { appearance: "none", margin: 0 }, "&::-webkit-inner-spin-button": { appearance: "none", margin: 0 } }, inputStyle));
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
    return ((0, jsx_runtime_1.jsxs)(InputContainer_1.InputContainer, { icon: icon, size: size, radius: radius, variant: variant, grow: grow, disabled: disabled, required: required, loading: loading, color: color, backgroundColor: backgroundColor, padding: padding, margin: margin, width: width, height: height, style: style, inputRef: inputRef, children: [(0, jsx_runtime_1.jsx)("input", Object.assign({ css: InputStyle, value: value, onChange: e => setValue(parseFloat(e.target.value)), type: "number", min: min, max: max, step: step, autoFocus: autoFocus, disabled: disabled, readOnly: readOnly, required: required, onKeyDown: handleKeyDown, ref: inputRef }, rest)), showControls &&
                (0, jsx_runtime_1.jsxs)(layout_1.Flex, { gap: 0, children: [(0, jsx_runtime_1.jsx)(buttons_1.IconButton, { color: color, variant: "subtle", size: size, radius: radius, onClick: () => setValue(value - step), disabled: disabled || readOnly, children: controlIcons.down }), (0, jsx_runtime_1.jsx)(buttons_1.IconButton, { color: color, variant: "subtle", size: size, radius: radius, onClick: () => setValue(value + step), disabled: disabled || readOnly, children: controlIcons.up })] })] }));
});
