/// <reference types="react" />
import { PrimitiveButtonProps } from "../PrimitiveButton";
import { TextProps } from "../../display";
import { MakeResponsive } from "../../../utilities/responsive";
export type TextButtonProps = Omit<PrimitiveButtonProps, "children"> & {
    /** Children of this component. */
    children?: string;
    /** Properties to apply to the `Text` component. */
    textProps?: TextProps;
};
export declare const Button: import("react").ForwardRefExoticComponent<MakeResponsive<TextButtonProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=TextButton.d.ts.map