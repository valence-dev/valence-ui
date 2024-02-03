"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stepper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const utilities_1 = require("../../../utilities");
const layout_1 = require("../../layout");
const ValenceProvider_1 = require("../../../ValenceProvider");
const Text_1 = require("../Text");
const Icon_1 = require("../Icon");
const icons_react_1 = require("@tabler/icons-react");
const Stepper = (0, react_1.forwardRef)(function Stepper(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const colors = (0, utilities_1.useColors)();
    // Defaults
    const _a = (0, utilities_1.useResponsiveProps)(props), { variant = theme.defaults.variant, size = theme.defaults.size, color = "black", currentStep, children } = _a, rest = __rest(_a, ["variant", "size", "color", "currentStep", "children"]);
    return ((0, jsx_runtime_1.jsxs)(layout_1.Flex, Object.assign({ direction: "column", width: "100%", ref: ref }, rest, { children: [(0, jsx_runtime_1.jsx)(layout_1.Flex, { direction: "row", width: "100%", justify: "space-between", align: "center", children: react_1.default.Children.toArray(children).map((_, index) => {
                    return react_1.default.cloneElement(((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(StepperIndicator, { step: index, state: index === currentStep ? "active"
                                    : index < currentStep ? "complete"
                                        : "default", variant: variant, color: color, size: size }, index), index < react_1.default.Children.count(children) - 1 &&
                                (0, jsx_runtime_1.jsx)(layout_1.Space, { grow: true, style: {
                                        borderTop: `1px solid ${colors.getHex(color)}`,
                                        opacity: index < currentStep ? 1 : 0.25,
                                    } }, index + "line")] })), { key: index });
                }) }), react_1.default.Children.toArray(children).map((child, index) => index === currentStep && react_1.default.cloneElement(child, Object.assign(Object.assign({}, child.props), { key: index })))] })));
});
const StepperIndicator = (0, react_1.forwardRef)(function StepperIndicator(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const colors = (0, utilities_1.useColors)();
    // Defaults
    const { step, state = "default", variant = theme.defaults.variant, size = theme.defaults.size, color = "primary", } = (0, utilities_1.useResponsiveProps)(props);
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
    return ((0, jsx_runtime_1.jsx)(layout_1.Flex, { ref: ref, style: indicatorContainerStyle, align: "center", justify: "center", children: state === "complete" ?
            (0, jsx_runtime_1.jsx)(Icon_1.Icon, { color: colors.getFgHex(color, variant), size: theme.sizeClasses.iconSize[size], children: (0, jsx_runtime_1.jsx)(icons_react_1.IconCheck, {}) })
            :
                (0, jsx_runtime_1.jsx)(Text_1.Text, { align: "center", color: colors.getFgHex(color, variant), size: size, children: step + 1 }) }));
});
const StepperStep = (0, react_1.forwardRef)(function StepperStep(props, ref) {
    // Defaults
    const _a = (0, utilities_1.useResponsiveProps)(props), { children } = _a, rest = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)(layout_1.Flex, Object.assign({ direction: "column", width: "100%", ref: ref }, rest, { children: children })));
});
const StepperNamespace = Object.assign(Stepper, {
    Indicator: StepperIndicator,
    Step: StepperStep
});
exports.Stepper = StepperNamespace;
