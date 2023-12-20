import { CSSProperties, ReactNode } from "react";
import { GenericInputProps, GenericTextInputEventProps } from "../../../generics";
import { TextButtonProps } from "../../buttons";
import { GenericLayoutProps } from "@valence-ui/utils";
import { Option, OptionsFilter } from "../OptionContainer/OptionsFilter";
export type SelectInputEventProps = GenericTextInputEventProps & {
    /** Callback to be called when an option is selected. */
    onSelect?: (value: Option) => void;
};
export type SelectInputProps = GenericInputProps<Option> & SelectInputEventProps & {
    /** A list of options to supply for the content of this input */
    options: Option[];
    /** A filter to apply to the options as the user types. `DefaultOptionsFilter` by default */
    filter?: OptionsFilter;
    /** A message to display when no options are found */
    nothingFound?: string;
    /** An icon to display at the left side of this input */
    icon?: ReactNode;
    /** The placeholder text to display when this input is empty */
    placeholder?: string;
    /** An icon to display at the right side of this input */
    actionIcon?: ReactNode;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;
    /** Optional props to pass to the dropdown container */
    dropdownProps?: SelectDropdownProps;
    /** Optional props to pass to the dropdown buttons */
    dropdownButtonProps?: TextButtonProps & {
        children?: never;
    };
    /** Optional styles to apply to the input component */
    inputStyle?: CSSProperties;
    /** Optional styles to apply to the dropdown container */
    dropdownStyle?: CSSProperties;
    children?: never;
};
export type SelectDropdownProps = GenericLayoutProps & {
    /** Whether to include a shadow */
    shadow?: boolean;
    children?: never;
};
export declare const SelectInput: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    color?: import("csstype").Property.Color | undefined;
    backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
    padding?: import("csstype").Property.Padding<string | number> | undefined;
    margin?: import("csstype").Property.Margin<string | number> | undefined;
    width?: import("csstype").Property.Width<string | number> | undefined;
    height?: import("csstype").Property.Height<string | number> | undefined;
} & {
    value: Option;
    setValue: import("react").Dispatch<import("react").SetStateAction<Option>>;
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
    /** Callback to be called when an option is selected. */
    onSelect?: ((value: Option) => void) | undefined;
} & {
    /** A list of options to supply for the content of this input */
    options: Option[];
    /** A filter to apply to the options as the user types. `DefaultOptionsFilter` by default */
    filter?: OptionsFilter | undefined;
    /** A message to display when no options are found */
    nothingFound?: string | undefined;
    /** An icon to display at the left side of this input */
    icon?: ReactNode;
    /** The placeholder text to display when this input is empty */
    placeholder?: string | undefined;
    /** An icon to display at the right side of this input */
    actionIcon?: ReactNode;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean | undefined;
    /** Optional props to pass to the dropdown container */
    dropdownProps?: SelectDropdownProps | undefined;
    /** Optional props to pass to the dropdown buttons */
    dropdownButtonProps?: (import("@valence-ui/utils/src/generics/Clickable").GenericClickableProps & import("@valence-ui/utils/src/generics/Events").MouseClickEvents & import("@valence-ui/utils/src/generics/Events").MouseEvents & import("@valence-ui/utils/src/generics/Events").PointerEvents & import("@valence-ui/utils/src/generics/Events").FocusEvents & import("@valence-ui/utils").PolymorphicElementProps & {
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
        radius?: import("@valence-ui/utils/src/generics/Global").ComponentSize | undefined; /** Callback to be called when an option is selected. */
        square?: boolean | undefined;
        shadow?: boolean | undefined;
        grow?: boolean | undefined;
        disabled?: boolean | undefined;
        loading?: boolean | undefined;
    } & {
        motion?: import("../../buttons").MotionBehaviourProps | undefined;
    } & {
        children?: string | undefined;
        textProps?: import("../..").TextProps | undefined;
    } & {
        children?: undefined;
    }) | undefined;
    /** Optional styles to apply to the input component */
    inputStyle?: CSSProperties | undefined;
    /** Optional styles to apply to the dropdown container */
    dropdownStyle?: CSSProperties | undefined;
    children?: undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=SelectInput.d.ts.map