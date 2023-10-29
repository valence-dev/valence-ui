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
import { useContext } from "react";
import { ValenceContext } from "../../../ValenceProvider";
import { PrimitiveButton, getBackgroundColor } from "../../buttons";
import { Loader, Text } from "../../display";
import { motion } from "framer-motion";
import { Flex } from "../../layout";
import { css } from "@emotion/react";
export function SwitchInput(props) {
    const theme = useContext(ValenceContext);
    // Defaults
    const { checked = true, setChecked, label, size = theme.defaultSize, radius = "xl", grow = false, disabled = false, readOnly = false, loading = false, onFocus, onBlur, buttonProps, labelProps, color = theme.primaryColor, backgroundColor = color, padding = 4, margin = 0, width, height, style } = props, rest = __rest(props, ["checked", "setChecked", "label", "size", "radius", "grow", "disabled", "readOnly", "loading", "onFocus", "onBlur", "buttonProps", "labelProps", "color", "backgroundColor", "padding", "margin", "width", "height", "style"]);
    // Handlers
    function handleClick() {
        if (disabled || readOnly || loading)
            return;
        setChecked(!checked);
    }
    // Styles
    const SwitchStyle = css(Object.assign({ display: "flex", flexDirection: "row", boxSizing: "border-box", flexGrow: grow ? 1 : "unset", width: width !== null && width !== void 0 ? width : theme.sizeClasses.height[size] * 1.75, height: height !== null && height !== void 0 ? height : theme.sizeClasses.height[size] * 0.75, borderRadius: `${theme.sizeClasses.radius[radius]}px`, padding: padding, margin: margin, opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed" : "pointer", transition: `background-color ${theme.defaultTransitionDuration} linear 0s`, backgroundColor: checked ?
            getBackgroundColor(backgroundColor, "filled", false, theme) :
            getBackgroundColor("black", "light", false, theme), outline: "none", border: "none", "&:hover": {
            backgroundColor: checked ?
                getBackgroundColor(backgroundColor, "filled", true, theme) :
                getBackgroundColor("black", "light", true, theme),
        } }, style));
    const HandleStyle = css({
        width: "50%",
        height: "100%",
        borderRadius: `${theme.sizeClasses.radius[radius]}px`,
        backgroundColor: checked ?
            getBackgroundColor("white", "filled", false, theme) :
            getBackgroundColor("black", "filled", false, theme),
        outline: "none",
        border: "none",
    });
    return (_jsxs(PrimitiveButton, Object.assign({ id: rest.id, onClick: handleClick, padding: 0, height: "fit-content", color: color, backgroundColor: "#00000000", variant: "subtle", size: size, grow: grow, style: {
            gap: theme.sizeClasses.padding[size] / 2,
        } }, buttonProps, { children: [_jsx(Text, Object.assign({ size: size }, labelProps, { children: label })), _jsx("div", Object.assign({ tabIndex: 0, css: SwitchStyle }, rest, { children: loading ?
                    _jsx(Flex, { width: "100%", height: "100%", align: "center", justify: "center", children: _jsx(Loader, { size: size, color: checked ? "white" : "black" }) })
                    :
                        _jsx(motion.div, { css: HandleStyle, initial: { x: checked ? "0%" : "100%" }, animate: { x: checked ? "100%" : "0%" }, transition: { ease: "backOut" } }) }))] })));
}
