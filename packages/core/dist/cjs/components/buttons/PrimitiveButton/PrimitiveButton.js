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
exports.PrimitiveButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const framer_motion_1 = require("framer-motion");
const styled_components_1 = __importDefault(require("styled-components"));
const Helpers_1 = require("../Helpers");
const Loader_1 = require("../../display/Loader");
const utils_1 = require("@valence-ui/utils");
const ValenceProvider_1 = require("../../../ValenceProvider");
function PrimitiveButton(props) {
    const theme = (0, react_1.useContext)(ValenceProvider_1.ValenceContext);
    // Hooks & states
    const reducedMotion = (0, framer_motion_1.useReducedMotion)();
    // Defaults
    const { variant = theme.defaultVariant, size = theme.defaultSize, radius = theme.defaultRadius, square = false, aspectRatio = square ? "1 / 1" : undefined, shadow = false, grow = false, disabled = false, loading = false, motion = { onHover: variant === "filled" ? "raise" : undefined, onTap: "bounce" }, height = `${theme.sizeClasses.height[size]}px`, width = square ? height : "fit-content", padding = square ? 0 : `0px ${theme.sizeClasses.padding[size]}px`, margin = "0px", color = theme.primaryColor, backgroundColor = color, component, style, children } = props, rest = __rest(props, ["variant", "size", "radius", "square", "aspectRatio", "shadow", "grow", "disabled", "loading", "motion", "height", "width", "padding", "margin", "color", "backgroundColor", "component", "style", "children"]);
    const motionBehaviour = (0, Helpers_1.getMotionBehaviour)(motion, reducedMotion);
    const StyledButton = styled_components_1.default.button(Object.assign({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flexGrow: grow ? 1 : 0, width: width, height: height, minHeight: height, padding: padding, margin: margin, aspectRatio: aspectRatio, borderRadius: theme.sizeClasses.radius[radius], opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed"
            : loading ? "wait"
                : "pointer", boxShadow: shadow ? theme.defaultShadow : "none", transition: `background-color ${theme.defaultTransitionDuration} linear 0s`, backgroundColor: (0, Helpers_1.getBackgroundColor)(backgroundColor, variant, false, theme), color: (0, Helpers_1.getTextColor)(color, variant, theme), outline: "none", border: "none", textDecoration: "none", "&:hover": {
            backgroundColor: `${(0, Helpers_1.getBackgroundColor)(backgroundColor, variant, true, theme)}`,
        }, "&:focus": {
            outline: `1px solid ${(0, Helpers_1.getTextColor)(color, "light", theme)}`,
        } }, style));
    return ((0, jsx_runtime_1.jsx)(StyledButton, Object.assign({ as: utils_1.PolymorphicButton, component: component, whileHover: motionBehaviour.whileHover, whileTap: motionBehaviour.whileTap, onMouseDown: (event) => event.preventDefault() }, rest, { children: loading ? (0, jsx_runtime_1.jsx)(Loader_1.Loader, { color: (0, Helpers_1.getTextColor)(color, variant, theme) }) :
            children })));
}
exports.PrimitiveButton = PrimitiveButton;
