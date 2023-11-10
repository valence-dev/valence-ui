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
import { jsx as _jsx, Fragment as _Fragment } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { createRef, forwardRef, useContext, useState } from "react";
import { ValenceContext } from "../../../ValenceProvider";
import { useDefaultIconProps } from "../../../hooks";
import { IconSelector } from "@tabler/icons-react";
import { INPUT_SIZES } from "../InputContainer";
import { getTextColor } from "../../buttons";
import { DefaultOptionsFilter } from "../OptionContainer/OptionsFilter";
import { OptionContainer } from "../OptionContainer";
export const SelectInput = forwardRef(function SelectInput(props, ref) {
    const theme = useContext(ValenceContext);
    const inputRef = ref !== null && ref !== void 0 ? ref : createRef();
    const defaultIconProps = useDefaultIconProps();
    // Defaults
    const { value, setValue, options, onSelect, filter = DefaultOptionsFilter, nothingFound = "Nothing found...", icon, placeholder, actionIcon = _jsx(IconSelector, Object.assign({}, defaultIconProps.get())), size = theme.defaultSize, radius = theme.defaultRadius, variant = theme.defaultVariant, loading, autoFocus, disabled, readOnly = loading, required, color = "black", backgroundColor = color, padding, margin, width, height, grow, onEnterPress, onKeyPress, dropdownProps = {
        padding: INPUT_SIZES[size].padding,
        backgroundColor: "white",
        color: "black",
        shadow: true,
        height: 200,
    }, dropdownButtonProps, inputStyle, style } = props, rest = __rest(props, ["value", "setValue", "options", "onSelect", "filter", "nothingFound", "icon", "placeholder", "actionIcon", "size", "radius", "variant", "loading", "autoFocus", "disabled", "readOnly", "required", "color", "backgroundColor", "padding", "margin", "width", "height", "grow", "onEnterPress", "onKeyPress", "dropdownProps", "dropdownButtonProps", "inputStyle", "style"]);
    // States
    const [searchValue, setSearchValue] = useState("");
    const [visibleOptions, setVisibleOptions] = useState(options);
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
    // Styles
    const InputStyle = css(Object.assign({ border: "none", outline: "none", background: "none", flexGrow: 1, width: "100%", height: "100%", margin: 0, padding: 0, cursor: disabled ? "not-allowed" : "text", fontSize: theme.sizeClasses.fontSize[size], fontFamily: theme.getFont("default"), color: getTextColor(color, variant, theme), "&::placeholder": {
            color: `${getTextColor(color, variant, theme)}80`,
        }, 
        // Remove awful autofill color
        "&:-webkit-autofill": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:focus": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:hover": { transition: `background-color 5000s ease-in-out 0s` }, "&:-webkit-autofill:active": { transition: `background-color 5000s ease-in-out 0s` } }, inputStyle));
    return (_jsx(_Fragment, { children: _jsx(OptionContainer, { selectedOption: value, options: visibleOptions, onSelect: (option) => {
                setValue(option);
                setSearchValue(option.label);
                onSelect === null || onSelect === void 0 ? void 0 : onSelect(option);
            }, nothingFound: nothingFound, icon: icon, button: actionIcon, size: size, radius: radius, variant: variant, loading: loading, disabled: disabled, required: required, color: color, backgroundColor: backgroundColor, padding: padding, margin: margin, width: width, height: height, grow: grow, style: style, inputRef: inputRef, children: _jsx("input", Object.assign({ css: InputStyle, placeholder: placeholder, value: searchValue, onChange: (e) => handleSearchUpdate(e.target.value), type: "text", autoComplete: "off", autoFocus: autoFocus, disabled: disabled, readOnly: readOnly, required: required, onKeyDown: handleKeyDown, ref: inputRef }, rest)) }) }));
});
