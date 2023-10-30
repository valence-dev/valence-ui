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
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { PolymorphicButton } from "@valence-ui/utils";
import { css } from "@emotion/react";
export const UnstyledButton = function UnstyledButton(props) {
    // Props
    const { id, style, children, component = "button" } = props, rest = __rest(props, ["id", "style", "children", "component"]);
    // Styles
    const UnstyledButtonStyle = css(Object.assign({ outline: "none", border: "none", textDecoration: "none", background: "none" }, style));
    return (_jsx(PolymorphicButton, Object.assign({ id: id, css: UnstyledButtonStyle, component: component }, rest, { children: children })));
};
