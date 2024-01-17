/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { Option } from "./Options";
import { InputContainerProps } from "../InputContainer";
import { CSSProperties } from "styled-components";
export type DropdownContainerEventProps = {
    onSelect?: (option: Option) => void;
};
export type DropdownContainerProps = InputContainerProps & DropdownContainerEventProps & {
    options: Option[];
    placeholder?: string;
    selected?: number | null;
    setSelected?: (option: number | null) => void;
    highlighted?: number | null;
    setHighlighted?: (option: number | null) => void;
    icon?: ReactNode;
    secondaryIcon?: ReactNode;
    dropdownStyle?: CSSProperties;
};
export declare function DropdownContainer(props: DropdownContainerProps): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DropdownContainer.d.ts.map