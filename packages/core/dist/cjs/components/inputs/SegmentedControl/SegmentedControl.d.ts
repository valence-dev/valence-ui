import { CSSProperties, ReactNode } from "react";
import { GenericInputProps } from "../../../generics";
import { StyledFlexProps } from "../../layout";
import { PrimitiveButtonProps } from "../../buttons";
export type SegmentedControlOption = {
    /** The value of this option */
    value: string;
    /** The label to display for this option */
    label?: string | ReactNode;
} | string;
export type SegmentedControlEventProps = {
    /** Callback to be called when an option is selected. */
    onSelect?: (value: SegmentedControlOption) => void;
};
export type SegmentedControlProps = GenericInputProps<string> & StyledFlexProps & SegmentedControlEventProps & {
    /** A list of options to supply for the content of this input */
    options: SegmentedControlOption[];
    /** Whether every option should have an equal width. `true` by default. */
    equalWidth?: boolean;
    /** Do not supply children to this element */
    children?: never;
    /** Optional props to pass to the child button components */
    buttonProps?: PrimitiveButtonProps;
};
export declare const SegmentedControl: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    color?: import("csstype").Property.Color | undefined;
    backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
    padding?: import("csstype").Property.Padding<string | number> | undefined;
    margin?: import("csstype").Property.Margin<string | number> | undefined;
    width?: import("csstype").Property.Width<string | number> | undefined;
    height?: import("csstype").Property.Height<string | number> | undefined;
} & {
    value: string;
    setValue: import("react").Dispatch<import("react").SetStateAction<string>>;
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
} & {
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
    variant?: import("@valence-ui/utils").ReactiveProp<import("@valence-ui/utils").FillVariant> | undefined;
    size?: import("@valence-ui/utils").ReactiveProp<import("@valence-ui/utils").ComponentSize> | undefined;
    radius?: import("@valence-ui/utils").ReactiveProp<import("@valence-ui/utils").ComponentSize> | undefined;
    shadow?: import("@valence-ui/utils").ReactiveProp<boolean> | undefined;
} & SegmentedControlEventProps & {
    /** A list of options to supply for the content of this input */
    options: SegmentedControlOption[];
    /** Whether every option should have an equal width. `true` by default. */
    equalWidth?: boolean | undefined;
    /** Do not supply children to this element */
    children?: undefined;
    /** Optional props to pass to the child button components */
    buttonProps?: PrimitiveButtonProps | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=SegmentedControl.d.ts.map