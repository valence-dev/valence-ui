import { FocusEvents, KeyboardEvents, MouseClickEvents, MouseEvents, PointerEvents } from "@valence-ui/utils";
import { GenericInputProps } from "../../../generics";
import { ReactNode } from "react";
import { IconButtonProps, TextButtonProps } from "../../buttons";
import { FlexProps } from "../../layout";
import { MakeResponsive } from "../../../responsive";
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
export declare const PillSelector: import("react").ForwardRefExoticComponent<MakeResponsive<PillSelectorProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=PillSelector.d.ts.map