/// <reference types="react" />
import { GenericInputProps } from "../../../generics";
import { SliderEventProps, SliderThumbProps, SliderTrackProps } from "../Slider";
export type RangeSliderProps = GenericInputProps<number[]> & SliderEventProps<number[]> & {
    /** The minimum value of this input. `0` by default. */
    min?: number;
    /** The maximum value of this input. `100` by default. */
    max?: number;
    /** The step value of this input. `1` by default. */
    step?: number;
    /** The minimum distance between the two thumbs. `0` by default. */
    minDistance?: number;
    /** Whether the active thumb will push other thumbs. `true` by default. */
    pearling?: boolean;
    /** Whether to show this slider's value on the thumb. `false` by default */
    showValue?: boolean;
    /** Whether to invert the direction of the slider. `false` by default. */
    invert?: boolean;
    /** Whether to include a manual input with this slider. `true` by default. */
    includeManualInput?: boolean;
    /** The position of this manual input, if shown. `"right"` by default. */
    manualInputPosition?: "left" | "right";
    /** Optional props to pass to track components. */
    trackProps?: Omit<SliderTrackProps, "state">;
    /** Optional props to pass to thumb components. */
    thumbProps?: Omit<SliderThumbProps, "state">;
};
export declare const RangeSlider: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    color?: import("csstype").Property.Color | undefined;
    backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
    padding?: import("csstype").Property.Padding<string | number> | undefined;
    margin?: import("csstype").Property.Margin<string | number> | undefined;
    width?: import("csstype").Property.Width<string | number> | undefined;
    height?: import("csstype").Property.Height<string | number> | undefined;
} & {
    value: number[];
    setValue: import("react").Dispatch<import("react").SetStateAction<number[]>>;
    size?: import("@valence-ui/utils").ComponentSize | undefined;
    radius?: import("@valence-ui/utils").ComponentSize | undefined;
    variant?: import("@valence-ui/utils").FillVariant | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    required?: boolean | undefined;
    autoFocus?: boolean | undefined;
    loading?: boolean | undefined;
    form?: string | undefined;
    name?: string | undefined;
} & SliderEventProps<number[]> & {
    /** The minimum value of this input. `0` by default. */
    min?: number | undefined;
    /** The maximum value of this input. `100` by default. */
    max?: number | undefined;
    /** The step value of this input. `1` by default. */
    step?: number | undefined;
    /** The minimum distance between the two thumbs. `0` by default. */
    minDistance?: number | undefined;
    /** Whether the active thumb will push other thumbs. `true` by default. */
    pearling?: boolean | undefined;
    /** Whether to show this slider's value on the thumb. `false` by default */
    showValue?: boolean | undefined;
    /** Whether to invert the direction of the slider. `false` by default. */
    invert?: boolean | undefined;
    /** Whether to include a manual input with this slider. `true` by default. */
    includeManualInput?: boolean | undefined;
    /** The position of this manual input, if shown. `"right"` by default. */
    manualInputPosition?: "left" | "right" | undefined;
    /** Optional props to pass to track components. */
    trackProps?: Omit<SliderTrackProps, "state"> | undefined;
    /** Optional props to pass to thumb components. */
    thumbProps?: Omit<SliderThumbProps, "state"> | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=RangeSlider.d.ts.map