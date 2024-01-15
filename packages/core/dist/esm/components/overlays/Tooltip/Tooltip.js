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
import React, { createContext, forwardRef, useContext } from "react";
import { useBreakpoint, useTooltip } from "../../../hooks";
import { FloatingPortal, useMergeRefs } from "@floating-ui/react";
import { StyledFlex } from "../../layout";
import { css } from "@emotion/react";
import { useValence } from "../../../ValenceProvider";
import { getReactiveProp } from "@valence-ui/utils";
import { Text } from "../../display";
const TooltipContext = createContext(null);
const useTooltipContext = () => {
    const context = useContext(TooltipContext);
    if (context === null)
        throw new Error("Tooltip compontents must be wrapped in <Tooltip />");
    return context;
};
function Tooltip(props) {
    const { children } = props, options = __rest(props, ["children"]);
    const tooltip = useTooltip(options);
    return (_jsx(TooltipContext.Provider, { value: tooltip, children: children }));
}
const Trigger = forwardRef(function Trigger(props, propRef) {
    const { children } = props;
    const context = useTooltipContext();
    const childrenRef = children.ref;
    const ref = useMergeRefs([context.refs.setReference, childrenRef, propRef]);
    return React.cloneElement(children, context.getReferenceProps(Object.assign(Object.assign({ ref }, children.props), { "data-state": context.opened ? "open" : "closed" })));
});
const Content = forwardRef(function Content(props, propRef) {
    const { color = "white", backgroundColor = "black", radius = "xl", variant = "filled", padding = "5px 10px", withShadow = true, zIndex = 2, children } = props, rest = __rest(props, ["color", "backgroundColor", "radius", "variant", "padding", "withShadow", "zIndex", "children"]);
    const context = useTooltipContext();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);
    const theme = useValence();
    const breakpoint = useBreakpoint();
    // Styles
    const FloatingStyle = css(Object.assign({ borderRadius: theme.sizeClasses.radius[getReactiveProp(radius, breakpoint)], boxShadow: !withShadow ? undefined : theme.defaults.shadow, zIndex: zIndex, animationName: "in", animationDuration: "0.1s", overflowY: "auto", "@keyframes in": {
            from: {
                opacity: 0,
            },
            to: {
                opacity: 1,
            },
        } }, context.floatingStyles));
    if (!context.opened)
        return null;
    return (_jsx(FloatingPortal, { children: _jsx("div", Object.assign({ ref: ref, css: FloatingStyle }, context.getFloatingProps(), { children: _jsx(StyledFlex, Object.assign({ color: color, backgroundColor: backgroundColor, radius: radius, variant: variant, padding: padding }, rest, { children: typeof children !== "string" ? children : (_jsx(Text, { align: "center", color: "white", children: children })) })) })) }));
});
const TooltipNamespace = Object.assign(Tooltip, { Trigger, Content, });
export { TooltipNamespace as Tooltip };
