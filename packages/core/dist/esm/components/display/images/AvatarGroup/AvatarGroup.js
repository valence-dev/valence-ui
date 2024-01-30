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
import React, { forwardRef } from "react";
import { Flex } from "../../../layout";
import { useValence } from "../../../../ValenceProvider";
export const AvatarGroup = forwardRef(function AvatarGroup(props, ref) {
    const theme = useValence();
    const { size = theme.defaults.size, gap = 5 - theme.sizeClasses.padding[size], children } = props, rest = __rest(props, ["size", "gap", "children"]);
    return (_jsx(Flex, { gap: 0, ref: ref, children: React.Children.toArray(children).map((child, i) => React.cloneElement(child, Object.assign({ spanStyle: {
                zIndex: React.Children.count(children) - i,
            }, style: {
                marginLeft: i === 0 ? undefined : gap,
            }, size: size }, rest))) }));
});
