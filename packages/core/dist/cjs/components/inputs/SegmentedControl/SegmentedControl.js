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
exports.SegmentedControl = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const layout_1 = require("../../layout");
const buttons_1 = require("../../buttons");
const display_1 = require("../../display");
const ValenceProvider_1 = require("../../../ValenceProvider");
const responsive_1 = require("../../../utilities/responsive");
function getOptionValue(option) {
    return typeof option === "string" ? option : option.value;
}
function getOptionLabel(option) {
    var _a;
    return typeof option === "string" ? option : (_a = option.label) !== null && _a !== void 0 ? _a : option.value;
}
exports.SegmentedControl = (0, react_1.forwardRef)(function SegmentedControl(props, ref) {
    // Hooks
    const theme = (0, ValenceProvider_1.useValence)();
    const _a = (0, responsive_1.useResponsiveProps)(props), { value, setValue, options, onSelect, equalWidth = true, buttonProps, variant, size = theme.defaults.size, radius = theme.defaults.radius, color = "black", backgroundColor = color, margin, padding = 5, gap = padding, disabled, readOnly, required, autoFocus, loading, style } = _a, rest = __rest(_a, ["value", "setValue", "options", "onSelect", "equalWidth", "buttonProps", "variant", "size", "radius", "color", "backgroundColor", "margin", "padding", "gap", "disabled", "readOnly", "required", "autoFocus", "loading", "style"]);
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
    return ((0, jsx_runtime_1.jsx)(layout_1.StyledFlex, Object.assign({ ref: ref, variant: variant, size: size, color: color, backgroundColor: backgroundColor, margin: margin, padding: padding, gap: gap, style: containerStyle }, rest, { children: loading ?
            (0, jsx_runtime_1.jsx)(layout_1.Flex, { grow: true, justify: "center", align: "center", height: theme.getSize("height", buttonSize), children: (0, jsx_runtime_1.jsx)(display_1.Loader, { color: variant === "filled" ? "white" : color }) })
            :
                options.map((option, index) => {
                    const selected = getOptionValue(option) === value;
                    const label = getOptionLabel(option);
                    return ((0, jsx_runtime_1.jsx)(buttons_1.PrimitiveButton, Object.assign({ onClick: () => handleSetOptionValue(option), variant: selected ? "light" : "subtle", grow: equalWidth, color: buttonColor, backgroundColor: buttonBackgroundColor, size: buttonSize, radius: buttonRadius, disabled: disabled || readOnly || loading }, buttonProps, { children: typeof label === "string" ?
                            (0, jsx_runtime_1.jsx)(display_1.Text, { color: "inherit", children: label })
                            : label }), index));
                }) })));
});
