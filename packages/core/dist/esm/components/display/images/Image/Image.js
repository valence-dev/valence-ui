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
import { useValence } from "../../../../ValenceProvider";
import { css } from "@emotion/react";
import { useResponsiveProps } from "../../../../utilities/responsive";
import { Flex } from "../../../layout";
import { Icon } from "../../Icon";
import { IconPhoto } from "@tabler/icons-react";
import { useColors } from "../../../../utilities";
export const Image = forwardRef(function Image(props, ref) {
    const theme = useValence();
    const { getHex } = useColors();
    // Defaults
    const _a = useResponsiveProps(props), { src, alt, color = "black", placeholder = (_jsx(Flex, { align: "center", justify: "center", height: "100%", width: "100%", children: _jsx(Icon, { color: color, children: _jsx(IconPhoto, {}) }) })), radius = theme.defaults.radius, fit = "cover", position = "center", square = false, height = "fit-content", width = square ? height : "auto", shadow = false, style } = _a, rest = __rest(_a, ["src", "alt", "color", "placeholder", "radius", "fit", "position", "square", "height", "width", "shadow", "style"]);
    // Styles
    const ContainerStyle = css(Object.assign({ height: height, width: width, minWidth: width, borderRadius: theme.sizeClasses.radius[radius], aspectRatio: square ? "1/1" : undefined, overflow: "hidden", boxShadow: shadow ? theme.defaults.shadow : "none", backgroundColor: getHex(color, "weak") }, style));
    const ImageStyle = css({
        width: "100%",
        height: "100%",
        objectFit: fit,
        objectPosition: position
    });
    return (_jsx("div", { css: ContainerStyle, children: props.src ?
            _jsx("img", Object.assign({ css: ImageStyle, src: src, alt: alt, ref: ref }, rest))
            :
                placeholder }));
});
