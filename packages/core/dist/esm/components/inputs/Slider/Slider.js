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
import ReactSlider from "react-slider";
import { css } from "@emotion/react";
import { useValence } from "../../../ValenceProvider";
import { Flex, StyledFlex } from "../../layout";
import { Text } from "../../display";
import { NumberInput } from "../NumberInput";
import { useResponsiveProps } from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";
const Slider = forwardRef(function Slider(props, ref) {
    const theme = useValence();
    const _a = useResponsiveProps(props), { value, setValue, min = 0, max = 100, step = 1, showValue = false, invert = false, color = "black", size = theme.defaults.size, radius = theme.defaults.radius, variant = theme.defaults.variant, height = theme.getSize("height", size), width = "100%", includeManualInput = true, manualInputPosition = "right", trackProps, thumbProps, onAfterChange, onBeforeChange, onChange, onSliderClick, style } = _a, rest = __rest(_a, ["value", "setValue", "min", "max", "step", "showValue", "invert", "color", "size", "radius", "variant", "height", "width", "includeManualInput", "manualInputPosition", "trackProps", "thumbProps", "onAfterChange", "onBeforeChange", "onChange", "onSliderClick", "style"]);
    // Styles
    const SliderStyle = css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 2,
        width: width,
        height: height,
    });
    return (_jsxs(Flex, { align: "center", gap: 5, height: height, direction: manualInputPosition === "left" ? "row-reverse" : "row", children: [_jsx(ReactSlider, { min: min, max: max, step: step, invert: invert, value: value, onChange: (value, index) => { setValue(value); onChange === null || onChange === void 0 ? void 0 : onChange(value, index); }, onAfterChange: onAfterChange, onBeforeChange: onBeforeChange, onSliderClick: onSliderClick, css: SliderStyle, ref: ref, renderThumb: (props, state) => _jsx(SliderThumb, Object.assign({ state: state, showValue: showValue, color: color, size: size }, props, thumbProps)), renderTrack: (props, state) => _jsx(SliderTrack, Object.assign({ state: state, color: color, margin: (height - 2) / 2, highlight: state.index === 0 }, props, trackProps)) }), includeManualInput &&
                _jsx(NumberInput, { value: value, setValue: setValue, min: min, max: max, step: step, size: size, radius: radius, variant: variant, color: color, showControls: false, width: "fit-content", grow: false })] }));
});
const SliderTrack = forwardRef(function SliderTrack(
//@ts-ignore
props, ref) {
    // Hooks 
    const theme = useValence();
    const { getBgHex } = useColors();
    const { state, highlight, radius = "xl", size = theme.defaults.size, width, height = 2, padding = 0, color = "black", variant = highlight ? "filled" : "light", style } = props, rest = __rest(props, ["state", "highlight", "radius", "size", "width", "height", "padding", "color", "variant", "style"]);
    // Styles
    const TrackStyle = Object.assign({ backgroundColor: getBgHex(highlight ? color : "black", variant, false), borderRadius: theme.getSize("radius", radius) }, style);
    return (_jsx(Flex, Object.assign({ width: width, height: height, padding: padding, style: TrackStyle, ref: ref }, rest)));
});
const SliderThumb = forwardRef(function SliderThumb(
//@ts-ignore
props, ref) {
    // Hooks
    const theme = useValence();
    const { state, showValue = false, variant = "filled", size = theme.defaults.size, width = showValue ? theme.getSize("height", size) : theme.getSize("height", size) / 2, height = theme.getSize("height", size) / 2, radius = "xl", color = "black", padding = showValue ? "1px 5px" : 0, align = "center", justify = "center", style } = props, rest = __rest(props, ["state", "showValue", "variant", "size", "width", "height", "radius", "color", "padding", "align", "justify", "style"]);
    // Styles
    const ThumbStyle = Object.assign({ cursor: "grab", top: theme.getSize("height", size) / 2 - height / 2 }, style);
    return (_jsx(StyledFlex, Object.assign({ width: width, height: height, radius: radius, color: color, padding: padding, variant: variant, align: align, justify: justify, style: ThumbStyle, ref: ref }, rest, { children: showValue &&
            _jsx(Text, { monospace: true, color: "white", children: state.valueNow }) })));
});
const SliderNamespace = Object.assign(Slider, {
    Track: SliderTrack,
    Thumb: SliderThumb,
});
export { SliderNamespace as Slider };
