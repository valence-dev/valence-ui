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
import { forwardRef, useContext } from "react";
import { Text } from "./Text";
import { ValenceContext } from "../../..";
export const Title = forwardRef(function Title(props, ref) {
    const theme = useContext(ValenceContext);
    const { order = 1, component = `h${order !== null && order !== void 0 ? order : 1}`, family = theme.getFont("heading") } = props, rest = __rest(props, ["order", "component", "family"]);
    return (_jsx(Text, Object.assign({ component: component, family: family, ref: ref }, theme.titles[order], rest, { children: props.children })));
});
