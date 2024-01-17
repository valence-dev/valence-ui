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
import { Flex } from "./Flex";
export const FlexCenter = forwardRef(function FlexCentre(props, ref) {
    const { center = true, width = "100%", height = "100%", innerWidth = "50%", innerProps, children } = props, rest = __rest(props, ["center", "width", "height", "innerWidth", "innerProps", "children"]);
    return (_jsx(Flex, Object.assign({ center: center, width: width, height: height, ref: ref }, rest, { children: _jsx(Flex, Object.assign({ width: innerWidth, height: "fit-content" }, innerProps, { children: children })) })));
});
