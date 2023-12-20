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
import { forwardRef } from "react";
import { getReactiveProp } from "@valence-ui/utils";
import { useValence } from "../../../../ValenceProvider";
import { useBreakpoint } from "../../../../hooks";
import { css } from "@emotion/react";
export const Image = forwardRef(function Image(props, ref) {
    const theme = useValence();
    const breakpoint = useBreakpoint();
    // Defaults
    const { src, alt, placeholder, radius = theme.defaultRadius, fit = "cover", position = "center", square = false, height = "fit-content", width = square ? height : "auto", shadow = false, style } = props, rest = __rest(props, ["src", "alt", "placeholder", "radius", "fit", "position", "square", "height", "width", "shadow", "style"]);
    // Styles
    const ContainerStyle = css(Object.assign({ height: getReactiveProp(height, breakpoint), width: getReactiveProp(width, breakpoint), minWidth: getReactiveProp(width, breakpoint), borderRadius: theme.sizeClasses.radius[getReactiveProp(radius, breakpoint)], aspectRatio: square ? "1/1" : undefined, overflow: "hidden", boxShadow: getReactiveProp(shadow, breakpoint) ? theme.defaultShadow : "none" }, getReactiveProp(style, breakpoint)));
    const ImageStyle = css({
        width: "100%",
        height: "100%",
        objectFit: getReactiveProp(fit, breakpoint),
        objectPosition: getReactiveProp(position, breakpoint)
    });
    return (_jsx("div", { css: ContainerStyle, children: props.src ?
            _jsx("img", Object.assign({ css: ImageStyle, src: src, alt: alt, ref: ref }, rest))
            :
                placeholder }));
});
