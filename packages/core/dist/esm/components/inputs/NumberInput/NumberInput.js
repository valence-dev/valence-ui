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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { createRef, forwardRef } from "react";
import { InputContainer } from "../InputContainer";
import { useValence } from "../../..";
import { IconButton, getTextColor } from "../../buttons";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { css } from "@emotion/react";
export const NumberInput = forwardRef(function NumberInput(props, ref) {
    const theme = useValence();
    const inputRef = ref !== null && ref !== void 0 ? ref : createRef();
    // Defaults
    const { value, setValue, icon, min, max, step = 1, controlIcons = {
        up: _jsx(IconChevronUp, { opacity: 0.5 }),
        down: _jsx(IconChevronDown, { opacity: 0.5 }),
    }, showControls = true, size = theme.defaultSize, radius = theme.defaultRadius, variant = theme.defaultVariant, grow, loading, autoFocus, disabled, readOnly = loading, required, color = "black", backgroundColor = color, padding, margin, width, height, onEnterPress, onKeyPress, inputStyle, style } = props, rest = __rest(props, ["value", "setValue", "icon", "min", "max", "step", "controlIcons", "showControls", "size", "radius", "variant", "grow", "loading", "autoFocus", "disabled", "readOnly", "required", "color", "backgroundColor", "padding", "margin", "width", "height", "onEnterPress", "onKeyPress", "inputStyle", "style"]);
    // Styles
    const InputStyle = css(Object.assign({ border: "none", outline: "none", background: "none", flexGrow: 1, width: "100%", height: "100%", margin: 0, padding: 0, cursor: disabled ? "not-allowed" : "text", fontSize: theme.sizeClasses.fontSize[size], fontFamily: theme.getFont("default"), color: getTextColor(color, variant, theme), "&::placeholder": {
            color: `${getTextColor(color, variant, theme)}80`,
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
    return (_jsx(InputContainer, { icon: icon, size: size, radius: radius, variant: variant, grow: grow, disabled: disabled, required: required, loading: loading, color: color, backgroundColor: backgroundColor, padding: padding, margin: margin, width: width, height: height, style: style, inputRef: inputRef, button: showControls &&
            _jsxs(_Fragment, { children: [_jsx(IconButton, { color: color, variant: "subtle", size: size, radius: radius, onClick: () => setValue(value - step), disabled: disabled || readOnly, height: 25, children: controlIcons.down }), _jsx(IconButton, { color: color, variant: "subtle", size: size, radius: radius, onClick: () => setValue(value + step), disabled: disabled || readOnly, height: 25, children: controlIcons.up })] }), buttonContainerStyle: {
            gap: 0,
            width: 55,
        }, children: _jsx("input", Object.assign({ css: InputStyle, value: value, onChange: e => setValue(parseFloat(e.target.value)), onBlur: e => setValue(Math.min(Math.max(parseFloat(e.target.value), min !== null && min !== void 0 ? min : -Infinity), max !== null && max !== void 0 ? max : Infinity)), type: "number", min: min, max: max, step: step, autoFocus: autoFocus, disabled: disabled, readOnly: readOnly, required: required, onKeyDown: handleKeyDown, ref: inputRef }, rest)) }));
});
