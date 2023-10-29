/** @jsxImportSource @emotion/react */
import { ComponentSize, GenericLayoutProps } from "@valence-ui/utils";
import { Dispatch, SetStateAction, SyntheticEvent } from "react";
import { PrimitiveButtonProps } from "../../buttons";
import { TextProps } from "../../display";
export type SwitchInputProps = GenericLayoutProps & {
    /** The value of the input */
    checked: boolean;
    /** Sets the value of the input */
    setChecked: Dispatch<SetStateAction<boolean>>;
    /** The label associated with this input */
    label?: string;
    /** Sets the size class. Defaults to theme default */
    size?: ComponentSize;
    /** Sets the radius size class. Defaults to `"xl"` */
    radius?: ComponentSize;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;
    /** Specifies if this input is disabled */
    disabled?: boolean;
    /** Specifies if this input is read only */
    readOnly?: boolean;
    /** If set, this input will be replaced with a loader */
    loading?: boolean;
    /** Called when this input is focused */
    onFocus?: (e: SyntheticEvent<HTMLInputElement, Event>) => void;
    /** Called when this input is blurred */
    onBlur?: (e: SyntheticEvent<HTMLInputElement, Event>) => void;
    /** Optional props to pass to the `Button` container component */
    buttonProps: PrimitiveButtonProps;
    /** Optional props to pass to the `Text` label component */
    labelProps: TextProps;
};
export declare function SwitchInput(props: SwitchInputProps): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SwitchInput.d.ts.map