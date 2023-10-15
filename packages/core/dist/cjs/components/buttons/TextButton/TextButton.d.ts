import { PrimitiveButtonProps } from "../PrimitiveButton";
import { TextProps } from "../../display";
export type TextButtonProps = PrimitiveButtonProps & {
    /** Children of this component. */
    children?: string;
    /** Properties to apply to the `Text` component. */
    textProps?: TextProps;
};
export declare function Button(props: TextButtonProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TextButton.d.ts.map