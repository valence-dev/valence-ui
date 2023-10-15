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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const framer_motion_1 = require("framer-motion");
const styled_components_1 = __importDefault(require("styled-components"));
const layout_1 = require("../../layout");
const Text_1 = require("../Text");
const buttons_1 = require("../../buttons");
const utils_1 = require("@valence-ui/utils");
const ValenceProvider_1 = require("../../../ValenceProvider");
function Alert(props) {
    const theme = (0, react_1.useContext)(ValenceProvider_1.ValenceContext);
    const { alert, show, variant = "filled", size = theme.defaultSize, radius = theme.defaultRadius, shadow = false, color = theme.primaryColor, backgroundColor = color, width = "100%", height = "auto", padding = theme.sizeClasses.padding[size], component = "div", style } = props, rest = __rest(props, ["alert", "show", "variant", "size", "radius", "shadow", "color", "backgroundColor", "width", "height", "padding", "component", "style"]);
    const StyledAlert = styled_components_1.default.button(Object.assign({ display: "flex", flexDirection: "row", alignItems: "center", gap: padding, boxSizing: "border-box", width: width, height: height, padding: padding, borderRadius: theme.sizeClasses.radius[radius], border: "none", textDecoration: "none", backgroundColor: (0, buttons_1.getBackgroundColor)(backgroundColor, variant, false, theme), color: (0, buttons_1.getTextColor)(color, variant, theme), boxShadow: shadow ? theme.defaultShadow : "none" }, style));
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { children: show &&
            (0, jsx_runtime_1.jsxs)(StyledAlert, Object.assign({ as: utils_1.PolymorphicButton, onMouseDown: e => e.preventDefault(), component: component, initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.9 }, transition: { ease: "backOut" } }, rest, { children: [alert.icon, (0, jsx_runtime_1.jsxs)(layout_1.Flex, { direction: "column", align: "stretch", gap: padding / 2, children: [(0, jsx_runtime_1.jsx)(Text_1.Text, { bold: true, style: { flexGrow: 1 }, color: (0, buttons_1.getTextColor)(color, variant, theme), size: size, children: alert.title }), (0, jsx_runtime_1.jsx)(Text_1.Text, { fontSize: theme.sizeClasses.fontSize[size] - 2, color: (0, buttons_1.getTextColor)(color, variant, theme), children: alert.message })] })] })) }));
}
exports.Alert = Alert;
