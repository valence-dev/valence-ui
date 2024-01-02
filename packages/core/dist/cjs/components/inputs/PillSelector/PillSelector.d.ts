import { FocusEvents, KeyboardEvents, MouseClickEvents, MouseEvents, PointerEvents } from "@valence-ui/utils";
import { GenericInputProps } from "../../../generics";
import { ReactNode } from "react";
import { IconButtonProps, TextButtonProps } from "../../buttons";
import { FlexProps } from "../../layout";
export type PillSelectorEventProps = MouseClickEvents & MouseEvents & PointerEvents & FocusEvents & KeyboardEvents & {
    /** Callback to be called when a pill is selected. */
    onPillSelected?: (value: string) => void;
    /** Callback to be called when a pill is deselected. */
    onPillDeselected?: (value: string) => void;
};
export type PillSelectorProps = GenericInputProps<string[]> & PillSelectorEventProps & {
    /** A list of pills to display */
    pills: string[];
    /** Whether to allow pills to be cleared. `true` by default. */
    allowClear?: boolean;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;
    /** Sets the gaps between everything. `5` by default */
    gap?: number;
    /** The maxmimum number of pills that can be selected. `Infinity` by default. */
    maxSelectable?: number;
    /** An icon to use for the clear button. Defaults to `IconX`. */
    clearButtonIcon?: ReactNode;
    /** Optional props to pass to the clear button */
    clearButtonProps?: IconButtonProps & {
        children?: never;
    };
    /** Optional props to pass to all pills */
    pillProps?: TextButtonProps & {
        children?: never;
    };
    /** Optional props to pass to selected pills. Will override attributes from pillProps */
    selectedPillProps?: TextButtonProps & {
        children?: never;
    };
    /** Optional props to pass to the pill container */
    pillContainerProps?: FlexProps & {
        children?: never;
    };
    children?: never;
};
export declare const PillSelector: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    color?: import("csstype").Property.Color | undefined;
    backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
    padding?: import("csstype").Property.Padding<string | number> | undefined;
    margin?: import("csstype").Property.Margin<string | number> | undefined;
    width?: import("csstype").Property.Width<string | number> | undefined;
    height?: import("csstype").Property.Height<string | number> | undefined;
} & {
    value: string[];
    setValue: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    size?: import("@valence-ui/utils").ComponentSize | undefined;
    /** Callback to be called when a pill is selected. */
    radius?: import("@valence-ui/utils").ComponentSize | undefined;
    variant?: import("@valence-ui/utils").FillVariant | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    required?: boolean | undefined;
    autoFocus?: boolean | undefined;
    loading?: boolean | undefined;
    form?: string | undefined;
    name?: string | undefined;
} & MouseClickEvents & MouseEvents & PointerEvents & FocusEvents & KeyboardEvents & {
    /** Callback to be called when a pill is selected. */
    onPillSelected?: ((value: string) => void) | undefined;
    /** Callback to be called when a pill is deselected. */
    onPillDeselected?: ((value: string) => void) | undefined;
} & {
    /** A list of pills to display */
    pills: string[];
    /** Whether to allow pills to be cleared. `true` by default. */
    allowClear?: boolean | undefined;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean | undefined;
    /** Sets the gaps between everything. `5` by default */
    gap?: number | undefined;
    /** The maxmimum number of pills that can be selected. `Infinity` by default. */
    maxSelectable?: number | undefined;
    /** An icon to use for the clear button. Defaults to `IconX`. */
    clearButtonIcon?: ReactNode;
    /** Optional props to pass to the clear button */
    clearButtonProps?: (import("@valence-ui/utils/src/generics/Clickable").GenericClickableProps & import("@valence-ui/utils/src/generics/Events").MouseClickEvents & import("@valence-ui/utils/src/generics/Events").MouseEvents & import("@valence-ui/utils/src/generics/Events").PointerEvents & import("@valence-ui/utils/src/generics/Events").FocusEvents & import("@valence-ui/utils").PolymorphicElementProps & {
        css?: any;
    } & import("@valence-ui/utils/src/generics/Global").GenericProps & {
        color?: import("csstype").Property.Color | undefined;
        backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
        padding?: import("csstype").Property.Padding<string | number> | undefined;
        margin?: import("csstype").Property.Margin<string | number> | undefined;
        width?: import("csstype").Property.Width<string | number> | undefined;
        height?: import("csstype").Property.Height<string | number> | undefined;
    } & {
        variant?: import("@valence-ui/utils/src/generics/Global").FillVariant | undefined;
        size?: import("@valence-ui/utils/src/generics/Global").ComponentSize | undefined;
        radius?: import("@valence-ui/utils/src/generics/Global").ComponentSize | undefined;
        square?: boolean | undefined;
        shadow?: boolean | undefined;
        grow?: boolean | undefined;
        disabled?: boolean | undefined;
        loading?: boolean | undefined;
    } & {
        motion?: import("../../buttons").MotionBehaviourProps | undefined;
    } & {
        tooltip?: string | undefined;
        tooltipProps?: Omit<import("../..").TooltipProps, "children"> | undefined;
        tooltipContentProps?: Omit<import("../..").TooltipContentProps, "children"> | undefined;
    } & {
        children?: undefined;
    }) | undefined;
    /** Optional props to pass to all pills */
    pillProps?: (import("@valence-ui/utils/src/generics/Clickable").GenericClickableProps & import("@valence-ui/utils/src/generics/Events").MouseClickEvents & import("@valence-ui/utils/src/generics/Events").MouseEvents & import("@valence-ui/utils/src/generics/Events").PointerEvents & import("@valence-ui/utils/src/generics/Events").FocusEvents & import("@valence-ui/utils").PolymorphicElementProps & {
        css?: any;
    } & import("@valence-ui/utils/src/generics/Global").GenericProps & {
        color?: import("csstype").Property.Color | undefined;
        backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
        padding?: import("csstype").Property.Padding<string | number> | undefined;
        margin?: import("csstype").Property.Margin<string | number> | undefined;
        width?: import("csstype").Property.Width<string | number> | undefined;
        height?: import("csstype").Property.Height<string | number> | undefined;
    } & {
        variant?: import("@valence-ui/utils/src/generics/Global").FillVariant | undefined;
        size?: import("@valence-ui/utils/src/generics/Global").ComponentSize | undefined;
        radius?: import("@valence-ui/utils/src/generics/Global").ComponentSize | undefined;
        square?: boolean | undefined;
        shadow?: boolean | undefined;
        grow?: boolean | undefined;
        disabled?: boolean | undefined;
        loading?: boolean | undefined;
    } & {
        motion?: import("../../buttons").MotionBehaviourProps | undefined;
    } & {
        children?: string | undefined;
        textProps?: import("../../display").TextProps | undefined;
    } & {
        children?: undefined;
    }) | undefined;
    /** Optional props to pass to selected pills. Will override attributes from pillProps */
    selectedPillProps?: (import("@valence-ui/utils/src/generics/Clickable").GenericClickableProps & import("@valence-ui/utils/src/generics/Events").MouseClickEvents & import("@valence-ui/utils/src/generics/Events").MouseEvents & import("@valence-ui/utils/src/generics/Events").PointerEvents & import("@valence-ui/utils/src/generics/Events").FocusEvents & import("@valence-ui/utils").PolymorphicElementProps & {
        css?: any;
    } & import("@valence-ui/utils/src/generics/Global").GenericProps & {
        color?: import("csstype").Property.Color | undefined;
        backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
        padding?: import("csstype").Property.Padding<string | number> | undefined;
        margin?: import("csstype").Property.Margin<string | number> | undefined;
        width?: import("csstype").Property.Width<string | number> | undefined;
        height?: import("csstype").Property.Height<string | number> | undefined;
    } & {
        variant?: import("@valence-ui/utils/src/generics/Global").FillVariant | undefined;
        size?: import("@valence-ui/utils/src/generics/Global").ComponentSize | undefined;
        radius?: import("@valence-ui/utils/src/generics/Global").ComponentSize | undefined;
        square?: boolean | undefined;
        shadow?: boolean | undefined;
        grow?: boolean | undefined;
        disabled?: boolean | undefined;
        loading?: boolean | undefined;
    } & {
        motion?: import("../../buttons").MotionBehaviourProps | undefined;
    } & {
        children?: string | undefined;
        textProps?: import("../../display").TextProps | undefined;
    } & {
        children?: undefined;
    }) | undefined;
    /** Optional props to pass to the pill container */
    pillContainerProps?: (import("@valence-ui/utils").GenericProps & {
        style?: import("@valence-ui/utils").ReactiveProp<import("react").CSSProperties> | undefined;
        tabIndex?: import("@valence-ui/utils").ReactiveProp<number> | undefined;
    } & {
        backgroundColor?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
        color?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Color | undefined>;
        padding?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
        margin?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
        width?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
        height?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
    } & import("@valence-ui/utils").PolymorphicElementProps & {
        css?: any;
    } & {
        direction?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.FlexDirection | undefined>;
        align?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.AlignItems | undefined>;
        justify?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.JustifyContent | undefined>;
        alignSelf?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.AlignSelf | undefined>;
        gap?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Gap<string | number> | undefined>;
        grow?: import("@valence-ui/utils").ReactiveProp<boolean> | undefined;
        wrap?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.FlexWrap | undefined>;
    } & {
        children?: undefined;
    }) | undefined;
    children?: undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=PillSelector.d.ts.map