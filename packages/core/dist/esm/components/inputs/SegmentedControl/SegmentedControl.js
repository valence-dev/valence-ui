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
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Flex, StyledFlex } from "../../layout";
import { PrimitiveButton } from "../../buttons";
import { Loader, Text } from "../../display";
import { useValence } from "../../../ValenceProvider";
import { useResponsiveProps } from "../../../utilities/responsive";
function getOptionValue(option) {
    return typeof option === "string" ? option : option.value;
}
function getOptionLabel(option) {
    var _a;
    return typeof option === "string" ? option : (_a = option.label) !== null && _a !== void 0 ? _a : option.value;
}
export const SegmentedControl = forwardRef(function SegmentedControl(props, ref) {
    // Hooks
    const theme = useValence();
    const _a = useResponsiveProps(props), { value, setValue, options, onSelect, equalWidth = true, buttonProps, variant, size = theme.defaults.size, radius = theme.defaults.radius, color = "black", backgroundColor = color, margin, padding = 5, gap = padding, disabled, readOnly, required, autoFocus, loading, style } = _a, rest = __rest(_a, ["value", "setValue", "options", "onSelect", "equalWidth", "buttonProps", "variant", "size", "radius", "color", "backgroundColor", "margin", "padding", "gap", "disabled", "readOnly", "required", "autoFocus", "loading", "style"]);
    const { color: buttonColor = variant === "filled" ?
        "white" : color, backgroundColor: buttonBackgroundColor = variant === "filled" ?
        "white" : backgroundColor, size: buttonSize = size, radius: buttonRadius = radius, } = buttonProps !== null && buttonProps !== void 0 ? buttonProps : {};
    // Styles
    const containerStyle = Object.assign({ borderRadius: theme.getSize("radius", radius) + padding }, style);
    // Functions
    function handleSetOptionValue(option) {
        if (disabled || readOnly || loading)
            return;
        setValue(getOptionValue(option));
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(option);
    }
    return (_jsx(StyledFlex, Object.assign({ ref: ref, variant: variant, size: size, color: color, backgroundColor: backgroundColor, margin: margin, padding: padding, gap: gap, style: containerStyle }, rest, { children: loading ?
            _jsx(Flex, { grow: true, justify: "center", align: "center", height: theme.getSize("height", buttonSize), children: _jsx(Loader, { color: variant === "filled" ? "white" : color }) })
            :
                options.map((option, index) => {
                    const selected = getOptionValue(option) === value;
                    const label = getOptionLabel(option);
                    return (_jsx(PrimitiveButton, Object.assign({ onClick: () => handleSetOptionValue(option), variant: selected ? "light" : "subtle", grow: equalWidth, color: buttonColor, backgroundColor: buttonBackgroundColor, size: buttonSize, radius: buttonRadius, disabled: disabled || readOnly || loading }, buttonProps, { children: typeof label === "string" ?
                            _jsx(Text, { color: "inherit", children: label })
                            : label }), index));
                }) })));
});
