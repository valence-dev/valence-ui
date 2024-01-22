/// <reference types="react" />
/** @jsxImportSource @emotion/react */
import { FocusEvents } from "@valence-ui/utils";
import { PrimitiveButtonProps } from "../../buttons";
import { TextProps } from "../../display";
import { GenericInputProps } from "../../../generics";
import { MakeResponsive } from "../../../utilities/responsive";
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
export declare const Switch: import("react").ForwardRefExoticComponent<MakeResponsive<SwitchProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Switch.d.ts.map