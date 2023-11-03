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
import { ValenceContext } from "../../../ValenceProvider";
import { createRef, forwardRef, useContext } from "react";
import { getBackgroundColor, getTextColor } from "../../buttons";
import { css } from "@emotion/react";
import { Flex } from "../../layout";
import { Loader } from "../../display";
export const Textarea = forwardRef(function Textarea(props, ref) {
    const theme = useContext(ValenceContext);
    const inputRef = ref !== null && ref !== void 0 ? ref : createRef();
    // Defaults
    const { value, setValue, placeholder = "", autoComplete = false, spellCheck = true, resize = "none", minHeight, maxHeight, minWidth, maxWidth, size = theme.defaultSize, radius = theme.defaultRadius, variant = theme.defaultVariant, grow, loading, disabled, readOnly = loading, required, color = "black", backgroundColor = color, padding = theme.sizeClasses.padding[size], margin, width = "100%", height = "auto", onEnterPress, onKeyPress, style } = props, rest = __rest(props, ["value", "setValue", "placeholder", "autoComplete", "spellCheck", "resize", "minHeight", "maxHeight", "minWidth", "maxWidth", "size", "radius", "variant", "grow", "loading", "disabled", "readOnly", "required", "color", "backgroundColor", "padding", "margin", "width", "height", "onEnterPress", "onKeyPress", "style"]);
    // Styles
    const ContainerStyle = css(Object.assign({ display: "flex", boxSizing: "border-box", flexGrow: grow ? 1 : "unset", width: width, height: height, borderRadius: theme.sizeClasses.radius[radius], padding: padding, gap: padding / 2, margin: margin, opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed" : "text", transition: `background-color ${theme.defaultTransitionDuration} linear 0s`, backgroundColor: getBackgroundColor(backgroundColor, variant, false, theme), color: getTextColor(color, variant, theme), outline: "none", border: "none", textDecoration: "none", fontSize: theme.sizeClasses.fontSize[size], fontFamily: theme.getFont("default"), resize: resize, overflowY: "hidden", minHeight: minHeight, maxHeight: maxHeight, minWidth: minWidth, maxWidth: maxWidth, "&:hover": {
            backgroundColor: !disabled ? getBackgroundColor(backgroundColor, variant, true, theme) : undefined,
        }, "&:focus-within": {
            outline: `1px solid ${getTextColor(color, variant, theme)}`,
        } }, style));
    const TextareaStyle = css({
        outline: "none",
        border: "none",
        textDecoration: "none",
        resize: "none",
        padding: 0,
        width: "100%",
        height: "100%",
        overflowY: "auto",
        background: "none",
        color: getTextColor(color, variant, theme),
        fontSize: theme.sizeClasses.fontSize[size],
        fontFamily: theme.getFont("default"),
        "&::-webkit-scrollbar": {
            width: 10,
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#11181C20",
            borderRadius: 5,
        },
        "&::placeholder": {
            color: `${getTextColor(color, variant, theme)}80`,
        },
        // Remove awful autofill color
        "&:-webkit-autofill": { transition: `background-color 5000s ease-in-out 0s` },
        "&:-webkit-autofill:focus": { transition: `background-color 5000s ease-in-out 0s` },
        "&:-webkit-autofill:hover": { transition: `background-color 5000s ease-in-out 0s` },
        "&:-webkit-autofill:active": { transition: `background-color 5000s ease-in-out 0s` },
    });
    const RequireIndicatorStyle = css({
        width: 3,
        borderRadius: 3,
        backgroundColor: getTextColor(color === "black" ? "red" : color, "light", theme),
        cursor: disabled ? "not-allowed" : "text",
    });
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
    return (_jsxs("div", { css: ContainerStyle, onClick: () => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, children: [required && _jsx("div", { css: RequireIndicatorStyle }), loading ?
                _jsx(Flex, { justify: "center", align: "center", width: "100%", children: _jsx(Loader, { color: variant === "filled" ? "white" : color, size: size }) })
                :
                    _jsx("textarea", Object.assign({ css: TextareaStyle, value: value !== null && value !== void 0 ? value : "", onChange: e => setValue(e.currentTarget.value), placeholder: placeholder, autoComplete: autoComplete ? "on" : "off", spellCheck: spellCheck, disabled: disabled, readOnly: readOnly, required: required, onKeyDown: handleKeyDown, ref: inputRef }, rest))] }));
});
