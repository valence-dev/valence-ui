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
import { useValence } from "../../../ValenceProvider";
import { useResponsiveProps } from "../../../responsive";
import { Icon } from "../../display";
import { Tooltip } from "../../overlays";
import { PrimitiveButton } from "../PrimitiveButton";
import { forwardRef } from "react";
export const IconButton = forwardRef(function IconButton(props, ref) {
    const _a = useResponsiveProps(props), { tooltip, tooltipProps, tooltipContentProps, color = "primary", size, square = true, children } = _a, rest = __rest(_a, ["tooltip", "tooltipProps", "tooltipContentProps", "color", "size", "square", "children"]);
    return (tooltip ?
        _jsxs(Tooltip, Object.assign({ placement: "bottom" }, tooltipProps, { children: [_jsx(Tooltip.Trigger, { children: _jsx(Button, Object.assign({ color: color, size: size, square: square }, rest, { ref: ref, children: children })) }), _jsx(Tooltip.Content, Object.assign({ backgroundColor: color, zIndex: 999 }, tooltipContentProps, { children: tooltip }))] }))
        :
            _jsx(Button, Object.assign({ color: color, size: size, square: square }, rest, { ref: ref, children: children })));
});
const Button = forwardRef(function Button(props, ref) {
    const { size, children } = props, rest = __rest(props, ["size", "children"]);
    const theme = useValence();
    return (_jsx(PrimitiveButton, Object.assign({ size: size, ref: ref }, rest, { children: _jsx(Icon, { size: theme.getSize("iconSize", size), children: children }) })));
});
