/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { PrimitiveButtonProps } from "../PrimitiveButton";
import { TextProps } from "../../display";
export type MultipartButtonProps = PrimitiveButtonProps & {
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
export declare function MultipartButton(props: MultipartButtonProps): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=MultipartButton.d.ts.map