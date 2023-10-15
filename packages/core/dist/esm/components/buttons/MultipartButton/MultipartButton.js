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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import styled from "styled-components";
import { PrimitiveButton } from "../PrimitiveButton";
import { IconChevronRight } from "@tabler/icons-react";
import { getTextColor } from "../Helpers";
import { Flex } from "../../layout";
import { Text } from "../../display";
import { ValenceContext } from "../../../ValenceProvider";
import { useDefaultIconProps } from "../../../hooks";
const SIZES = {
    xs: { height: 50 },
    sm: { height: 60 },
    md: { height: 70 },
    lg: { height: 80 },
    xl: { height: 90 },
};
export function MultipartButton(props) {
    const theme = useContext(ValenceContext);
    // Hooks
    const defaultIconProps = useDefaultIconProps();
    // Defaults
    const { size = theme.defaultSize, variant = theme.defaultVariant, color = theme.primaryColor, title, subtitle, leftIcon, rightIcon = _jsx(IconChevronRight, Object.assign({}, defaultIconProps.get(), { opacity: 0.5 })), titleProps, subtitleProps, style } = props, rest = __rest(props, ["size", "variant", "color", "title", "subtitle", "leftIcon", "rightIcon", "titleProps", "subtitleProps", "style"]);
    // Styles
    const buttonStyle = Object.assign({ justifyContent: "flex-start", padding: 0, paddingLeft: !leftIcon ? theme.sizeClasses.padding[size] : undefined, height: SIZES[size].height }, style);
    const IconContainer = styled.div({
        height: "100%",
        aspectRatio: "1 / 1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: getTextColor(color, variant, theme),
    });
    return (_jsxs(PrimitiveButton, Object.assign({ size: size, variant: variant, color: color, style: buttonStyle, height: "fit-content", width: "100%" }, rest, { children: [leftIcon && _jsx(IconContainer, { children: leftIcon }), _jsxs(Flex, { direction: "column", align: "flex-start", justify: "center", grow: true, gap: 2, children: [_jsx(Text, Object.assign({ size: size, color: getTextColor(color, variant, theme), bold: true }, titleProps, { children: title })), _jsx(Text, Object.assign({ fontSize: theme.sizeClasses.fontSize[size] - 2, color: getTextColor(color, variant, theme) }, subtitleProps, { children: subtitle }))] }), _jsx(IconContainer, { children: rightIcon })] })));
}
