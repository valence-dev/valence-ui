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
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { forwardRef } from "react";
import { useReducedMotion } from "framer-motion";
import { getMotionBehaviour } from "../Helpers";
import { Loader } from "../../display/Loader";
import { PolymorphicButton } from "@valence-ui/utils";
import { useValence } from "../../../ValenceProvider";
import { css } from "@emotion/react";
import { useResponsiveProps } from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";
export const PrimitiveButton = forwardRef(function PrimitiveButton(props, ref) {
    const theme = useValence();
    const colors = useColors();
    // Hooks & states
    const reducedMotion = useReducedMotion();
    // Defaults
    const _a = useResponsiveProps(props), { size = theme.defaults.size, radius = theme.defaults.radius, variant = theme.defaults.variant, square = false, shadow = false, grow = false, disabled = false, loading = false, motion = { onHover: variant === "filled" ? "raise" : undefined, onTap: "bounce" }, color = theme.primaryColor, backgroundColor = color, padding = square ? 0 : `0px ${theme.sizeClasses.padding[size]}px`, margin = 0, height = theme.sizeClasses.height[size], width = square ? height : "fit-content", style, children } = _a, rest = __rest(_a, ["size", "radius", "variant", "square", "shadow", "grow", "disabled", "loading", "motion", "color", "backgroundColor", "padding", "margin", "height", "width", "style", "children"]);
    const motionBehaviour = getMotionBehaviour(motion, reducedMotion);
    const ButtonStyle = css(Object.assign({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flexGrow: grow ? 1 : 0, width: width, height: height, minHeight: height, padding: padding, margin: margin, aspectRatio: square ? 1 : undefined, borderRadius: theme.sizeClasses.radius[radius], opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed"
            : loading ? "wait"
                : "pointer", boxShadow: shadow ? theme.defaults.shadow : "none", transitionProperty: "background-color, border", transitionDuration: theme.defaults.transitionDuration, transitionTimingFunction: "linear", backgroundColor: colors.getBgHex(backgroundColor, variant, false), color: colors.getFgHex(color, variant), outline: "none", border: colors.getBorderHex(color, variant), textDecoration: "none", "&:hover": {
            backgroundColor: `${colors.getBgHex(backgroundColor, variant, true)}`,
        }, "&:focus": {
            outline: "none",
            border: colors.getBorderHex(color, variant, true),
        } }, style));
    return (_jsx(PolymorphicButton, Object.assign({ css: ButtonStyle, onMouseDown: (event) => event.preventDefault(), whileHover: motionBehaviour.whileHover, whileTap: motionBehaviour.whileTap, ref: ref }, rest, { children: loading ?
            _jsx(Loader, { color: colors.getFgHex(color, variant) })
            :
                children })));
});
