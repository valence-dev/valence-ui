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
import { useValence } from "../../..";
import { getBackgroundColor, getTextColor } from "../../buttons";
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
    // Defaults
    const { icon, button, size = theme.defaultSize, radius = theme.defaultRadius, variant = theme.defaultVariant, grow, disabled = false, required = false, loading = false, color = "black", backgroundColor = color, width = "100%", height = theme.sizeClasses.height[size], padding = INPUT_SIZES[size].padding, margin, inputRef, onClick, iconContainerStyle, requireIndicatorStyle, buttonContainerStyle, children, style } = props, rest = __rest(props, ["icon", "button", "size", "radius", "variant", "grow", "disabled", "required", "loading", "color", "backgroundColor", "width", "height", "padding", "margin", "inputRef", "onClick", "iconContainerStyle", "requireIndicatorStyle", "buttonContainerStyle", "children", "style"]);
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
    const ContainerStyle = css(Object.assign({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", boxSizing: "border-box", flexGrow: grow ? 1 : "unset", width: width, height: height, borderRadius: theme.sizeClasses.radius[radius], padding: padding, gap: padding, opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed" : "text", transition: `background-color ${theme.defaultTransitionDuration} linear 0s`, backgroundColor: getBackgroundColor(backgroundColor, variant, false, theme), color: getTextColor(color, variant, theme), outline: "none", border: "none", textDecoration: "none", "&:hover": {
            backgroundColor: !disabled ? getBackgroundColor(backgroundColor, variant, true, theme) : undefined,
        }, "&:focus-within": {
            outline: `1px solid ${getTextColor(color, variant, theme)}`,
        } }, style));
    const IconContainerStyle = css(Object.assign({ height: "100%", opacity: 0.5, boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }, iconContainerStyle));
    const ButtonContainerStyle = css(Object.assign({ height: "100%", opacity: 0.5, boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }, buttonContainerStyle));
    const RequireIndicatorStyle = css(Object.assign({ width: 3, height: "calc(100% - 10px)", minHeight: 20, borderRadius: 3, backgroundColor: getTextColor(color === "black" ? "red" : color, "light", theme), cursor: disabled ? "not-allowed" : "text" }, requireIndicatorStyle));
    return (_jsxs("div", Object.assign({ css: ContainerStyle, ref: ref, onClick: (event) => handleClick(event) }, rest, { children: [required && _jsx("div", { css: RequireIndicatorStyle }), (icon || loading) &&
                _jsx("div", { css: IconContainerStyle, children: loading ?
                        _jsx(Loader, { color: variant === "filled" ? "white" : color }) :
                        _jsx(Icon, { children: icon }) }), children, button &&
                _jsx("div", { css: ButtonContainerStyle, children: button })] })));
});
