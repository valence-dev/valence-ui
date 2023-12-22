"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("react");
const react_slider_1 = __importDefault(require("react-slider"));
const react_2 = require("@emotion/react");
const ValenceProvider_1 = require("../../../ValenceProvider");
const layout_1 = require("../../layout");
const hooks_1 = require("../../../hooks");
const utils_1 = require("@valence-ui/utils");
const buttons_1 = require("../../buttons");
const display_1 = require("../../display");
const NumberInput_1 = require("../NumberInput");
const Slider = (0, react_1.forwardRef)(function Slider(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const { value, setValue, min = 0, max = 100, step = 1, showValue = false, invert = false, color = "black", size = theme.defaultSize, radius = theme.defaultRadius, variant = theme.defaultVariant, height = theme.getSize("height", size), width = "100%", includeManualInput = true, manualInputPosition = "right", trackProps, thumbProps, onAfterChange, onBeforeChange, onChange, onSliderClick, style } = props, rest = __rest(props, ["value", "setValue", "min", "max", "step", "showValue", "invert", "color", "size", "radius", "variant", "height", "width", "includeManualInput", "manualInputPosition", "trackProps", "thumbProps", "onAfterChange", "onBeforeChange", "onChange", "onSliderClick", "style"]);
    // Styles
    const SliderStyle = (0, react_2.css)({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 2,
        width: width,
        height: height,
    });
    return ((0, jsx_runtime_1.jsxs)(layout_1.Flex, { align: "center", gap: 5, height: height, direction: manualInputPosition === "left" ? "row-reverse" : "row", children: [(0, jsx_runtime_1.jsx)(react_slider_1.default, { min: min, max: max, step: step, invert: invert, value: value, onChange: (value, index) => { setValue(value); onChange === null || onChange === void 0 ? void 0 : onChange(value, index); }, onAfterChange: onAfterChange, onBeforeChange: onBeforeChange, onSliderClick: onSliderClick, css: SliderStyle, ref: ref, renderThumb: (props, state) => (0, jsx_runtime_1.jsx)(SliderThumb, Object.assign({ state: state, showValue: showValue, color: color, size: size }, props, thumbProps)), renderTrack: (props, state) => (0, jsx_runtime_1.jsx)(SliderTrack, Object.assign({ state: state, color: color, margin: (height - 2) / 2, highlight: state.index === 0 }, props, trackProps)) }), includeManualInput &&
                (0, jsx_runtime_1.jsx)(NumberInput_1.NumberInput, { value: value, setValue: setValue, min: min, max: max, step: step, size: size, radius: radius, variant: variant, color: color, showControls: false, width: "fit-content", grow: false })] }));
});
const SliderTrack = (0, react_1.forwardRef)(function SliderTrack(
//@ts-ignore
props, ref) {
    // Hooks 
    const breakpoint = (0, hooks_1.useBreakpoint)();
    const theme = (0, ValenceProvider_1.useValence)();
    const { state, highlight, radius = "xl", size = theme.defaultSize, width, height = 2, padding = 0, color = "black", variant = highlight ? "filled" : "light", style } = props, rest = __rest(props, ["state", "highlight", "radius", "size", "width", "height", "padding", "color", "variant", "style"]);
    // Styles
    const TrackStyle = Object.assign({ backgroundColor: (0, buttons_1.getBackgroundColor)(highlight ? (0, utils_1.getReactiveProp)(color, breakpoint) : "black", variant, false, theme), borderRadius: theme.getSize("radius", (0, utils_1.getReactiveProp)(radius, breakpoint)) }, (0, utils_1.getReactiveProp)(style, breakpoint));
    return ((0, jsx_runtime_1.jsx)(layout_1.Flex, Object.assign({ width: width, height: height, padding: padding, style: TrackStyle, ref: ref }, rest)));
});
const SliderThumb = (0, react_1.forwardRef)(function SliderThumb(
//@ts-ignore
props, ref) {
    // Hooks
    const theme = (0, ValenceProvider_1.useValence)();
    const { state, showValue = false, variant = "filled", size = theme.defaultSize, width = showValue ? theme.getSize("height", size) : theme.getSize("height", size) / 2, height = theme.getSize("height", size) / 2, radius = "xl", color = "black", padding = showValue ? "1px 5px" : 0, align = "center", justify = "center", style } = props, rest = __rest(props, ["state", "showValue", "variant", "size", "width", "height", "radius", "color", "padding", "align", "justify", "style"]);
    // Styles
    const ThumbStyle = Object.assign({ cursor: "grab", top: theme.getSize("height", size) / 2 - height / 2 }, style);
    return ((0, jsx_runtime_1.jsx)(layout_1.StyledFlex, Object.assign({ width: width, height: height, radius: radius, color: color, padding: padding, variant: variant, align: align, justify: justify, style: ThumbStyle, ref: ref }, rest, { children: showValue &&
            (0, jsx_runtime_1.jsx)(display_1.Text, { monospace: true, color: "white", children: state.valueNow }) })));
});
const SliderNamespace = Object.assign(Slider, {
    Track: SliderTrack,
    Thumb: SliderThumb,
});
exports.Slider = SliderNamespace;
