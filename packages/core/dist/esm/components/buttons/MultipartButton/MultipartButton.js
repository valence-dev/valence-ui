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
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { forwardRef } from "react";
import { PrimitiveButton } from "../PrimitiveButton";
import { IconChevronRight } from "@tabler/icons-react";
import { Flex } from "../../layout";
import { Icon, Loader, Text } from "../../display";
import { useValence } from "../../../ValenceProvider";
import { css } from "@emotion/react";
import { useResponsiveProps } from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";
const SIZES = {
    xs: { height: 50 },
    sm: { height: 60 },
    md: { height: 70 },
    lg: { height: 80 },
    xl: { height: 90 },
};
export const MultipartButton = forwardRef(function MultipartButton(props, ref) {
    const theme = useValence();
    const colors = useColors();
    // Defaults
    const _a = useResponsiveProps(props), { size = theme.defaults.size, variant = theme.defaults.variant, color = theme.primaryColor, height = SIZES[size].height, width = "100%", title, subtitle, leftIcon, rightIcon = _jsx(IconChevronRight, { opacity: 0.5 }), loading, titleProps, subtitleProps, style } = _a, rest = __rest(_a, ["size", "variant", "color", "height", "width", "title", "subtitle", "leftIcon", "rightIcon", "loading", "titleProps", "subtitleProps", "style"]);
    // Styles
    const buttonStyle = Object.assign({ justifyContent: "flex-start", padding: 0, paddingLeft: !leftIcon ? theme.sizeClasses.padding[size] : undefined }, style);
    const ContainerStyle = css({
        height: "100%",
        aspectRatio: "1 / 1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: colors.getFgHex(color, variant),
    });
    return (_jsxs(PrimitiveButton, Object.assign({ size: size, variant: variant, color: color, style: buttonStyle, height: height, width: width, ref: ref }, rest, { children: [leftIcon && _jsx("div", { css: ContainerStyle, children: loading ?
                    _jsx(Loader, { size: size, color: colors.getFgHex(color, variant) })
                    :
                        _jsx(Icon, { size: theme.getSize("iconSize", size), color: colors.getFgHex(color, variant), children: leftIcon }) }), _jsxs(Flex, { direction: "column", align: "flex-start", justify: "center", grow: true, gap: 2, children: [_jsx(Text, Object.assign({ size: size, color: colors.getFgHex(color, variant), bold: true }, titleProps, { children: title })), _jsx(Text, Object.assign({ fontSize: theme.sizeClasses.fontSize[size] - 2, color: colors.getFgHex(color, variant) }, subtitleProps, { children: subtitle }))] }), _jsx("div", { css: ContainerStyle, children: _jsx(Icon, { size: theme.getSize("iconSize", size), color: colors.getFgHex(color, variant), children: rightIcon }) })] })));
});
