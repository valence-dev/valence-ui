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
import { AnimatePresence, useReducedMotion } from "framer-motion";
import { Flex } from "../../layout";
import { Text } from "../Text";
import { getBackgroundColor, getMotionBehaviour, getTextColor } from "../../buttons";
import { CLICKABLE_ELEMENTS, PolymorphicButton } from "@valence-ui/utils";
import { useValence } from "../../../ValenceProvider";
import { css } from "@emotion/react";
import { Icon } from "../Icon";
export const Alert = forwardRef(function Alert(props, ref) {
    const theme = useValence();
    // Hooks & states
    const reducedMotion = useReducedMotion();
    // Defaults
    const { alert, show, variant = "filled", size = theme.defaultSize, radius = theme.defaultRadius, shadow = false, motion, color = theme.primaryColor, backgroundColor = color, padding = theme.sizeClasses.padding[size], margin = 0, width = "100%", height = "auto", component = "div", style } = props, rest = __rest(props, ["alert", "show", "variant", "size", "radius", "shadow", "motion", "color", "backgroundColor", "padding", "margin", "width", "height", "component", "style"]);
    const motionBehaviour = getMotionBehaviour(motion, reducedMotion);
    const AlertStyle = css(Object.assign({ display: "flex", flexDirection: "row", alignItems: "center", gap: padding, boxSizing: "border-box", width: width, height: height, padding: padding, borderRadius: theme.sizeClasses.radius[radius], border: "none", outline: variant === "subtle"
            ? `1px solid ${theme.getColorHex(backgroundColor, "medium")}`
            : "none", textDecoration: "none", backgroundColor: getBackgroundColor(backgroundColor, variant, false, theme), color: getTextColor(color, variant, theme), boxShadow: shadow ? theme.defaultShadow : "none", cursor: CLICKABLE_ELEMENTS.includes(component) ? "pointer" : "default" }, style));
    return (_jsx(AnimatePresence, { children: show &&
            _jsxs(PolymorphicButton, Object.assign({ css: AlertStyle, onMouseDown: (e) => e.preventDefault(), component: component, initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.9 }, transition: { ease: "backOut" }, whileHover: motionBehaviour.whileHover, whileTap: motionBehaviour.whileTap, ref: ref }, rest, { children: [_jsx(Icon, { size: theme.getSize("iconSize", size), children: alert.icon }), _jsxs(Flex, { direction: "column", align: "flex-start", gap: padding / 2, children: [_jsx(Text, { bold: true, style: { flexGrow: 1 }, color: getTextColor(color, variant, theme), size: size, children: alert.title }), alert.message &&
                                _jsx(Text, { fontSize: theme.sizeClasses.fontSize[size] - 2, color: getTextColor(color, variant, theme), children: alert.message })] })] })) }));
});
