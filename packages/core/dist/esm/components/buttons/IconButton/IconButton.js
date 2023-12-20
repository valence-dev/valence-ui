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
import { jsx as _jsx } from "react/jsx-runtime";
import { useValence } from "../../../ValenceProvider";
import { Icon } from "../../display";
import { PrimitiveButton } from "../PrimitiveButton";
import { forwardRef } from "react";
export const IconButton = forwardRef(function IconButton(props, ref) {
    const { size, square = true, children } = props, rest = __rest(props, ["size", "square", "children"]);
    const theme = useValence();
    return (_jsx(PrimitiveButton, Object.assign({ size: size, square: square, ref: ref }, rest, { children: _jsx(Icon, { size: theme.getSize("iconSize", size), children: children }) })));
});
