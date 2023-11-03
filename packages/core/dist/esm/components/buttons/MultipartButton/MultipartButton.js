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
import { forwardRef, useContext } from "react";
import { PrimitiveButton } from "../PrimitiveButton";
import { IconChevronRight } from "@tabler/icons-react";
import { getTextColor } from "../Helpers";
import { Flex } from "../../layout";
import { Text } from "../../display";
import { ValenceContext } from "../../../ValenceProvider";
import { useDefaultIconProps } from "../../../hooks";
import { css } from "@emotion/react";
const SIZES = {
    xs: { height: 50 },
    sm: { height: 60 },
    md: { height: 70 },
    lg: { height: 80 },
    xl: { height: 90 },
};
export const MultipartButton = forwardRef(function MultipartButton(props, ref) {
    const theme = useContext(ValenceContext);
    // Hooks
    const defaultIconProps = useDefaultIconProps();
    // Defaults
    const { size = theme.defaultSize, variant = theme.defaultVariant, color = theme.primaryColor, height = SIZES[size].height, width = "100%", title, subtitle, leftIcon, rightIcon = _jsx(IconChevronRight, Object.assign({}, defaultIconProps.get(), { opacity: 0.5 })), titleProps, subtitleProps, style } = props, rest = __rest(props, ["size", "variant", "color", "height", "width", "title", "subtitle", "leftIcon", "rightIcon", "titleProps", "subtitleProps", "style"]);
    // Styles
    const buttonStyle = Object.assign({ justifyContent: "flex-start", padding: 0, paddingLeft: !leftIcon ? theme.sizeClasses.padding[size] : undefined }, style);
    const ContainerStyle = css({
        height: "100%",
        aspectRatio: "1 / 1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: getTextColor(color, variant, theme),
    });
    return (_jsxs(PrimitiveButton, Object.assign({ size: size, variant: variant, color: color, style: buttonStyle, height: height, width: width, ref: ref }, rest, { children: [leftIcon && _jsx("div", { css: ContainerStyle, children: leftIcon }), _jsxs(Flex, { direction: "column", align: "flex-start", justify: "center", grow: true, gap: 2, children: [_jsx(Text, Object.assign({ size: size, color: getTextColor(color, variant, theme), bold: true }, titleProps, { children: title })), _jsx(Text, Object.assign({ fontSize: theme.sizeClasses.fontSize[size] - 2, color: getTextColor(color, variant, theme) }, subtitleProps, { children: subtitle }))] }), _jsx("div", { css: ContainerStyle, children: rightIcon })] })));
});
