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
exports.Pill = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const buttons_1 = require("../../buttons");
const react_1 = require("react");
const ValenceProvider_1 = require("../../../ValenceProvider");
const icons_react_1 = require("@tabler/icons-react");
const hooks_1 = require("../../../hooks");
const Text_1 = require("../Text");
const SIZES = {
    xs: { paddingHorizontal: 8, paddingVertical: 2 },
    sm: { paddingHorizontal: 10, paddingVertical: 3 },
    md: { paddingHorizontal: 10, paddingVertical: 3 },
    lg: { paddingHorizontal: 14, paddingVertical: 4 },
    xl: { paddingHorizontal: 14, paddingVertical: 4 },
};
exports.Pill = (0, react_1.forwardRef)(function Pill(props, ref) {
    const theme = (0, react_1.useContext)(ValenceProvider_1.ValenceContext);
    const defaultIconProps = (0, hooks_1.useDefaultIconProps)();
    // Defaults
    const { variant = theme.defaultVariant, size = theme.defaultSize, radius = "xl", withRemoveButton = false, removeButtonIcon = (0, jsx_runtime_1.jsx)(icons_react_1.IconX, Object.assign({}, defaultIconProps.get())), removeButtonProps, onRemove, textProps, color = "black", backgroundColor = color, padding = SIZES[size].paddingVertical + "px " + SIZES[size].paddingHorizontal + "px", margin, width = "fit-content", height, style, children } = props, rest = __rest(props, ["variant", "size", "radius", "withRemoveButton", "removeButtonIcon", "removeButtonProps", "onRemove", "textProps", "color", "backgroundColor", "padding", "margin", "width", "height", "style", "children"]);
    // Styles
    const PillStyle = Object.assign({ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "stretch", backgroundColor: (0, buttons_1.getBackgroundColor)(backgroundColor, variant, false, theme), color: (0, buttons_1.getTextColor)(color, variant, theme), borderRadius: theme.sizeClasses.radius[radius], outline: variant === "subtle" ?
            `1px solid ${theme.getColorHex(backgroundColor, "medium")}`
            : "none", padding: padding, paddingRight: withRemoveButton ? SIZES[size].paddingVertical : undefined, gap: SIZES[size].paddingVertical, margin: margin, width: width, height: height, cursor: withRemoveButton ? "pointer" : undefined }, style);
    // Events
    const handleClick = (e) => {
        var _a;
        e.stopPropagation();
        if (!withRemoveButton)
            return;
        onRemove === null || onRemove === void 0 ? void 0 : onRemove();
        (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ onClick: handleClick, style: PillStyle, ref: ref }, rest, { children: [(0, jsx_runtime_1.jsx)(Text_1.Text, { size: size, color: (0, buttons_1.getTextColor)(color, variant, theme), children: children }), withRemoveButton && ((0, jsx_runtime_1.jsx)(buttons_1.IconButton, Object.assign({ size: size, radius: radius, color: (0, buttons_1.getTextColor)(color, variant, theme), variant: "subtle", onClick: handleClick, height: 16 }, removeButtonProps, { children: removeButtonIcon })))] })));
});
