/// <reference types="react" />
import { GenericInputProps } from "../../../generics";
import { StyledFlexProps } from "../../layout";
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
declare const SliderNamespace: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    color?: import("csstype").Property.Color | undefined;
    backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
    padding?: import("csstype").Property.Padding<string | number> | undefined;
    margin?: import("csstype").Property.Margin<string | number> | undefined;
    width?: import("csstype").Property.Width<string | number> | undefined;
    height?: import("csstype").Property.Height<string | number> | undefined; /** Callback fired before a thumb is starting to move. */
} & {
    value: number;
    setValue: import("react").Dispatch<import("react").SetStateAction<number>>;
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
} & SliderEventProps<number> & {
    /** The minimum value of this input. `0` by default. */
    min?: number | undefined;
    /** The maximum value of this input. `100` by default. */
    max?: number | undefined;
    /** The step value of this input. `1` by default. */
    step?: number | undefined;
    /** Whether to show this slider's value on the thumb. `false` by default */
    showValue?: boolean | undefined;
    /** Whether to invert the direction of the slider. `false` by default. */
    invert?: boolean | undefined;
    /** Whether to include a manual input with this slider. `true` by default. */
    includeManualInput?: boolean | undefined;
    /** The position of this manual input, if shown. `"right"` by default. */
    manualInputPosition?: "left" | "right" | undefined;
    /** Optional props to pass to the track component. */
    trackProps?: Omit<SliderTrackProps, "state"> | undefined;
    /** Optional props to pass to the thumb component. */
    thumbProps?: Omit<SliderThumbProps, "state"> | undefined;
} & import("react").RefAttributes<unknown>> & {
    Track: import("react").ForwardRefExoticComponent<Omit<any, "ref"> & import("react").RefAttributes<unknown>>;
    Thumb: import("react").ForwardRefExoticComponent<Omit<any, "ref"> & import("react").RefAttributes<unknown>>;
};
export { SliderNamespace as Slider };
//# sourceMappingURL=Slider.d.ts.map