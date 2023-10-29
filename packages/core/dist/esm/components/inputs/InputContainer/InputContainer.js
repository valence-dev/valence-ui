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
import { useContext } from "react";
import { ValenceContext } from "../../..";
import { getBackgroundColor, getTextColor } from "../../buttons";
import { Loader } from "../../display";
import { css } from "@emotion/react";
export function InputContainer(props) {
    const theme = useContext(ValenceContext);
    // Defaults
    const { children, icon, size = theme.defaultSize, radius = theme.defaultRadius, grow, disabled = false, required = false, loading = false, color = "black", backgroundColor = color, style } = props, rest = __rest(props, ["children", "icon", "size", "radius", "grow", "disabled", "required", "loading", "color", "backgroundColor", "style"]);
    // Styles
    const ContainerStyle = css(Object.assign({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", boxSizing: "border-box", flexGrow: grow ? 1 : "unset", width: "100%", height: theme.sizeClasses.height[size], borderRadius: `${theme.sizeClasses.radius[radius]}px`, padding: `0px ${theme.sizeClasses.padding[size]}px`, paddingLeft: props.icon
            ? theme.sizeClasses.padding[size] / 2
            : undefined, gap: theme.sizeClasses.padding[size] / 2, opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed" : "text", transition: `background-color ${theme.defaultTransitionDuration} linear 0s`, backgroundColor: getBackgroundColor(backgroundColor, "light", false, theme), color: getTextColor(color, "light", theme), outline: "none", border: "none", textDecoration: "none", "&:hover": {
            backgroundColor: !disabled ? getBackgroundColor(backgroundColor, "light", true, theme) : undefined,
        }, "&:focus-within": {
            outline: `1px solid ${getTextColor(color, "light", theme)}`,
        } }, style));
    const IconStyle = css({
        height: "100%",
        aspectRatio: "1/1",
        opacity: 0.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "not-allowed" : "text",
    });
    const RequireIndicatorStyle = css({
        width: 3,
        height: "calc(100% - 10px)",
        borderRadius: 3,
        backgroundColor: getTextColor(color === "black" ? "red" : color, "light", theme),
        cursor: disabled ? "not-allowed" : "text",
    });
    return (_jsxs("div", Object.assign({ css: ContainerStyle }, rest, { children: [required && _jsx("div", { css: RequireIndicatorStyle }), (icon || loading) &&
                _jsx("div", { css: IconStyle, children: loading ? _jsx(Loader, {}) : icon }), children] })));
}
