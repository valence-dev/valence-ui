"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonWithIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const __1 = require("../../..");
const PrimitiveButton_1 = require("../PrimitiveButton");
const display_1 = require("../../display");
const Helpers_1 = require("../Helpers");
function ButtonWithIcon(props) {
    const theme = (0, react_1.useContext)(__1.ValenceContext);
    // Defaults
    const { icon, iconPosition = "left", size = theme.defaultSize, variant = theme.defaultVariant, color = theme.primaryColor, style, textProps } = props, rest = __rest(props, ["icon", "iconPosition", "size", "variant", "color", "style", "textProps"]);
    // Styles
    const styles = Object.assign({ flexDirection: iconPosition === "left" ? "row" : "row-reverse", justifyContent: "flex-start", paddingLeft: iconPosition === "left" ? 10 : undefined, paddingRight: iconPosition === "right" ? 10 : undefined, gap: 8 }, style);
    return ((0, jsx_runtime_1.jsxs)(PrimitiveButton_1.PrimitiveButton, Object.assign({ size: size, variant: variant, color: color, style: styles }, rest, { children: [icon, (0, jsx_runtime_1.jsx)(display_1.Text, Object.assign({ size: size, color: (0, Helpers_1.getTextColor)(color, variant, theme) }, textProps, { children: props.children }))] })));
}
exports.ButtonWithIcon = ButtonWithIcon;
