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
import { css } from "@emotion/react";
import { PrimitiveButton, Text, ValenceContext, getTextColor } from "@valence-ui/core";
import { useContext } from "react";
export function GridButton(props) {
    const theme = useContext(ValenceContext);
    // Defaults
    const { icon, iconPosition = "top", size = theme.defaultSize, variant = theme.defaultVariant, color = theme.primaryColor, width = theme.sizeClasses.height[size] * 2.5, height = width, square = true, style, textProps } = props, rest = __rest(props, ["icon", "iconPosition", "size", "variant", "color", "width", "height", "square", "style", "textProps"]);
    // Styles
    const styles = Object.assign({ flexDirection: iconPosition === "top" ? "column" : "column-reverse", justifyContent: "flex-start", padding: theme.sizeClasses.padding[size], gap: theme.sizeClasses.padding[size] / 2 }, style);
    const IconContainerStyle = css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    });
    return (_jsxs(PrimitiveButton, Object.assign({ size: size, variant: variant, color: color, height: height, width: width, square: square, style: styles }, rest, { children: [_jsx("div", { css: IconContainerStyle, children: icon }), _jsx(Text, Object.assign({ fontSize: theme.sizeClasses.fontSize[size] * 0.8, color: getTextColor(color, variant, theme) }, textProps, { children: props.children }))] })));
}
