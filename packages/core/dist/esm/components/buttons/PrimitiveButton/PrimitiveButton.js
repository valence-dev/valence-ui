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
import { getBackgroundColor, getMotionBehaviour, getTextColor } from "../Helpers";
import { Loader } from "../../display/Loader";
import { PolymorphicButton } from "@valence-ui/utils";
import { useValenceContext } from "../../../ValenceProvider";
import { css } from "@emotion/react";
export const PrimitiveButton = forwardRef(function PrimitiveButton(props, ref) {
    const theme = useValenceContext();
    // Hooks & states
    const reducedMotion = useReducedMotion();
    // Defaults
    const { variant = theme.defaultVariant, size = theme.defaultSize, radius = theme.defaultRadius, square = false, shadow = false, grow = false, disabled = false, loading = false, motion = { onHover: variant === "filled" ? "raise" : undefined, onTap: "bounce" }, color = theme.primaryColor, backgroundColor = color, padding = square ? 0 : `0px ${theme.sizeClasses.padding[size]}px`, margin = 0, height = `${theme.sizeClasses.height[size]}px`, width = square ? height : "fit-content", style, children } = props, rest = __rest(props, ["variant", "size", "radius", "square", "shadow", "grow", "disabled", "loading", "motion", "color", "backgroundColor", "padding", "margin", "height", "width", "style", "children"]);
    const motionBehaviour = getMotionBehaviour(motion, reducedMotion);
    const ButtonStyle = css(Object.assign({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flexGrow: grow ? 1 : 0, width: width, height: height, minHeight: height, padding: padding, margin: margin, aspectRatio: square ? 1 : undefined, borderRadius: theme.sizeClasses.radius[radius], opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed"
            : loading ? "wait"
                : "pointer", boxShadow: shadow ? theme.defaultShadow : "none", transition: `background-color ${theme.defaultTransitionDuration} linear 0s`, backgroundColor: getBackgroundColor(backgroundColor, variant, false, theme), color: getTextColor(color, variant, theme), outline: "none", border: "none", textDecoration: "none", "&:hover": {
            backgroundColor: `${getBackgroundColor(backgroundColor, variant, true, theme)}`,
        }, "&:focus": {
            outline: `1px solid ${getTextColor(color, "light", theme)}`,
        } }, style));
    return (_jsx(PolymorphicButton, Object.assign({ css: ButtonStyle, onMouseDown: (event) => event.preventDefault(), whileHover: motionBehaviour.whileHover, whileTap: motionBehaviour.whileTap, ref: ref }, rest, { children: loading ? _jsx(Loader, { color: getTextColor(color, variant, theme) }) :
            children })));
});
