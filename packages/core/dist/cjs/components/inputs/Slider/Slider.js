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
const display_1 = require("../../display");
const NumberInput_1 = require("../NumberInput");
const responsive_1 = require("../../../utilities/responsive");
const color_1 = require("../../../utilities/color");
const Slider = (0, react_1.forwardRef)(function Slider(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const _a = (0, responsive_1.useResponsiveProps)(props), { value, setValue, min = 0, max = 100, step = 1, showValue = false, invert = false, color = "black", size = theme.defaults.size, radius = theme.defaults.radius, variant = theme.defaults.variant, height = theme.getSize("height", size), width = "100%", includeManualInput = true, manualInputPosition = "right", trackProps, thumbProps, onAfterChange, onBeforeChange, onChange, onSliderClick, style } = _a, rest = __rest(_a, ["value", "setValue", "min", "max", "step", "showValue", "invert", "color", "size", "radius", "variant", "height", "width", "includeManualInput", "manualInputPosition", "trackProps", "thumbProps", "onAfterChange", "onBeforeChange", "onChange", "onSliderClick", "style"]);
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
    const theme = (0, ValenceProvider_1.useValence)();
    const { getBgHex } = (0, color_1.useColors)();
    const { state, highlight, radius = "xl", size = theme.defaults.size, width, height = 2, padding = 0, color = "black", variant = highlight ? "filled" : "light", style } = props, rest = __rest(props, ["state", "highlight", "radius", "size", "width", "height", "padding", "color", "variant", "style"]);
    // Styles
    const TrackStyle = Object.assign({ backgroundColor: getBgHex(highlight ? color : "black", variant, false), borderRadius: theme.getSize("radius", radius) }, style);
    return ((0, jsx_runtime_1.jsx)(layout_1.Flex, Object.assign({ width: width, height: height, padding: padding, style: TrackStyle, ref: ref }, rest)));
});
const SliderThumb = (0, react_1.forwardRef)(function SliderThumb(
//@ts-ignore
props, ref) {
    // Hooks
    const theme = (0, ValenceProvider_1.useValence)();
    const { state, showValue = false, variant = "filled", size = theme.defaults.size, width = showValue ? theme.getSize("height", size) : theme.getSize("height", size) / 2, height = theme.getSize("height", size) / 2, radius = "xl", color = "black", padding = showValue ? "1px 5px" : 0, align = "center", justify = "center", style } = props, rest = __rest(props, ["state", "showValue", "variant", "size", "width", "height", "radius", "color", "padding", "align", "justify", "style"]);
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
