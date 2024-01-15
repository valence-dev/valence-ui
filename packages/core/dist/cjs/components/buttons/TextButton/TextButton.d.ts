/// <reference types="react" />
import { PrimitiveButtonProps } from "../PrimitiveButton";
import { TextProps } from "../../display";
import { MakeResponsive } from "../../../responsive";
export type TextButtonProps = PrimitiveButtonProps & {
    /** Children of this component. */
    children?: string;
    /** Properties to apply to the `Text` component. */
    textProps?: TextProps;
};
export declare const Button: import("react").ForwardRefExoticComponent<MakeResponsive<TextButtonProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=TextButton.d.ts.map