/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { Option } from "./Options";
import { InputContainerProps } from "../InputContainer";
import { CSSProperties } from "styled-components";
export type DropdownContainerEventProps = {
    /** A callback fired when an item is selected. */
    onSelect?: (option: Option) => void;
};
export type DropdownContainerProps = InputContainerProps & DropdownContainerEventProps & {
    /** A list of options to display. */
    options: Option[];
    /** The placeholder text to display when no option is selected. */
    placeholder?: string;
    /** The currently selected option. */
    selected?: number | null;
    /** A callback to set the selected option. */
    setSelected?: (option: number | null) => void;
    /** The currently highlighted option. */
    highlighted?: number | null;
    /** A callback to set the highlighted option. */
    setHighlighted?: (option: number | null) => void;
    /** An icon to display in the input container. */
    icon?: ReactNode;
    /** A secondary icon to display in the input container. */
    secondaryIcon?: ReactNode;
    /** Optional styles to pass to the dropdown. */
    dropdownStyle?: CSSProperties;
};
export declare function DropdownContainer(props: DropdownContainerProps): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DropdownContainer.d.ts.map