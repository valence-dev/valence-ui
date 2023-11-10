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
const hooks_1 = require("../../../hooks");
const icons_react_1 = require("@tabler/icons-react");
const OptionContainer_1 = require("../OptionContainer");
exports.PillInput = (0, react_1.forwardRef)(function PillInput(props, ref) {
    const theme = (0, react_1.useContext)(ValenceProvider_1.ValenceContext);
    const inputRef = ref !== null && ref !== void 0 ? ref : (0, react_1.createRef)();
    const defaultIconProps = (0, hooks_1.useDefaultIconProps)();
    // Defaults
    const { value, setValue, actionKey = "Enter", options, filter = OptionContainer_1.DefaultOptionsFilter, nothingFound = "Nothing found... Add a tag instead!", allowDuplicates = false, allowClear = true, grow, maxPills = Infinity, minLength = 0, maxLength = Infinity, clearButtonIcon = (0, jsx_runtime_1.jsx)(icons_react_1.IconX, Object.assign({}, defaultIconProps.get())), clearButtonProps, pillProps, pillContainerProps, icon, placeholder, size = theme.defaultSize, radius = theme.defaultRadius, variant = theme.defaultVariant, loading, autoFocus, disabled, readOnly = loading, required, color = "black", backgroundColor = color, padding, margin, width, height = theme.sizeClasses.height[size], onEnterPress, onKeyPress, onPillAdd, onPillRemove, inputStyle, style } = props, rest = __rest(props, ["value", "setValue", "actionKey", "options", "filter", "nothingFound", "allowDuplicates", "allowClear", "grow", "maxPills", "minLength", "maxLength", "clearButtonIcon", "clearButtonProps", "pillProps", "pillContainerProps", "icon", "placeholder", "size", "radius", "variant", "loading", "autoFocus", "disabled", "readOnly", "required", "color", "backgroundColor", "padding", "margin", "width", "height", "onEnterPress", "onKeyPress", "onPillAdd", "onPillRemove", "inputStyle", "style"]);
    // States
    const [searchValue, setSearchValue] = (0, react_1.useState)("");
    const [visibleOptions, setVisibleOptions] = (0, react_1.useState)(filterOptions(options !== null && options !== void 0 ? options : [], searchValue, value));
    // Functions
    function handleKeyDown(e) {
        // Blur on "Escape" key
        if (e.key === "Escape")
            e.currentTarget.blur();
        // Call onEnterPress on "Enter" key
        if (e.key === "Enter")
            onEnterPress === null || onEnterPress === void 0 ? void 0 : onEnterPress(e);
        // Call handlePillAdd on actionKey
        if (e.key === actionKey) {
            e.preventDefault();
            handlePillAdd();
        }
        // Call onKeyPress on any key
        onKeyPress === null || onKeyPress === void 0 ? void 0 : onKeyPress(e);
    }
    function filterOptions(options, search, blacklist) {
        let filtered = filter(options, search);
        // Filter out options in the blacklist
        filtered = filtered.filter((option) => !blacklist.includes(option.label));
        return filtered;
    }
    function handleSearchUpdate(search) {
        setSearchValue(search);
        setVisibleOptions(filterOptions(options !== null && options !== void 0 ? options : [], search, value));
    }
    function handlePillAdd(v) {
        const tagValue = v !== null && v !== void 0 ? v : searchValue.trim();
        if (tagValue.length < minLength
            || tagValue.length > maxLength
            || value.length >= maxPills
            || !tagValue)
            return;
        if (!allowDuplicates && value.includes(tagValue))
            return;
        const newValue = [...value, tagValue];
        setValue(newValue);
        setSearchValue("");
        onPillAdd === null || onPillAdd === void 0 ? void 0 : onPillAdd(tagValue);
        // Update visible options
        setVisibleOptions(filterOptions(options !== null && options !== void 0 ? options : [], "", newValue));
    }
    function handlePillRemove(index) {
        const newValue = [...value];
        newValue.splice(index, 1);
        setValue(newValue);
        onPillRemove === null || onPillRemove === void 0 ? void 0 : onPillRemove(value[index]);
        // Update visible options
        setVisibleOptions(filterOptions(options !== null && options !== void 0 ? options : [], "", newValue));
    }
    function clearPills() {
        setValue([]);
        setSearchValue("");
        // Update visible options
        setVisibleOptions(filterOptions(options !== null && options !== void 0 ? options : [], "", []));
    }
    // Styles
    const InputStyle = (0, react_2.css)(Object.assign({ border: "none", outline: "none", background: "none", flexGrow: 1, margin: 0, padding: 0, cursor: disabled ? "not-allowed" : "text", fontSize: theme.sizeClasses.fontSize[size], fontFamily: theme.getFont("default"), color: (0, buttons_1.getTextColor)(color, variant, theme), "&::placeholder": {
            color: `${(0, buttons_1.getTextColor)(color, variant, theme)}80`,
        }, 
        // Remove awful autofill color
        "&:-webkit-autofill": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:focus": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:hover": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:active": { transition: `background-color 5000s ease-in-out 0s` } }, inputStyle));
    const ContainerStyle = Object.assign({ minHeight: height, height: "fit-content", alignItems: "center" }, style);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(OptionContainer_1.OptionContainer, { options: visibleOptions !== null && visibleOptions !== void 0 ? visibleOptions : [], onSelect: (option) => handlePillAdd(option.label), nothingFound: nothingFound, icon: icon, size: size, radius: radius, variant: variant, grow: grow, disabled: disabled, required: required, loading: loading, color: color, backgroundColor: backgroundColor, padding: padding, margin: margin, width: width, height: height, style: ContainerStyle, inputRef: inputRef, button: allowClear && value.length > 0 &&
                (0, jsx_runtime_1.jsx)(buttons_1.IconButton, Object.assign({ radius: radius, variant: "subtle", color: "black", onClick: clearPills, height: 25 }, clearButtonProps, { children: clearButtonIcon })), children: (0, jsx_runtime_1.jsxs)(layout_1.Flex, Object.assign({ direction: "row", wrap: "wrap", align: "center", gap: 5, width: "100%" }, pillContainerProps, { children: [value.map((v, i) => ((0, jsx_runtime_1.jsx)(display_1.Pill, Object.assign({ size: size, variant: variant, tabIndex: 0, withRemoveButton: true, onRemove: () => handlePillRemove(i) }, pillProps, { children: v }), i))), (0, jsx_runtime_1.jsx)("input", Object.assign({ css: InputStyle, placeholder: placeholder, value: searchValue !== null && searchValue !== void 0 ? searchValue : "", onChange: (e) => handleSearchUpdate(e.target.value), type: "text", autoComplete: "off", autoFocus: autoFocus, disabled: disabled, readOnly: readOnly, required: required, onKeyDown: handleKeyDown, ref: inputRef }, rest))] })) }) }));
});
