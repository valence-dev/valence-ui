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
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { useContext } from "react";
import { InputContainer } from "../InputContainer";
import { ValenceContext, useDefaultIconProps } from "../../..";
import { Flex } from "../../layout";
import { IconButton, getTextColor } from "../../buttons";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { css } from "@emotion/react";
export function NumberInput(props) {
    var _a, _b;
    const theme = useContext(ValenceContext);
    const defaultIconProps = useDefaultIconProps();
    // Defaults
    const { value, setValue, icon, placeholder = "", min, max, step = 1, controlIcons = {
        up: _jsx(IconChevronUp, Object.assign({}, defaultIconProps.get(), { opacity: 0.5 })),
        down: _jsx(IconChevronDown, Object.assign({}, defaultIconProps.get(), { opacity: 0.5 }))
    }, showControls = true, size = theme.defaultSize, radius = theme.defaultRadius, grow, loading, autoFocus, disabled, readOnly = loading, required, form, name, tabIndex, color = "black", backgroundColor = color, onEnterPress, onKeyPress, style } = props, rest = __rest(props, ["value", "setValue", "icon", "placeholder", "min", "max", "step", "controlIcons", "showControls", "size", "radius", "grow", "loading", "autoFocus", "disabled", "readOnly", "required", "form", "name", "tabIndex", "color", "backgroundColor", "onEnterPress", "onKeyPress", "style"]);
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
        color: getTextColor(color, "light", theme),
        "&::placeholder": {
            color: `${(_a = theme.getColor(color)) === null || _a === void 0 ? void 0 : _a.base}${(_b = theme.getColor(color)) === null || _b === void 0 ? void 0 : _b.opacity.medium}`
        },
        // Remove awful autofill color
        "&:-webkit-autofill": { transition: `background-color 5000s ease-in-out 0s` },
        "&:-webkit-autofill:focus": { transition: `background-color 5000s ease-in-out 0s` },
        "&:-webkit-autofill:hover": { transition: `background-color 5000s ease-in-out 0s` },
        "&:-webkit-autofill:active": { transition: `background-color 5000s ease-in-out 0s` },
        // Remove default arrows
        "&::-webkit-outer-spin-button": { appearance: "none", margin: 0 },
        "&::-webkit-inner-spin-button": { appearance: "none", margin: 0 },
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
    return (_jsxs(InputContainer, Object.assign({ icon: icon, size: size, radius: radius, grow: grow, loading: loading, disabled: disabled, color: color, backgroundColor: backgroundColor }, rest, { children: [_jsx("input", Object.assign({ css: InputStyle, type: "number", value: value, onChange: e => setValue(parseFloat(e.target.value)), placeholder: placeholder, min: min, max: max, step: step, autoFocus: autoFocus, disabled: disabled, readOnly: readOnly, required: required, form: form, name: name, tabIndex: tabIndex, onKeyDown: handleKeyDown }, rest)), showControls &&
                _jsxs(Flex, { gap: 0, children: [_jsx(IconButton, { color: color, variant: "subtle", size: size, radius: radius, onClick: () => setValue(value - step), disabled: disabled || readOnly, children: controlIcons.down }), _jsx(IconButton, { color: color, variant: "subtle", size: size, radius: radius, onClick: () => setValue(value + step), disabled: disabled || readOnly, children: controlIcons.up })] })] })));
}
