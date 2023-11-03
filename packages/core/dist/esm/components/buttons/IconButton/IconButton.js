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
import { PrimitiveButton } from "../PrimitiveButton";
import { forwardRef } from "react";
export const IconButton = forwardRef(function IconButton(props, ref) {
    const { square = true, children } = props, rest = __rest(props, ["square", "children"]);
    return (_jsx(PrimitiveButton, Object.assign({ square: square }, rest, { children: children })));
});
