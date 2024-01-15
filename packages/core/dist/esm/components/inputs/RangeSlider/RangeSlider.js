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
import { forwardRef } from "react";
import { Slider } from "../Slider";
import { useValence } from "../../../ValenceProvider";
import { Flex } from "../../layout";
import ReactSlider from "react-slider";
import { css } from "@emotion/react";
import { NumberInput } from "../NumberInput";
export const RangeSlider = forwardRef(function RangeSlider(props, ref) {
    const theme = useValence();
    const { value, setValue, min = 0, max = 100, step = 1, minDistance = 0, pearling = true, showValue = false, invert = false, color = "black", size = theme.defaults.size, radius = theme.defaults.radius, variant = theme.defaults.variant, height = theme.getSize("height", size), width = "100%", includeManualInput = true, manualInputPosition = "right", trackProps, thumbProps, onAfterChange, onBeforeChange, onChange, onSliderClick, style } = props, rest = __rest(props, ["value", "setValue", "min", "max", "step", "minDistance", "pearling", "showValue", "invert", "color", "size", "radius", "variant", "height", "width", "includeManualInput", "manualInputPosition", "trackProps", "thumbProps", "onAfterChange", "onBeforeChange", "onChange", "onSliderClick", "style"]);
    // Styles
    const SliderStyle = css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 2,
        width: width,
        height: height,
    });
    return (_jsxs(Flex, { align: "center", gap: 5, height: height, direction: manualInputPosition === "left" ? "row-reverse" : "row", children: [_jsx(ReactSlider, { min: min, max: max, step: step, minDistance: minDistance, pearling: pearling, invert: invert, value: value, onChange: (value, index) => { setValue(value); onChange === null || onChange === void 0 ? void 0 : onChange(value, index); }, onAfterChange: onAfterChange, onBeforeChange: onBeforeChange, onSliderClick: onSliderClick, css: SliderStyle, ref: ref, renderThumb: (props, state) => _jsx(Slider.Thumb, Object.assign({ state: state, showValue: showValue, color: color, size: size }, props, thumbProps)), renderTrack: (props, state) => _jsx(Slider.Track, Object.assign({ state: state, color: color, margin: (height - 2) / 2, highlight: state.index !== 0 && state.index !== state.value.length }, props, trackProps)) }), includeManualInput &&
                _jsx(Flex, { gap: 5, children: value.map((v, i) => (_jsx(NumberInput, { value: v, setValue: (v) => {
                            const newValue = [...value];
                            // @ts-ignore
                            newValue[i] = v;
                            setValue(newValue);
                        }, min: i === 0 ? min : value[i - 1] + step, max: i === value.length - 1 ? max : value[i + 1] - step, step: step, size: size, radius: radius, variant: variant, color: color, showControls: false, width: "fit-content", grow: false }, i))) })] }));
});
