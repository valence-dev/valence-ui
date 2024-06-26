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
import { forwardRef } from "react";
import { useColors, useResponsiveProps, useValence } from "../../..";
import { Icon, Loader } from "../../display";
import { css } from "@emotion/react";
export const INPUT_SIZES = {
    xs: { padding: 4 },
    sm: { padding: 6 },
    md: { padding: 8 },
    lg: { padding: 10 },
    xl: { padding: 12 },
};
export const InputContainer = forwardRef(function InputContainer(props, ref) {
    const theme = useValence();
    const { getBgHex, getBorderHex, getFgHex } = useColors();
    // Defaults
    const _a = useResponsiveProps(props), { icon, button, size = theme.defaults.size, radius = theme.defaults.radius, variant = theme.defaults.variant, grow, disabled = false, required = false, loading = false, color = "black", backgroundColor = color, width = "100%", height = theme.sizeClasses.height[size], padding = INPUT_SIZES[size].padding, margin, inputRef, onClick, iconContainerStyle, requireIndicatorStyle, buttonContainerStyle, children, style } = _a, rest = __rest(_a, ["icon", "button", "size", "radius", "variant", "grow", "disabled", "required", "loading", "color", "backgroundColor", "width", "height", "padding", "margin", "inputRef", "onClick", "iconContainerStyle", "requireIndicatorStyle", "buttonContainerStyle", "children", "style"]);
    // Functions
    const handleClick = (e) => {
        if (disabled) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (inputRef && inputRef.current)
            inputRef.current.focus();
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    };
    // Styles
    const ContainerStyle = css(Object.assign({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", boxSizing: "border-box", flexGrow: grow ? 1 : "unset", width: width, height: height, borderRadius: theme.sizeClasses.radius[radius], padding: padding, gap: padding, opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed" : "text", transitionProperty: "background-color, border", transitionDuration: theme.defaults.transitionDuration, transitionTimingFunction: "linear", backgroundColor: getBgHex(backgroundColor, variant, false), color: getFgHex(color, variant), outline: "none", border: getBorderHex(color, variant), textDecoration: "none", "&:hover": {
            backgroundColor: !disabled ? getBgHex(backgroundColor, variant, true) : undefined,
        }, "&:focus-within": {
            outline: "none",
            border: getBorderHex(color, variant, true),
        } }, style));
    const IconContainerStyle = css(Object.assign({ height: "100%", opacity: 0.5, boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }, iconContainerStyle));
    const ButtonContainerStyle = css(Object.assign({ height: "100%", opacity: 0.5, boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }, buttonContainerStyle));
    const RequireIndicatorStyle = css(Object.assign({ width: 3, height: "calc(100% - 10px)", minHeight: 20, borderRadius: 3, backgroundColor: getFgHex(color === "black" ? "red" : color, "light"), cursor: disabled ? "not-allowed" : "text" }, requireIndicatorStyle));
    return (_jsxs("div", Object.assign({ css: ContainerStyle, ref: ref, onClick: (event) => handleClick(event) }, rest, { children: [required && _jsx("div", { css: RequireIndicatorStyle }), (icon || loading) &&
                _jsx("div", { css: IconContainerStyle, children: loading ?
                        _jsx(Loader, { color: variant === "filled" ? "white" : color }) :
                        _jsx(Icon, { children: icon }) }), children, button &&
                _jsx("div", { css: ButtonContainerStyle, children: _jsx(Icon, { children: button }) })] })));
});
