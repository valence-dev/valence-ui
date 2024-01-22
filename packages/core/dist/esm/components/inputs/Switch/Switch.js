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
import { forwardRef } from "react";
import { useValence } from "../../../ValenceProvider";
import { PrimitiveButton } from "../../buttons";
import { Loader, Text } from "../../display";
import { motion } from "framer-motion";
import { Flex } from "../../layout";
import { css } from "@emotion/react";
import { useResponsiveProps } from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";
export const Switch = forwardRef(function Switch(props, ref) {
    const theme = useValence();
    const { getBgHex, getHex } = useColors();
    // Defaults
    const _a = useResponsiveProps(props), { value, setValue, label, size = theme.defaults.size, radius = "xl", variant = theme.defaults.variant, grow = false, disabled = false, readOnly = false, loading = false, onFocus, onBlur, buttonProps, labelProps, color = theme.primaryColor, backgroundColor = color, padding = 4, margin = 0, width, height, style } = _a, rest = __rest(_a, ["value", "setValue", "label", "size", "radius", "variant", "grow", "disabled", "readOnly", "loading", "onFocus", "onBlur", "buttonProps", "labelProps", "color", "backgroundColor", "padding", "margin", "width", "height", "style"]);
    // Handlers
    function handleClick() {
        if (disabled || readOnly || loading)
            return;
        setValue(!value);
    }
    // Styles
    const SwitchStyle = css(Object.assign({ display: "flex", flexDirection: "row", boxSizing: "border-box", flexGrow: grow ? 1 : "unset", width: width !== null && width !== void 0 ? width : theme.sizeClasses.height[size] * 1.75, height: height !== null && height !== void 0 ? height : theme.sizeClasses.height[size] * 0.75, borderRadius: `${theme.sizeClasses.radius[radius]}px`, padding: padding, margin: margin, opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed" : "pointer", transition: `background-color ${theme.defaults.transitionDuration} linear 0s`, backgroundColor: value ?
            getBgHex(backgroundColor, variant, false) :
            getBgHex("black", variant, false), outline: variant === "subtle" ?
            value ?
                `1px solid ${getHex(backgroundColor, "medium")}` :
                `1px solid ${getHex("black", "medium")}`
            : "none", border: "none", "&:hover": {
            backgroundColor: value ?
                getBgHex(backgroundColor, variant, true) :
                getBgHex("black", variant, true),
        } }, style));
    const HandleStyle = css({
        width: "50%",
        height: "100%",
        borderRadius: `${theme.sizeClasses.radius[radius]}px`,
        backgroundColor: value ?
            getBgHex(variant === "filled" ? "white" : color, "filled", false) :
            getBgHex(variant === "filled" ? "white" : "black", "filled", false),
        outline: "none",
        border: "none",
    });
    return (_jsxs(PrimitiveButton, Object.assign({ id: rest.id, onClick: handleClick, padding: 0, height: "fit-content", color: color, backgroundColor: "#00000000", variant: "subtle", size: size, grow: grow, style: {
            gap: theme.sizeClasses.padding[size] / 2,
        }, onFocus: onFocus, onBlur: onBlur, ref: ref }, buttonProps, { children: [label &&
                _jsx(Text, Object.assign({ size: size }, labelProps, { tabIndex: -1, children: label })), _jsx("div", Object.assign({ tabIndex: 0, css: SwitchStyle }, rest, { children: loading ?
                    _jsx(Flex, { width: "100%", height: "100%", align: "center", justify: "center", children: _jsx(Loader, { size: size, color: value ? "white" : "black" }) })
                    :
                        _jsx(motion.div, { css: HandleStyle, initial: { x: value ? "0%" : "100%" }, animate: { x: value ? "100%" : "0%" }, transition: { ease: "backOut" } }) }))] })));
});
