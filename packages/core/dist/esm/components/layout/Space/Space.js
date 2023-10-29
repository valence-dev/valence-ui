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
import { css } from "@emotion/react";
/** A basic, unstyled layout assistant that creates blank space between any two objects. */
export function Space(props) {
    // Defaults
    const { height, width, grow, style } = props, rest = __rest(props, ["height", "width", "grow", "style"]);
    // Styles
    const SpaceStyle = css(Object.assign({ width: width, height: height, flexGrow: grow ? 1 : undefined }, style));
    return (_jsx("span", Object.assign({ css: SpaceStyle }, rest)));
}
