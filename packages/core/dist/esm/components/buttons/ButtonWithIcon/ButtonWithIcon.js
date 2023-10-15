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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { ValenceContext } from "../../..";
import { PrimitiveButton } from "../PrimitiveButton";
import { Text } from "../../display";
import { getTextColor } from "../Helpers";
export function ButtonWithIcon(props) {
    const theme = useContext(ValenceContext);
    // Defaults
    const { icon, iconPosition = "left", size = theme.defaultSize, variant = theme.defaultVariant, color = theme.primaryColor, style, textProps } = props, rest = __rest(props, ["icon", "iconPosition", "size", "variant", "color", "style", "textProps"]);
    // Styles
    const styles = Object.assign({ flexDirection: iconPosition === "left" ? "row" : "row-reverse", justifyContent: "flex-start", paddingLeft: iconPosition === "left" ? 6 : undefined, paddingRight: iconPosition === "right" ? 6 : undefined, gap: 8 }, style);
    return (_jsxs(PrimitiveButton, Object.assign({ size: size, variant: variant, color: color, style: styles }, rest, { children: [icon, _jsx(Text, Object.assign({ size: size, color: getTextColor(color, variant, theme) }, textProps, { children: props.children }))] })));
}
