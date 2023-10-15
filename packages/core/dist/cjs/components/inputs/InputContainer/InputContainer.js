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
exports.InputContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const __1 = require("../../..");
const styled_components_1 = __importDefault(require("styled-components"));
const buttons_1 = require("../../buttons");
const display_1 = require("../../display");
function InputContainer(props) {
    const theme = (0, react_1.useContext)(__1.ValenceContext);
    // Defaults
    const { children, icon, size = theme.defaultSize, radius = theme.defaultRadius, grow, disabled = false, required = false, loading = false, color = "black", backgroundColor = color, style } = props, rest = __rest(props, ["children", "icon", "size", "radius", "grow", "disabled", "required", "loading", "color", "backgroundColor", "style"]);
    // Styles
    const StyledInputContainer = styled_components_1.default.div(Object.assign({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", boxSizing: "border-box", flexGrow: grow ? 1 : "unset", width: "100%", height: theme.sizeClasses.height[size], borderRadius: `${theme.sizeClasses.radius[radius]}px`, padding: `0px ${theme.sizeClasses.padding[size]}px`, paddingLeft: props.icon
            ? theme.sizeClasses.padding[size] / 2
            : undefined, gap: theme.sizeClasses.padding[size] / 2, opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed" : "text", transition: `background-color ${theme.defaultTransitionDuration} linear 0s`, backgroundColor: (0, buttons_1.getBackgroundColor)(backgroundColor, "light", false, theme), color: (0, buttons_1.getTextColor)(color, "light", theme), outline: "none", border: "none", textDecoration: "none", "&:hover": {
            backgroundColor: !disabled ? (0, buttons_1.getBackgroundColor)(backgroundColor, "light", true, theme) : undefined,
        }, "&:focus-within": {
            outline: `1px solid ${(0, buttons_1.getTextColor)(color, "light", theme)}`,
        } }, style));
    const StyledIconContainer = styled_components_1.default.div({
        height: "100%",
        aspectRatio: "1/1",
        opacity: 0.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "not-allowed" : "text",
    });
    const StyledRequireIndicator = styled_components_1.default.div({
        width: 3,
        height: "calc(100% - 10px)",
        borderRadius: 3,
        backgroundColor: (0, buttons_1.getTextColor)(color === "black" ? "red" : color, "light", theme),
        cursor: disabled ? "not-allowed" : "text",
    });
    return ((0, jsx_runtime_1.jsxs)(StyledInputContainer, Object.assign({}, rest, { children: [required && (0, jsx_runtime_1.jsx)(StyledRequireIndicator, {}), (icon || loading) &&
                (0, jsx_runtime_1.jsx)(StyledIconContainer, { children: loading ? (0, jsx_runtime_1.jsx)(display_1.Loader, {}) : icon }), children] })));
}
exports.InputContainer = InputContainer;
