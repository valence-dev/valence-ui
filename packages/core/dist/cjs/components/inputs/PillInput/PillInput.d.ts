/** @jsxImportSource @emotion/react */
import { CSSProperties, ReactNode } from "react";
import { GenericInputProps, GenericTextInputEventProps } from "../../../generics";
import { IconButtonProps } from "../../buttons";
import { PillProps } from "../../display";
import { FlexProps } from "../../layout";
import { Option, OptionsFilter } from "../OptionContainer";
export type PillInputEventProps = GenericTextInputEventProps & {
    /** Callback to be called when a pill is added. */
    onPillAdd?: (value: string) => void;
    /** Callback to be called when a pill is removed. */
    onPillRemove?: (value: string) => void;
};
export type PillInputProps = GenericInputProps<string[]> & PillInputEventProps & {
    /** An icon to display at the left side of this input */
    icon?: ReactNode;
    /** The placeholder text to display when this input is empty */
    placeholder?: string;
    /** Keys used to autofill a pill. Defaults to `Tab` */
    autofillKeys?: string[];
    /** Keys used to select an option. Defaults to `Enter` and `Space` */
    selectKeys?: string[];
    /** A list of options to supply for the content of this input */
    options?: Option[];
    /** A filter to apply to the options as the user types. `DefaultOptionsFilter` by default */
    filter?: OptionsFilter;
    /** A message to display when no options are found */
    nothingFound?: string | ReactNode;
    /** Whether to allow duplicate pills. `false` by default. */
    allowDuplicates?: boolean;
    /** Whether to allow pills to be cleared. `true` by default. */
    allowClear?: boolean;
    /** Whether to allow the user to remove pills with backspace. `true` by default. */
    allowBackspaceRemove?: boolean;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;
    /** The maximum number of pills allowed. `Infinity` by default. */
    maxPills?: number;
    /** The minimum length of this input. `0` by default. */
    minLength?: number;
    /** The maximum length of this input. `Infinity` by default. */
    maxLength?: number;
    /** An icon to use for the clear button. Defaults to `IconX`. */
    clearButtonIcon?: ReactNode;
    /** Optional props to pass to the clear button */
    clearButtonProps?: IconButtonProps & {
        children?: never;
    };
    /** Optional props to pass to all pills */
    pillProps?: PillProps & {
        children?: never;
    };
    /** Optional props to pass to the pill container */
    pillContainerProps?: FlexProps & {
        children?: never;
    };
    /** Optional styles to apply to the input component */
    inputStyle?: CSSProperties;
    /** Optional styles to apply to the dropdown component */
    dropdownStyle?: CSSProperties;
    children?: never;
};
export declare const PillInput: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
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
    radius?: import("@valence-ui/utils").ComponentSize | undefined;
    variant?: import("@valence-ui/utils").FillVariant | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    required?: boolean | undefined;
    autoFocus?: boolean | undefined;
    loading?: boolean | undefined;
    form?: string | undefined;
    name?: string | undefined;
} & import("@valence-ui/utils/src/generics/Events").MouseClickEvents & import("@valence-ui/utils/src/generics/Events").MouseEvents & import("@valence-ui/utils/src/generics/Events").PointerEvents & import("@valence-ui/utils/src/generics/Events").FocusEvents & import("@valence-ui/utils/src/generics/Events").KeyboardEvents & {
    onInput?: ((event: import("react").FormEvent<Element>) => void) | undefined;
    onChange?: ((event: import("react").FormEvent<Element>) => void) | undefined;
    onInvalid?: ((event: import("react").FormEvent<Element>) => void) | undefined;
    onEnterPress?: ((e: import("react").KeyboardEvent<Element>) => void) | undefined;
} & {
    /** Callback to be called when a pill is added. */
    onPillAdd?: ((value: string) => void) | undefined;
    /** Callback to be called when a pill is removed. */
    onPillRemove?: ((value: string) => void) | undefined;
} & {
    /** An icon to display at the left side of this input */
    icon?: ReactNode;
    /** The placeholder text to display when this input is empty */
    placeholder?: string | undefined;
    /** Keys used to autofill a pill. Defaults to `Tab` */
    autofillKeys?: string[] | undefined;
    /** Keys used to select an option. Defaults to `Enter` and `Space` */
    selectKeys?: string[] | undefined;
    /** A list of options to supply for the content of this input */
    options?: Option[] | undefined;
    /** A filter to apply to the options as the user types. `DefaultOptionsFilter` by default */
    filter?: OptionsFilter | undefined;
    /** A message to display when no options are found */
    nothingFound?: string | ReactNode;
    /** Whether to allow duplicate pills. `false` by default. */
    allowDuplicates?: boolean | undefined;
    /** Whether to allow pills to be cleared. `true` by default. */
    allowClear?: boolean | undefined;
    /** Whether to allow the user to remove pills with backspace. `true` by default. */
    allowBackspaceRemove?: boolean | undefined;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean | undefined;
    /** The maximum number of pills allowed. `Infinity` by default. */
    maxPills?: number | undefined;
    /** The minimum length of this input. `0` by default. */
    minLength?: number | undefined;
    /** The maximum length of this input. `Infinity` by default. */
    maxLength?: number | undefined;
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
        radius?: import("@valence-ui/utils/src/generics/Global").ComponentSize | undefined; /** Callback to be called when a pill is added. */
        square?: boolean | undefined;
        shadow?: boolean | undefined;
        grow?: boolean | undefined;
        disabled?: boolean | undefined;
        loading?: boolean | undefined;
    } & {
        motion?: import("../../buttons").MotionBehaviourProps | undefined;
    } & {
        children?: undefined;
    }) | undefined;
    /** Optional props to pass to all pills */
    pillProps?: (import("@valence-ui/utils").GenericProps & {
        color?: import("csstype").Property.Color | undefined;
        backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
        padding?: import("csstype").Property.Padding<string | number> | undefined;
        margin?: import("csstype").Property.Margin<string | number> | undefined;
        width?: import("csstype").Property.Width<string | number> | undefined;
        height?: import("csstype").Property.Height<string | number> | undefined;
    } & import("@valence-ui/utils").PolymorphicElementProps & {
        css?: any;
    } & import("@valence-ui/utils").MouseClickEvents & import("@valence-ui/utils").MouseEvents & import("@valence-ui/utils").PointerEvents & import("@valence-ui/utils").FocusEvents & import("@valence-ui/utils").GenericClickableProps & {
        variant?: import("@valence-ui/utils").FillVariant | undefined;
        size?: import("@valence-ui/utils").ComponentSize | undefined;
        radius?: import("@valence-ui/utils").ComponentSize | undefined;
        withRemoveButton?: boolean | undefined;
        removeButtonIcon?: ReactNode;
        removeButtonProps?: (import("@valence-ui/utils/src/generics/Clickable").GenericClickableProps & import("@valence-ui/utils/src/generics/Events").MouseClickEvents & import("@valence-ui/utils/src/generics/Events").MouseEvents & import("@valence-ui/utils/src/generics/Events").PointerEvents & import("@valence-ui/utils/src/generics/Events").FocusEvents & import("@valence-ui/utils").PolymorphicElementProps & {
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
            radius?: import("@valence-ui/utils/src/generics/Global").ComponentSize | undefined; /** Callback to be called when a pill is added. */
            square?: boolean | undefined;
            shadow?: boolean | undefined;
            grow?: boolean | undefined;
            disabled?: boolean | undefined;
            loading?: boolean | undefined;
        } & {
            motion?: import("../../buttons").MotionBehaviourProps | undefined;
        } & {
            children?: undefined;
        }) | undefined;
        onRemove?: (() => void) | undefined;
        textProps?: (import("@valence-ui/utils").GenericProps & import("@valence-ui/utils").GenericClickableProps & import("@valence-ui/utils").PolymorphicElementProps & {
            css?: any;
        } & {
            family?: import("csstype").Property.FontFamily | undefined;
            weight?: import("csstype").Property.FontWeight | undefined;
            fontSize?: import("csstype").Property.FontSize<string | number> | undefined;
            align?: import("csstype").Property.TextAlign | undefined;
            transform?: import("csstype").Property.TextTransform | undefined;
            size?: import("@valence-ui/utils").ComponentSize | undefined;
            color?: import("csstype").Property.Color | undefined;
            italic?: boolean | undefined;
            bold?: boolean | undefined;
            monospace?: boolean | undefined;
        } & {
            children?: undefined;
        }) | undefined;
        children?: string | undefined;
    } & {
        children?: undefined;
    }) | undefined;
    /** Optional props to pass to the pill container */
    pillContainerProps?: (import("@valence-ui/utils").GenericProps & {
        style?: import("@valence-ui/utils").ReactiveProp<CSSProperties> | undefined;
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
    /** Optional styles to apply to the input component */
    inputStyle?: CSSProperties | undefined;
    /** Optional styles to apply to the dropdown component */
    dropdownStyle?: CSSProperties | undefined;
    children?: undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=PillInput.d.ts.map