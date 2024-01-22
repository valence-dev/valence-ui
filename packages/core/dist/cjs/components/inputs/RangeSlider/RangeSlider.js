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
exports.RangeSlider = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("react");
const Slider_1 = require("../Slider");
const ValenceProvider_1 = require("../../../ValenceProvider");
const layout_1 = require("../../layout");
const react_slider_1 = __importDefault(require("react-slider"));
const react_2 = require("@emotion/react");
const NumberInput_1 = require("../NumberInput");
const responsive_1 = require("../../../utilities/responsive");
exports.RangeSlider = (0, react_1.forwardRef)(function RangeSlider(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const _a = (0, responsive_1.useResponsiveProps)(props), { value, setValue, min = 0, max = 100, step = 1, minDistance = 0, pearling = true, showValue = false, invert = false, color = "black", size = theme.defaults.size, radius = theme.defaults.radius, variant = theme.defaults.variant, height = theme.getSize("height", size), width = "100%", includeManualInput = true, manualInputPosition = "right", trackProps, thumbProps, onAfterChange, onBeforeChange, onChange, onSliderClick, style } = _a, rest = __rest(_a, ["value", "setValue", "min", "max", "step", "minDistance", "pearling", "showValue", "invert", "color", "size", "radius", "variant", "height", "width", "includeManualInput", "manualInputPosition", "trackProps", "thumbProps", "onAfterChange", "onBeforeChange", "onChange", "onSliderClick", "style"]);
    // Styles
    const SliderStyle = (0, react_2.css)({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 2,
        width: width,
        height: height,
    });
    return ((0, jsx_runtime_1.jsxs)(layout_1.Flex, { alignSelf: "stretch", align: "center", gap: 5, height: height, direction: manualInputPosition === "left" ? "row-reverse" : "row", children: [(0, jsx_runtime_1.jsx)(react_slider_1.default, { min: min, max: max, step: step, minDistance: minDistance, pearling: pearling, invert: invert, value: value, onChange: (value, index) => { setValue(value); onChange === null || onChange === void 0 ? void 0 : onChange(value, index); }, onAfterChange: onAfterChange, onBeforeChange: onBeforeChange, onSliderClick: onSliderClick, css: SliderStyle, ref: ref, renderThumb: (props, state) => (0, jsx_runtime_1.jsx)(Slider_1.Slider.Thumb, Object.assign({ state: state, showValue: showValue, color: color, size: size }, props, thumbProps)), renderTrack: (props, state) => (0, jsx_runtime_1.jsx)(Slider_1.Slider.Track, Object.assign({ state: state, color: color, margin: (height - 2) / 2, highlight: state.index !== 0 && state.index !== state.value.length }, props, trackProps)) }), includeManualInput &&
                (0, jsx_runtime_1.jsx)(layout_1.Flex, { gap: 5, children: value.map((v, i) => ((0, jsx_runtime_1.jsx)(NumberInput_1.NumberInput, { value: v, setValue: (v) => {
                            const newValue = [...value];
                            // @ts-ignore
                            newValue[i] = v;
                            setValue(newValue);
                        }, min: i === 0 ? min : value[i - 1] + step, max: i === value.length - 1 ? max : value[i + 1] - step, step: step, size: size, radius: radius, variant: variant, color: color, showControls: false, width: "fit-content", grow: false }, i))) })] }));
});
