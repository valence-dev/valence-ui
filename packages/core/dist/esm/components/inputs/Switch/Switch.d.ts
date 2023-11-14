/// <reference types="react" />
/** @jsxImportSource @emotion/react */
import { FocusEvents } from "@valence-ui/utils";
import { PrimitiveButtonProps } from "../../buttons";
import { TextProps } from "../../display";
import { GenericInputProps } from "../../../generics";
export type SwitchProps = GenericInputProps<boolean> & FocusEvents & {
    /** The label associated with this input */
    label?: string;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;
    /** Optional props to pass to the `Button` container component */
    buttonProps?: PrimitiveButtonProps;
    /** Optional props to pass to the `Text` label component */
    labelProps?: TextProps;
};
export declare const Switch: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    color?: import("csstype").Property.Color | undefined;
    backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
    padding?: import("csstype").Property.Padding<string | number> | undefined;
    margin?: import("csstype").Property.Margin<string | number> | undefined; /** The label associated with this input */
    width?: import("csstype").Property.Width<string | number> | undefined; /** Shorthand for `flex-grow = 1` */
    height?: import("csstype").Property.Height<string | number> | undefined;
} & {
    value: boolean;
    setValue: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    size?: import("@valence-ui/utils").ComponentSize | undefined;
    radius?: import("@valence-ui/utils").ComponentSize | undefined; /** Optional props to pass to the `Text` label component */
    variant?: import("@valence-ui/utils").FillVariant | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    required?: boolean | undefined;
    autoFocus?: boolean | undefined;
    loading?: boolean | undefined;
    form?: string | undefined;
    name?: string | undefined;
} & FocusEvents & {
    /** The label associated with this input */
    label?: string | undefined;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean | undefined;
    /** Optional props to pass to the `Button` container component */
    buttonProps?: PrimitiveButtonProps | undefined;
    /** Optional props to pass to the `Text` label component */
    labelProps?: TextProps | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Switch.d.ts.map