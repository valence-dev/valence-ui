/// <reference types="react" />
import { GenericInputProps } from "../../../generics";
import { StyledFlexProps } from "../../layout";
import { MakeResponsive } from "../../../responsive";
export type SliderEventProps<T = number> = {
    /** Callback fired after a thumb has been moved. */
    onAfterChange?: (value: T, thumbIndex: number) => void;
    /** Callback fired before a thumb is starting to move. */
    onBeforeChange?: (value: T, thumbIndex: number) => void;
    /** Callback fired when the value of this input changes. */
    onChange?: (value: T, thumbIndex: number) => void;
    /** Callback fired when any part of the slider is clicked. */
    onSliderClick?: (value: number) => void;
};
export type SliderProps = GenericInputProps<number> & SliderEventProps & {
    /** The minimum value of this input. `0` by default. */
    min?: number;
    /** The maximum value of this input. `100` by default. */
    max?: number;
    /** The step value of this input. `1` by default. */
    step?: number;
    /** Whether to show this slider's value on the thumb. `false` by default */
    showValue?: boolean;
    /** Whether to invert the direction of the slider. `false` by default. */
    invert?: boolean;
    /** Whether to include a manual input with this slider. `true` by default. */
    includeManualInput?: boolean;
    /** The position of this manual input, if shown. `"right"` by default. */
    manualInputPosition?: "left" | "right";
    /** Optional props to pass to the track component. */
    trackProps?: Omit<SliderTrackProps, "state">;
    /** Optional props to pass to the thumb component. */
    thumbProps?: Omit<SliderThumbProps, "state">;
};
export type SliderTrackProps = StyledFlexProps & {
    state: {
        index: number;
        value: number;
    };
    /** Whether to highlight this track. `false` by default. */
    highlight?: boolean;
};
export type SliderThumbProps = StyledFlexProps & {
    state: {
        index: number;
        valueNow: number;
        value: number;
    };
    /** Whether to show the value of this slider. `false` by default. */
    showValue?: boolean;
};
declare const SliderNamespace: import("react").ForwardRefExoticComponent<MakeResponsive<SliderProps> & import("react").RefAttributes<unknown>> & {
    Track: import("react").ForwardRefExoticComponent<Omit<any, "ref"> & import("react").RefAttributes<unknown>>;
    Thumb: import("react").ForwardRefExoticComponent<Omit<any, "ref"> & import("react").RefAttributes<unknown>>;
};
export { SliderNamespace as Slider };
//# sourceMappingURL=Slider.d.ts.map