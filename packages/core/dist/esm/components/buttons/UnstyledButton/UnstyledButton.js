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
import { forwardRef } from "react";
export const UnstyledButton = forwardRef(function UnstyledButton(props, ref) {
    // Defaults
    const { style, children } = props, rest = __rest(props, ["style", "children"]);
    // Styles
    const UnstyledButtonStyle = css(Object.assign({ outline: "none", border: "none", textDecoration: "none", background: "none", padding: 0, margin: 0 }, style));
    return (_jsx(PolymorphicButton, Object.assign({ css: UnstyledButtonStyle, ref: ref }, rest, { children: children })));
});
