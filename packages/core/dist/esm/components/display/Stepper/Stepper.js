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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { forwardRef } from "react";
import { useColors, useResponsiveProps } from "../../../utilities";
import { Flex, Space } from "../../layout";
import { useValence } from "../../../ValenceProvider";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { IconCheck } from "@tabler/icons-react";
const Stepper = forwardRef(function Stepper(props, ref) {
    const theme = useValence();
    const colors = useColors();
    // Defaults
    const _a = useResponsiveProps(props), { variant = theme.defaults.variant, size = theme.defaults.size, color = "black", currentStep, children } = _a, rest = __rest(_a, ["variant", "size", "color", "currentStep", "children"]);
    return (_jsxs(Flex, Object.assign({ direction: "column", width: "100%", ref: ref }, rest, { children: [_jsx(Flex, { direction: "row", width: "100%", justify: "space-between", align: "center", children: React.Children.toArray(children).map((_, index) => {
                    return (_jsxs(_Fragment, { children: [_jsx(StepperIndicator, { step: index, state: index === currentStep ? "active"
                                    : index < currentStep ? "complete"
                                        : "default", variant: variant, color: color, size: size }), index < React.Children.count(children) - 1 &&
                                _jsx(Space, { grow: true, style: {
                                        borderTop: `1px solid ${colors.getHex(color)}`,
                                        opacity: index < currentStep ? 1 : 0.25,
                                    } })] }));
                }) }), React.Children.toArray(children).map((child, index) => index === currentStep && child)] })));
});
const StepperIndicator = forwardRef(function StepperIndicator(props, ref) {
    const theme = useValence();
    const colors = useColors();
    // Defaults
    const { step, state = "default", variant = theme.defaults.variant, size = theme.defaults.size, color = "primary", } = useResponsiveProps(props);
    // Styles
    const indicatorContainerStyle = {
        borderRadius: "50%",
        width: theme.sizeClasses.height[size],
        height: theme.sizeClasses.height[size],
        border: "none",
        outline: variant === "subtle"
            ? `1px solid ${colors.getHex(color)}`
            : "none",
        backgroundColor: colors.getBgHex(color, variant, false),
        color: colors.getFgHex(color, variant),
        opacity: state === "default" ? 0.5 : 1,
    };
    return (_jsx(Flex, { ref: ref, style: indicatorContainerStyle, align: "center", justify: "center", children: state === "complete" ?
            _jsx(Icon, { color: colors.getFgHex(color, variant), size: theme.sizeClasses.iconSize[size], children: _jsx(IconCheck, {}) })
            :
                _jsx(Text, { align: "center", color: colors.getFgHex(color, variant), size: size, children: step + 1 }) }));
});
const StepperStep = forwardRef(function StepperStep(props, ref) {
    // Defaults
    const _a = useResponsiveProps(props), { children } = _a, rest = __rest(_a, ["children"]);
    return (_jsx(Flex, Object.assign({ direction: "column", width: "100%", ref: ref }, rest, { children: children })));
});
const StepperNamespace = Object.assign(Stepper, {
    Indicator: StepperIndicator,
    Step: StepperStep
});
export { StepperNamespace as Stepper };
