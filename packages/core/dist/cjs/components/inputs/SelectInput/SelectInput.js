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
exports.SelectInput = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("@emotion/react");
const react_2 = require("react");
const ValenceProvider_1 = require("../../../ValenceProvider");
const icons_react_1 = require("@tabler/icons-react");
const InputContainer_1 = require("../InputContainer");
const buttons_1 = require("../../buttons");
const OptionsFilter_1 = require("../OptionContainer/OptionsFilter");
const OptionContainer_1 = require("../OptionContainer");
exports.SelectInput = (0, react_2.forwardRef)(function SelectInput(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const inputRef = ref !== null && ref !== void 0 ? ref : (0, react_2.createRef)();
    // Defaults
    const { value, setValue, options, onSelect, filter = OptionsFilter_1.DefaultOptionsFilter, nothingFound = "Nothing found...", icon, placeholder, actionIcon = (0, jsx_runtime_1.jsx)(icons_react_1.IconSelector, {}), size = theme.defaults.size, radius = theme.defaults.radius, variant = theme.defaults.variant, loading, autoFocus, disabled, readOnly = loading, required, color = "black", backgroundColor = color, padding, margin, width, height, grow, onEnterPress, onKeyPress, dropdownProps = {
        padding: InputContainer_1.INPUT_SIZES[size].padding,
        backgroundColor: "white",
        color: "black",
        shadow: true,
        height: 200,
    }, dropdownButtonProps, inputStyle, dropdownStyle, style } = props, rest = __rest(props, ["value", "setValue", "options", "onSelect", "filter", "nothingFound", "icon", "placeholder", "actionIcon", "size", "radius", "variant", "loading", "autoFocus", "disabled", "readOnly", "required", "color", "backgroundColor", "padding", "margin", "width", "height", "grow", "onEnterPress", "onKeyPress", "dropdownProps", "dropdownButtonProps", "inputStyle", "dropdownStyle", "style"]);
    // States
    const [searchValue, setSearchValue] = (0, react_2.useState)("");
    const [visibleOptions, setVisibleOptions] = (0, react_2.useState)(options);
    // Functions
    function handleKeyDown(e) {
        // Blur on "Escape" key
        if (e.key === "Escape")
            e.currentTarget.blur();
        // Call onEnterPress on "Enter" key
        if (e.key === "Enter") {
            e.preventDefault();
            onEnterPress === null || onEnterPress === void 0 ? void 0 : onEnterPress(e);
        }
        // Call onKeyPress on any key
        onKeyPress === null || onKeyPress === void 0 ? void 0 : onKeyPress(e);
    }
    function handleSearchUpdate(search) {
        setSearchValue(search);
        setVisibleOptions(filter(options, search));
    }
    // Detect a change in the value 
    (0, react_2.useEffect)(() => {
        var _a;
        setSearchValue((_a = value === null || value === void 0 ? void 0 : value.label) !== null && _a !== void 0 ? _a : "");
    }, [value]);
    // Styles
    const InputStyle = (0, react_1.css)(Object.assign({ border: "none", outline: "none", background: "none", flexGrow: 1, width: "100%", height: "100%", margin: 0, padding: 0, cursor: disabled ? "not-allowed" : "text", fontSize: theme.sizeClasses.fontSize[size], fontFamily: theme.getFont("default"), color: (0, buttons_1.getTextColor)(color, variant, theme), "&::placeholder": {
            color: `${(0, buttons_1.getTextColor)(color, variant, theme)}80`,
        }, 
        // Remove awful autofill color
        "&:-webkit-autofill": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:focus": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:hover": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:active": { transition: `background-color 5000s ease-in-out 0s` } }, inputStyle));
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(OptionContainer_1.OptionContainer, { selectedOption: value, options: visibleOptions, onSelect: (option) => {
                setValue(option);
                setSearchValue(option.label);
                onSelect === null || onSelect === void 0 ? void 0 : onSelect(option);
            }, nothingFound: nothingFound, icon: icon, button: actionIcon, size: size, radius: radius, variant: variant, loading: loading, disabled: disabled, required: required, color: color, backgroundColor: backgroundColor, padding: padding, margin: margin, width: width, height: height, grow: grow, dropdownStyle: dropdownStyle, style: style, inputRef: inputRef, children: (0, jsx_runtime_1.jsx)("input", Object.assign({ css: InputStyle, placeholder: placeholder, value: searchValue, onChange: (e) => handleSearchUpdate(e.target.value), type: "text", autoComplete: "off", autoFocus: autoFocus, disabled: disabled, readOnly: readOnly, required: required, onKeyDown: handleKeyDown, ref: inputRef }, rest)) }) }));
});
