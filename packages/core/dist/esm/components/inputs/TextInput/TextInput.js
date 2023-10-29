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
import { useContext } from "react";
import { ValenceContext } from "../../..";
import { InputContainer } from "../InputContainer";
import { css } from "@emotion/react";
export function TextInput(props) {
    var _a, _b;
    const theme = useContext(ValenceContext);
    // Defaults
    const { value, setValue, icon, placeholder = "", type = "text", autoComplete = "off", pattern, minLength, maxLength, size = theme.defaultSize, radius = theme.defaultRadius, grow, loading, autoFocus, disabled, readOnly = loading, required, multiple, form, name, tabIndex, onEnterPress, onKeyPress, color = "black", backgroundColor = color, style } = props, rest = __rest(props, ["value", "setValue", "icon", "placeholder", "type", "autoComplete", "pattern", "minLength", "maxLength", "size", "radius", "grow", "loading", "autoFocus", "disabled", "readOnly", "required", "multiple", "form", "name", "tabIndex", "onEnterPress", "onKeyPress", "color", "backgroundColor", "style"]);
    // Styles
    const InputStyle = css({
        border: "none",
        outline: "none",
        background: "none",
        flexGrow: 1,
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
        cursor: disabled ? "not-allowed" : "text",
        fontSize: theme.sizeClasses.fontSize[size],
        fontFamily: theme.getFont("default"),
        "&::placeholder": {
            color: `${(_a = theme.getColor(color)) === null || _a === void 0 ? void 0 : _a.base}${(_b = theme.getColor(color)) === null || _b === void 0 ? void 0 : _b.opacity.medium}`
        },
        // Remove awful autofill color
        "&:-webkit-autofill": { transition: `background-color 5000s ease-in-out 0s` },
        "&:-webkit-autofill:focus": { transition: `background-color 5000s ease-in-out 0s` },
        "&:-webkit-autofill:hover": { transition: `background-color 5000s ease-in-out 0s` },
        "&:-webkit-autofill:active": { transition: `background-color 5000s ease-in-out 0s` },
    });
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
    return (_jsx(InputContainer, Object.assign({ icon: icon, size: size, radius: radius, grow: grow, disabled: disabled, required: required, loading: loading, color: color, backgroundColor: backgroundColor, style: style }, rest, { children: _jsx("input", Object.assign({ css: InputStyle, value: value !== null && value !== void 0 ? value : "", onChange: e => setValue(e.currentTarget.value), placeholder: placeholder, type: type, autoComplete: autoComplete, pattern: pattern, minLength: minLength, maxLength: maxLength, autoFocus: autoFocus, disabled: disabled, readOnly: readOnly, required: required, multiple: multiple, form: form, name: name, tabIndex: tabIndex, onKeyDown: handleKeyDown }, rest)) })));
}
