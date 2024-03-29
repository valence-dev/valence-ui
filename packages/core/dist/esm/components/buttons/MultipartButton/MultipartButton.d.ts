/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { PrimitiveButtonProps } from "../PrimitiveButton";
import { TextProps } from "../../display";
import { MakeResponsive } from "../../../utilities/responsive";
export type MultipartButtonProps = Omit<PrimitiveButtonProps, "children"> & {
    /** Title/main text content of this button  */
    title: string;
    /** Descriptive secondary text of this button */
    subtitle?: string;
    /** Icon to display on the left of the button */
    leftIcon?: ReactNode;
    /** Icon to display on the right of the button */
    rightIcon?: ReactNode;
    /** Props to pass to the title text component */
    titleProps?: TextProps;
    /** Props to pass to the subtitle text component */
    subtitleProps?: TextProps;
};
export declare const MultipartButton: import("react").ForwardRefExoticComponent<MakeResponsive<MultipartButtonProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=MultipartButton.d.ts.map