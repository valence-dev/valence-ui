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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { createRef, forwardRef, useState } from "react";
import { Button, IconButton, getTextColor } from "../../buttons";
import { useValence } from "../../../ValenceProvider";
import { Pill } from "../../display";
import { css } from "@emotion/react";
import { Flex } from "../../layout";
import { IconX } from "@tabler/icons-react";
import { DefaultOptionsFilter, OptionContainer } from "../OptionContainer";
export const PillInput = forwardRef(function PillInput(props, ref) {
    const theme = useValence();
    const inputRef = ref !== null && ref !== void 0 ? ref : createRef();
    // Defaults
    const { value, setValue, autofillKeys = ["Tab"], selectKeys = [" ", "Enter"], options = [], filter = DefaultOptionsFilter, nothingFound, allowDuplicates = false, allowClear = true, allowBackspaceRemove = true, grow, maxPills = Infinity, minLength = 0, maxLength = Infinity, clearButtonIcon = _jsx(IconX, {}), clearButtonProps, pillProps, pillContainerProps, icon, placeholder, size = theme.defaultSize, radius = theme.defaultRadius, variant = theme.defaultVariant, loading, autoFocus, disabled, readOnly = loading, required, color = "black", backgroundColor = color, padding, margin, width, height = theme.sizeClasses.height[size], onEnterPress, onKeyPress, onPillAdd, onPillRemove, inputStyle, dropdownStyle, style } = props, rest = __rest(props, ["value", "setValue", "autofillKeys", "selectKeys", "options", "filter", "nothingFound", "allowDuplicates", "allowClear", "allowBackspaceRemove", "grow", "maxPills", "minLength", "maxLength", "clearButtonIcon", "clearButtonProps", "pillProps", "pillContainerProps", "icon", "placeholder", "size", "radius", "variant", "loading", "autoFocus", "disabled", "readOnly", "required", "color", "backgroundColor", "padding", "margin", "width", "height", "onEnterPress", "onKeyPress", "onPillAdd", "onPillRemove", "inputStyle", "dropdownStyle", "style"]);
    // States
    const [searchValue, setSearchValue] = useState("");
    const [visibleOptions, setVisibleOptions] = useState(filterOptions(options, searchValue, value));
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
    const InputStyle = css(Object.assign({ border: "none", outline: "none", background: "none", flexGrow: 1, margin: 0, padding: 0, cursor: disabled ? "not-allowed" : "text", fontSize: theme.sizeClasses.fontSize[size], fontFamily: theme.getFont("default"), color: getTextColor(color, variant, theme), "&::placeholder": {
            color: `${getTextColor(color, variant, theme)}80`,
        }, 
        // Remove awful autofill color
        "&:-webkit-autofill": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:focus": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:hover": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:active": { transition: `background-color 5000s ease-in-out 0s` } }, inputStyle));
    const ContainerStyle = Object.assign({ minHeight: height, height: "fit-content", alignItems: "center" }, style);
    return (_jsx(_Fragment, { children: _jsx(OptionContainer, { options: visibleOptions !== null && visibleOptions !== void 0 ? visibleOptions : [], onSelect: (option) => handlePillAdd(option.label), selectKeys: autofillKeys, nothingFound: _jsx(Button, { width: "100%", variant: "subtle", color: color, onClick: () => handlePillAdd(searchValue), children: `Add "${searchValue}"` }), icon: icon, size: size, radius: radius, variant: variant, grow: grow, disabled: disabled, required: required, loading: loading, color: color, backgroundColor: backgroundColor, padding: padding, margin: margin, width: width, height: height, dropdownStyle: dropdownStyle, style: ContainerStyle, inputRef: inputRef, button: allowClear && value.length > 0 &&
                _jsx(IconButton, Object.assign({ radius: radius, variant: "subtle", color: "black", onClick: clearPills, height: 25 }, clearButtonProps, { children: clearButtonIcon })), children: _jsxs(Flex, Object.assign({ direction: "row", wrap: "wrap", align: "center", gap: 5, width: "100%" }, pillContainerProps, { children: [value.map((v, i) => (_jsx(Pill, Object.assign({ size: size, variant: variant, tabIndex: 0, withRemoveButton: true, onRemove: () => handlePillRemove(i) }, pillProps, { children: v }), i))), _jsx("input", Object.assign({ css: InputStyle, placeholder: placeholder, value: searchValue !== null && searchValue !== void 0 ? searchValue : "", onChange: (e) => handleSearchUpdate(e.target.value), type: "text", autoComplete: "off", autoFocus: autoFocus, disabled: disabled, readOnly: readOnly, required: required, onKeyDown: handleKeyDown, ref: inputRef }, rest))] })) }) }));
});
