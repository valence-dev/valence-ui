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
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { useValenceContext } from "../../../ValenceProvider";
import { createRef, forwardRef } from "react";
import { getTextColor } from "../../buttons";
import { css } from "@emotion/react";
import { InputContainer } from "../InputContainer";
export const Textarea = forwardRef(function Textarea(props, ref) {
    const theme = useValenceContext();
    const inputRef = ref !== null && ref !== void 0 ? ref : createRef();
    // Defaults
    const { value, setValue, icon, placeholder = "", autoComplete = false, spellCheck = true, size = theme.defaultSize, radius = theme.defaultRadius, variant = theme.defaultVariant, grow, resize = "none", minHeight = theme.sizeClasses.height[size], maxHeight, minWidth, maxWidth, autoFocus, loading, disabled, readOnly = loading, required, color = "black", backgroundColor = color, padding = 10, margin, width = "100%", height = "auto", onEnterPress, onKeyPress, style, inputStyle } = props, rest = __rest(props, ["value", "setValue", "icon", "placeholder", "autoComplete", "spellCheck", "size", "radius", "variant", "grow", "resize", "minHeight", "maxHeight", "minWidth", "maxWidth", "autoFocus", "loading", "disabled", "readOnly", "required", "color", "backgroundColor", "padding", "margin", "width", "height", "onEnterPress", "onKeyPress", "style", "inputStyle"]);
    // Styles
    const TextareaStyle = css(Object.assign({ outline: "none", border: "none", textDecoration: "none", padding: 0, resize: resize, minHeight: minHeight, maxHeight: maxHeight, minWidth: minWidth, maxWidth: maxWidth, verticalAlign: "center", width: "100%", height: "100%", overflowY: "auto", background: "none", color: getTextColor(color, variant, theme), fontSize: theme.sizeClasses.fontSize[size], fontFamily: theme.getFont("default"), "&::-webkit-scrollbar": {
            width: 10,
        }, "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#11181C20",
            borderRadius: 5,
        }, "&::placeholder": {
            color: `${getTextColor(color, variant, theme)}80`,
        }, 
        // Remove awful autofill color
        "&:-webkit-autofill": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:focus": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:hover": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:active": { transition: `background-color 5000s ease-in-out 0s` } }, inputStyle));
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
    return (_jsx(InputContainer, { icon: icon, size: size, radius: radius, variant: variant, grow: grow, disabled: disabled, required: required, loading: loading, color: color, backgroundColor: backgroundColor, padding: padding, margin: margin, width: width, height: height, style: ContainerStyle, inputRef: inputRef, children: _jsx("textarea", Object.assign({ css: TextareaStyle, value: value !== null && value !== void 0 ? value : "", onChange: e => setValue(e.currentTarget.value), placeholder: placeholder, autoComplete: autoComplete ? "on" : "off", spellCheck: spellCheck, autoFocus: autoFocus, disabled: disabled, readOnly: readOnly, required: required, onKeyDown: handleKeyDown, ref: inputRef }, rest)) }));
});
