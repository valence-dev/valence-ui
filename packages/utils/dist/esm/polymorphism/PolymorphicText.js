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
import { forwardRef } from "react";
import { Link } from "react-router-dom";
export const PolymorphicText = forwardRef(function Input(props, ref) {
    const { component = "p", children } = props, rest = __rest(props, ["component", "children"]);
    let Component = component;
    if (component === "link")
        Component = Link;
    return (_jsx(Component, Object.assign({ ref: ref }, rest, { children: children })));
});
