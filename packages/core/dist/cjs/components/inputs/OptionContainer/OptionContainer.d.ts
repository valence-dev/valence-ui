import { GenericLayoutProps } from "@valence-ui/utils";
import { TextButtonProps } from "../../buttons";
import { InputContainerProps } from "../InputContainer";
import { Option } from "./OptionsFilter";
import { CSSProperties, ReactNode } from "react";
export type OptionContainerEventProps = {
    /** Callback to be called when an option is selected. */
    onSelect?: (value: Option) => void;
};
export type OptionContainerProps = InputContainerProps & OptionContainerEventProps & {
    /** The currently selected option */
    selectedOption?: Option;
    /** A list of options to supply for the content of this input */
    options: Option[];
    /** A message to display when no options are found */
    nothingFound?: string | ReactNode;
    /** An icon to display to the right of the input */
    rightIcon?: ReactNode;
    /** Optional props to pass to the dropdown container */
    dropdownProps?: OptionDropdownProps;
    /** Optional props to pass to the dropdown buttons */
    dropdownButtonProps?: TextButtonProps & {
        children?: never;
    };
    /** Keys the user can press to select an option. Defaults to "Enter". */
    selectKeys?: string[];
    /** Keys the user can press to close the dropdown. Defaults to "Escape". */
    closeKeys?: string[];
    /** Optional styles to pass to the dropdown element */
    dropdownStyle?: CSSProperties;
};
export type OptionDropdownProps = GenericLayoutProps & {
    /** Whether to include a shadow */
    shadow?: boolean;
    children?: never;
};
export declare const OptionContainer: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    color?: import("csstype").Property.Color | undefined;
    backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
    padding?: import("csstype").Property.Padding<string | number> | undefined;
    margin?: import("csstype").Property.Margin<string | number> | undefined;
    width?: import("csstype").Property.Width<string | number> | undefined;
    height?: import("csstype").Property.Height<string | number> | undefined;
} & import("@valence-ui/utils").MouseClickEvents & import("@valence-ui/utils").MouseEvents & import("@valence-ui/utils").PointerEvents & {
    icon?: ReactNode;
    button?: ReactNode;
    size?: import("@valence-ui/utils").ComponentSize | undefined;
    radius?: import("@valence-ui/utils").ComponentSize | undefined;
    variant?: import("@valence-ui/utils").FillVariant | undefined;
    grow?: boolean | undefined;
    disabled?: boolean | undefined;
    required?: boolean | undefined;
    loading?: boolean | undefined;
    inputRef?: any;
    iconContainerStyle?: CSSProperties | undefined;
    requireIndicatorStyle?: CSSProperties | undefined; /** Optional props to pass to the dropdown buttons */
    buttonContainerStyle?: CSSProperties | undefined;
} & OptionContainerEventProps & {
    /** The currently selected option */
    selectedOption?: Option | undefined;
    /** A list of options to supply for the content of this input */
    options: Option[];
    /** A message to display when no options are found */
    nothingFound?: string | ReactNode;
    /** An icon to display to the right of the input */
    rightIcon?: ReactNode;
    /** Optional props to pass to the dropdown container */
    dropdownProps?: OptionDropdownProps | undefined;
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
    /** Keys the user can press to select an option. Defaults to "Enter". */
    selectKeys?: string[] | undefined;
    /** Keys the user can press to close the dropdown. Defaults to "Escape". */
    closeKeys?: string[] | undefined;
    /** Optional styles to pass to the dropdown element */
    dropdownStyle?: CSSProperties | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=OptionContainer.d.ts.map