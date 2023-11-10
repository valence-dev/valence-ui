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
exports.StyledFlex = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const __1 = require("../../..");
const buttons_1 = require("../../buttons");
const Flex_1 = require("./Flex");
const utils_1 = require("@valence-ui/utils");
/** A styled version of the `Flex` component that offers many props in line with the button styling system */
exports.StyledFlex = (0, react_1.forwardRef)(function StyledFlex(props, ref) {
    const theme = (0, react_1.useContext)(__1.ValenceContext);
    const breakpoint = (0, __1.useBreakpoint)();
    // Defaults
    const { variant = theme.defaultVariant, size = { default: theme.defaultSize }, radius = { default: theme.defaultRadius }, color = { default: theme.primaryColor }, backgroundColor = color, style, children } = props, rest = __rest(props, ["variant", "size", "radius", "color", "backgroundColor", "style", "children"]);
    // Styles
    const styles = Object.assign({ backgroundColor: (0, buttons_1.getBackgroundColor)((0, utils_1.getReactiveProp)(backgroundColor, breakpoint), (0, utils_1.getReactiveProp)(variant, breakpoint), false, theme), color: (0, buttons_1.getTextColor)((0, utils_1.getReactiveProp)(color, breakpoint), (0, utils_1.getReactiveProp)(variant, breakpoint), theme), borderRadius: theme.sizeClasses.radius[(0, utils_1.getReactiveProp)(radius, breakpoint)], boxShadow: (0, utils_1.getReactiveProp)(props.shadow, breakpoint)
            ? theme.defaultShadow : undefined }, (0, utils_1.getReactiveProp)(style, breakpoint));
    return ((0, jsx_runtime_1.jsx)(Flex_1.Flex, Object.assign({ style: styles, padding: theme.sizeClasses.padding[(0, utils_1.getReactiveProp)(size, breakpoint)], ref: ref }, rest, { children: children })));
});
