/// <reference types="react" />
import { GenericInputProps } from "../../../generics";
import { SliderEventProps, SliderThumbProps, SliderTrackProps } from "../Slider";
import { MakeResponsive } from "../../../responsive";
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
export declare const RangeSlider: import("react").ForwardRefExoticComponent<MakeResponsive<RangeSliderProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=RangeSlider.d.ts.map