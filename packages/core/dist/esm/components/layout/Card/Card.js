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
import { getReactiveProp } from "@valence-ui/utils";
import { Flex } from "..";
import { PrimitiveButton } from "../../buttons/PrimitiveButton";
import { forwardRef, useContext } from "react";
import { ValenceContext } from "../../../ValenceProvider";
import { useBreakpoint } from "../../../hooks";
import { Image as ImageComponent } from "../../display";
import { UnstyledButton } from "../../buttons";
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
    const theme = useContext(ValenceContext);
    const breakpoint = useBreakpoint();
    // Defaults
    const { size = theme.defaultSize, radius = theme.defaultRadius, gap = 0, buttonProps, flexProps, height = "fit-content", width = CARD_DEFAULTS.width[getReactiveProp(size, breakpoint)], padding = 0, margin, color = "black", backgroundColor = color, children, style } = props, rest = __rest(props, ["size", "radius", "gap", "buttonProps", "flexProps", "height", "width", "padding", "margin", "color", "backgroundColor", "children", "style"]);
    // Styles
    const cardStyle = Object.assign({ overflow: "hidden", padding: getReactiveProp(padding, breakpoint), margin: getReactiveProp(margin, breakpoint) }, getReactiveProp(style, breakpoint));
    return (_jsx(PrimitiveButton, Object.assign({ height: getReactiveProp(height, breakpoint), width: getReactiveProp(width, breakpoint), color: getReactiveProp(color, breakpoint), backgroundColor: getReactiveProp(backgroundColor, breakpoint), radius: getReactiveProp(radius, breakpoint), style: cardStyle, motion: {
            onHover: "raise",
            onTap: "bounce",
        }, ref: ref }, buttonProps, rest, { children: _jsx(Flex, Object.assign({ direction: "column", gap: gap }, flexProps, { children: children })) })));
});
const Image = forwardRef(function CardImage(props, ref) {
    const theme = useContext(ValenceContext);
    // Defaults
    const { radius = theme.defaultRadius, width = "100%", height = "fit-content" } = props, rest = __rest(props, ["radius", "width", "height"]);
    return (_jsx(ImageComponent, Object.assign({ radius: radius, width: width, height: height, ref: ref }, rest)));
});
const Section = forwardRef(function CardSection(props, ref) {
    const theme = useContext(ValenceContext);
    // Defaults
    const { width = "100%", height = "fit-content", padding = theme.sizeClasses.padding[theme.defaultSize], children } = props, rest = __rest(props, ["width", "height", "padding", "children"]);
    return (_jsx(Flex, Object.assign({ width: width, height: height, padding: padding, ref: ref }, rest, { children: children })));
});
const Buttons = forwardRef(function CardButtons(props, ref) {
    const theme = useContext(ValenceContext);
    const breakpoint = useBreakpoint();
    // Defaults
    const { width = "100%", height = "fit-content", padding = theme.sizeClasses.padding[theme.defaultSize], direction = "row", align = "center", justify = "flex-start", children } = props, rest = __rest(props, ["width", "height", "padding", "direction", "align", "justify", "children"]);
    // Styles
    const ButtonStyle = {
        width: getReactiveProp(width, breakpoint),
        height: getReactiveProp(height, breakpoint),
        padding: getReactiveProp(padding, breakpoint),
        boxSizing: "border-box",
    };
    return (_jsx(UnstyledButton, { onClick: (e) => e.stopPropagation(), component: "div", style: ButtonStyle, ref: ref, children: _jsx(Flex, Object.assign({ width: "100%", height: "100%", padding: 0, direction: direction, align: align, justify: justify }, rest, { children: children })) }));
});
const CardNamesapce = Object.assign(Card, {
    Image,
    Section,
    Buttons,
});
export { CardNamesapce as Card };
