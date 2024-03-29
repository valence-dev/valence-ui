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
exports.PillInput = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("react");
const buttons_1 = require("../../buttons");
const ValenceProvider_1 = require("../../../ValenceProvider");
const display_1 = require("../../display");
const react_2 = require("@emotion/react");
const layout_1 = require("../../layout");
const icons_react_1 = require("@tabler/icons-react");
const OptionContainer_1 = require("../OptionContainer");
const responsive_1 = require("../../../utilities/responsive");
const color_1 = require("../../../utilities/color");
exports.PillInput = (0, react_1.forwardRef)(function PillInput(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const { getFgHex } = (0, color_1.useColors)();
    const inputRef = ref !== null && ref !== void 0 ? ref : (0, react_1.createRef)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { value, setValue, autofillKeys = ["Tab"], selectKeys = [" ", "Enter"], options = [], filter = OptionContainer_1.DefaultOptionsFilter, nothingFound, allowDuplicates = false, allowClear = true, allowBackspaceRemove = true, grow, maxPills = Infinity, minLength = 0, maxLength = Infinity, clearButtonIcon = (0, jsx_runtime_1.jsx)(icons_react_1.IconX, {}), clearButtonProps, pillProps, pillContainerProps, icon, placeholder, size = theme.defaults.size, radius = theme.defaults.radius, variant = theme.defaults.variant, loading, autoFocus, disabled, readOnly = loading, required, color = "black", backgroundColor = color, padding, margin, width, height = theme.sizeClasses.height[size], onEnterPress, onKeyPress, onPillAdd, onPillRemove, inputStyle, dropdownStyle, style } = _a, rest = __rest(_a, ["value", "setValue", "autofillKeys", "selectKeys", "options", "filter", "nothingFound", "allowDuplicates", "allowClear", "allowBackspaceRemove", "grow", "maxPills", "minLength", "maxLength", "clearButtonIcon", "clearButtonProps", "pillProps", "pillContainerProps", "icon", "placeholder", "size", "radius", "variant", "loading", "autoFocus", "disabled", "readOnly", "required", "color", "backgroundColor", "padding", "margin", "width", "height", "onEnterPress", "onKeyPress", "onPillAdd", "onPillRemove", "inputStyle", "dropdownStyle", "style"]);
    // States
    const [searchValue, setSearchValue] = (0, react_1.useState)("");
    const [visibleOptions, setVisibleOptions] = (0, react_1.useState)(filterOptions(options, searchValue, value));
    // Functions
    function handleKeyDown(e) {
        // Blur on "Escape" key
        if (e.key === "Escape")
            e.currentTarget.blur();
        // Call onEnterPress on "Enter" key
        if (e.key === "Enter")
            onEnterPress === null || onEnterPress === void 0 ? void 0 : onEnterPress(e);
        // Call handlePillAdd on actionKey
        if (selectKeys.includes(e.key)) {
            e.preventDefault();
            handlePillAdd();
        }
        // Call onKeyPress on any key
        onKeyPress === null || onKeyPress === void 0 ? void 0 : onKeyPress(e);
        // Remove last pill on backspace
        if (e.key === "Backspace" && allowBackspaceRemove && searchValue.length === 0) {
            if (searchValue.length > 0)
                return;
            handlePillRemove(value.length - 1);
        }
    }
    function filterOptions(options, search, blacklist) {
        let filtered = filter(options, search);
        // Filter out options in the blacklist
        filtered = filtered.filter((option) => !blacklist.includes(option.label));
        return filtered;
    }
    function handleSearchUpdate(search) {
        setSearchValue(search);
        setVisibleOptions(filterOptions(options, search, value));
    }
    function handlePillAdd(v) {
        const tagValue = v !== null && v !== void 0 ? v : searchValue.trim();
        if (tagValue.length < minLength
            || tagValue.length > maxLength
            || value.length >= maxPills
            || !tagValue)
            return;
        if (!allowDuplicates && value.includes(tagValue)) {
            setSearchValue("");
            return;
        }
        ;
        const newValue = [...value, tagValue];
        setValue(newValue);
        setSearchValue("");
        onPillAdd === null || onPillAdd === void 0 ? void 0 : onPillAdd(tagValue);
        // Update visible options
        setVisibleOptions(filterOptions(options, "", newValue));
    }
    function handlePillRemove(index) {
        const newValue = [...value];
        newValue.splice(index, 1);
        setValue(newValue);
        onPillRemove === null || onPillRemove === void 0 ? void 0 : onPillRemove(value[index]);
        // Update visible options
        setVisibleOptions(filterOptions(options, "", newValue));
    }
    function clearPills() {
        setValue([]);
        setSearchValue("");
        // Update visible options
        setVisibleOptions(filterOptions(options, "", []));
    }
    // Styles
    const InputStyle = (0, react_2.css)(Object.assign({ border: "none", outline: "none", background: "none", flexGrow: 1, margin: 0, padding: 0, cursor: disabled ? "not-allowed" : "text", fontSize: theme.sizeClasses.fontSize[size], fontFamily: theme.getFont("default"), color: getFgHex(color, variant), "&::placeholder": {
            color: `${getFgHex(color, variant)}80`,
        }, 
        // Remove awful autofill color
        "&:-webkit-autofill": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:focus": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:hover": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:active": { transition: `background-color 5000s ease-in-out 0s` } }, inputStyle));
    const ContainerStyle = Object.assign({ minHeight: height, height: "fit-content", alignItems: "center" }, style);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(OptionContainer_1.OptionContainer, { options: visibleOptions !== null && visibleOptions !== void 0 ? visibleOptions : [], onSelect: (option) => handlePillAdd(option.label), selectKeys: autofillKeys, nothingFound: (0, jsx_runtime_1.jsx)(buttons_1.Button, { width: "100%", variant: "subtle", color: color, onClick: () => handlePillAdd(searchValue), children: `Add "${searchValue}"` }), icon: icon, size: size, radius: radius, variant: variant, grow: grow, disabled: disabled, required: required, loading: loading, color: color, backgroundColor: backgroundColor, padding: padding, margin: margin, width: width, height: height, dropdownStyle: dropdownStyle, style: ContainerStyle, inputRef: inputRef, button: allowClear && value.length > 0 &&
                (0, jsx_runtime_1.jsx)(buttons_1.IconButton, Object.assign({ radius: radius, variant: "subtle", color: "black", onClick: clearPills, height: 25 }, clearButtonProps, { children: clearButtonIcon })), children: (0, jsx_runtime_1.jsxs)(layout_1.Flex, Object.assign({ direction: "row", wrap: "wrap", align: "center", gap: 5, width: "100%" }, pillContainerProps, { children: [value.map((v, i) => ((0, jsx_runtime_1.jsx)(display_1.Pill, Object.assign({ size: size, variant: variant, tabIndex: 0, withRemoveButton: true, onRemove: () => handlePillRemove(i) }, pillProps, { children: v }), i))), (0, jsx_runtime_1.jsx)("input", Object.assign({ css: InputStyle, placeholder: placeholder, value: searchValue !== null && searchValue !== void 0 ? searchValue : "", onChange: (e) => handleSearchUpdate(e.target.value), type: "text", autoComplete: "off", autoFocus: autoFocus, disabled: disabled, readOnly: readOnly, required: required, onKeyDown: handleKeyDown, ref: inputRef }, rest))] })) }) }));
});
