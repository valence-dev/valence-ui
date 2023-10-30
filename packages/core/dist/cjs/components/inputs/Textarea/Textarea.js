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
const buttons_1 = require("../../buttons");
const react_2 = require("@emotion/react");
const layout_1 = require("../../layout");
const display_1 = require("../../display");
function Textarea(props) {
    var _a, _b;
    const theme = (0, react_1.useContext)(ValenceProvider_1.ValenceContext);
    // Defaults
    const { value, setValue, icon, placeholder = "", autoComplete = false, spellCheck = true, minLength, maxLength, cols, rows, wrap, resize = "none", minHeight, maxHeight, minWidth, maxWidth, size = theme.defaultSize, radius = theme.defaultRadius, grow, loading, autoFocus, disabled, readOnly = loading, required, form, name, tabIndex, padding = theme.sizeClasses.padding[size], margin, width = "100%", height = "auto", color = "black", backgroundColor = color, style, onInvalid, onSelect, onEnterPress, onKeyPress, onFocus, onBlur } = props, rest = __rest(props, ["value", "setValue", "icon", "placeholder", "autoComplete", "spellCheck", "minLength", "maxLength", "cols", "rows", "wrap", "resize", "minHeight", "maxHeight", "minWidth", "maxWidth", "size", "radius", "grow", "loading", "autoFocus", "disabled", "readOnly", "required", "form", "name", "tabIndex", "padding", "margin", "width", "height", "color", "backgroundColor", "style", "onInvalid", "onSelect", "onEnterPress", "onKeyPress", "onFocus", "onBlur"]);
    // Styles
    const ContainerStyle = (0, react_2.css)(Object.assign({ display: "flex", boxSizing: "border-box", flexGrow: grow ? 1 : "unset", width: width, height: height, borderRadius: theme.sizeClasses.radius[radius], padding: padding, gap: padding / 2, margin: margin, opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed" : "text", transition: `background-color ${theme.defaultTransitionDuration} linear 0s`, backgroundColor: (0, buttons_1.getBackgroundColor)(backgroundColor, "light", false, theme), color: (0, buttons_1.getTextColor)(color, "light", theme), outline: "none", border: "none", textDecoration: "none", fontSize: theme.sizeClasses.fontSize[size], fontFamily: theme.getFont("default"), resize: resize, overflowY: "hidden", minHeight: minHeight, maxHeight: maxHeight, minWidth: minWidth, maxWidth: maxWidth, "&:hover": {
            backgroundColor: !disabled ? (0, buttons_1.getBackgroundColor)(backgroundColor, "light", true, theme) : undefined,
        }, "&:focus-within": {
            outline: `1px solid ${(0, buttons_1.getTextColor)(color, "light", theme)}`,
        } }, style));
    const TextareaStyle = (0, react_2.css)({
        outline: "none",
        border: "none",
        textDecoration: "none",
        resize: "none",
        padding: 0,
        width: "100%",
        height: "100%",
        overflowY: "auto",
        background: "none",
        color: (0, buttons_1.getTextColor)(color, "light", theme),
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
            color: `${(_a = theme.getColor(color)) === null || _a === void 0 ? void 0 : _a.base}${(_b = theme.getColor(color)) === null || _b === void 0 ? void 0 : _b.opacity.medium}`
        },
        // Remove awful autofill color
        "&:-webkit-autofill": { transition: `background-color 5000s ease-in-out 0s` },
        "&:-webkit-autofill:focus": { transition: `background-color 5000s ease-in-out 0s` },
        "&:-webkit-autofill:hover": { transition: `background-color 5000s ease-in-out 0s` },
        "&:-webkit-autofill:active": { transition: `background-color 5000s ease-in-out 0s` },
    });
    const RequireIndicatorStyle = (0, react_2.css)({
        width: 3,
        borderRadius: 3,
        backgroundColor: (0, buttons_1.getTextColor)(color === "black" ? "red" : color, "light", theme),
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
    return ((0, jsx_runtime_1.jsxs)("div", { css: ContainerStyle, children: [required && (0, jsx_runtime_1.jsx)("div", { css: RequireIndicatorStyle }), loading ?
                (0, jsx_runtime_1.jsx)(layout_1.Flex, { justify: "center", align: "center", width: "100%", children: (0, jsx_runtime_1.jsx)(display_1.Loader, { color: color, size: size }) })
                :
                    (0, jsx_runtime_1.jsx)("textarea", Object.assign({ css: TextareaStyle, value: value !== null && value !== void 0 ? value : "", onChange: e => setValue(e.currentTarget.value), placeholder: placeholder, autoComplete: autoComplete ? "on" : "off", spellCheck: spellCheck, minLength: minLength, maxLength: maxLength, cols: cols, rows: rows, wrap: wrap, autoFocus: autoFocus, disabled: disabled, readOnly: readOnly, required: required, form: form, name: name, tabIndex: tabIndex, onKeyDown: handleKeyDown }, rest))] }));
}
exports.Textarea = Textarea;
