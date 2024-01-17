import { FocusEvents, KeyboardEvents, MouseClickEvents, MouseEvents, PointerEvents } from "@valence-ui/utils";
import { GenericInputProps } from "../../../generics";
import { ReactNode } from "react";
import { IconButtonProps, TextButtonProps } from "../../buttons";
import { FlexProps } from "../../layout";
import { CSSProperties } from "styled-components";
import { MakeResponsive } from "../../../utilities/responsive";
import { TextInputProps } from "../TextInput";
export type PillSelectorEventProps = MouseClickEvents & MouseEvents & PointerEvents & FocusEvents & KeyboardEvents & {
    /** Callback to be called when a pill is selected. */
    onPillSelected?: (value: string) => void;
    /** Callback to be called when a pill is deselected. */
    onPillDeselected?: (value: string) => void;
};
export type PillSelectorProps = GenericInputProps<string[]> & PillSelectorEventProps & {
    /** A list of pills to display */
    pills: string[];
    /** Optional callback to complete the state */
    setPills?: (pills: string[]) => void;
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
    clearButtonProps?: Omit<IconButtonProps, "children">;
    /** How the pills should wrap within their container. Defaults to `"nowrap"`. */
    wrap?: CSSProperties["flexWrap"];
    /** Optional props to pass to all pills */
    pillProps?: Omit<TextButtonProps, "children">;
    /** Optional props to pass to selected pills. Will override attributes from pillProps */
    selectedPillProps?: Omit<TextButtonProps, "children">;
    /** Optional props to pass to the pill container */
    pillContainerProps?: Omit<FlexProps, "children">;
    /** Whether to allow the creation of new pills or deletion of old ones.
     * This will not work if `wrap = "wrap"`.
     */
    allowEditing?: boolean;
    /** Placeholder text to display in the input. Will only show if `allowNew = true`. */
    placeholder?: string;
    /** Optional styles to pass to the input */
    inputProps?: Omit<TextInputProps, "value" | "setValue">;
    children?: never;
};
export declare const PillSelector: import("react").ForwardRefExoticComponent<MakeResponsive<PillSelectorProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=PillSelector.d.ts.map