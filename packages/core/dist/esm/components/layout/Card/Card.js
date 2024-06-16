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
import { Flex } from "..";
import { PrimitiveButton } from "../../buttons/PrimitiveButton";
import { forwardRef } from "react";
import { useValence } from "../../../ValenceProvider";
import { Image as ImageComponent } from "../../display";
import { UnstyledButton } from "../../buttons";
import { useResponsiveProps } from "../../../utilities/responsive";
export const CARD_DEFAULTS = {
    width: {
        "xs": 150,
        "sm": 200,
        "md": 250,
        "lg": 300,
        "xl": 350
    }
};
const Card = forwardRef(function Card(props, ref) {
    const theme = useValence();
    // Defaults
    const _a = useResponsiveProps(props), { size = theme.defaults.size, radius = theme.defaults.radius, variant = theme.defaults.variant, gap = 0, buttonProps, flexProps, height = "fit-content", width = CARD_DEFAULTS.width[size], padding = 0, margin, color = "black", backgroundColor = color, children, style } = _a, rest = __rest(_a, ["size", "radius", "variant", "gap", "buttonProps", "flexProps", "height", "width", "padding", "margin", "color", "backgroundColor", "children", "style"]);
    // Styles
    const cardStyle = Object.assign({ overflow: "hidden", padding: padding, margin: margin, userSelect: "none" }, style);
    return (_jsx(PrimitiveButton, Object.assign({ height: height, width: width, color: color, backgroundColor: backgroundColor, variant: variant, radius: radius, style: cardStyle, motion: {
            onHover: "raise",
            onTap: "bounce",
        }, ref: ref }, buttonProps, rest, { children: _jsx(Flex, Object.assign({ direction: "column", gap: gap }, flexProps, { children: children })) })));
});
const Image = forwardRef(function CardImage(props, ref) {
    const theme = useValence();
    // Defaults
    const _a = useResponsiveProps(props), { radius = theme.defaults.radius, width = "100%", height = "fit-content" } = _a, rest = __rest(_a, ["radius", "width", "height"]);
    return (_jsx(ImageComponent, Object.assign({ radius: radius, width: width, height: height, ref: ref }, rest)));
});
const Section = forwardRef(function CardSection(props, ref) {
    const theme = useValence();
    // Defaults
    const _a = useResponsiveProps(props), { width = "100%", height = "fit-content", padding = theme.sizeClasses.padding[theme.defaults.size], children } = _a, rest = __rest(_a, ["width", "height", "padding", "children"]);
    return (_jsx(Flex, Object.assign({ width: width, height: height, padding: padding, ref: ref }, rest, { children: children })));
});
const Buttons = forwardRef(function CardButtons(props, ref) {
    const theme = useValence();
    // Defaults
    const _a = useResponsiveProps(props), { width = "100%", height = "fit-content", padding = theme.sizeClasses.padding[theme.defaults.size], direction = "row", align = "center", justify = "flex-start", children } = _a, rest = __rest(_a, ["width", "height", "padding", "direction", "align", "justify", "children"]);
    // Styles
    const ContainerStyle = {
        width: width,
        height: height,
        padding: padding,
        boxSizing: "border-box",
    };
    return (_jsx(UnstyledButton, { onClick: (e) => e.stopPropagation(), component: "div", style: ContainerStyle, ref: ref, children: _jsx(Flex, Object.assign({ width: "100%", height: "100%", padding: 0, direction: direction, align: align, justify: justify }, rest, { children: children })) }));
});
const CardNamesapce = Object.assign(Card, {
    Image,
    Section,
    Buttons,
});
export { CardNamesapce as Card };
