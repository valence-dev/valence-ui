import { ReactNode } from "react";
import { GenericInputProps } from "../../../generics";
import { StyledFlexProps } from "../../layout";
import { PrimitiveButtonProps } from "../../buttons";
import { MakeResponsive } from "../../../responsive";
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
export declare const SegmentedControl: import("react").ForwardRefExoticComponent<MakeResponsive<SegmentedControlProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=SegmentedControl.d.ts.map