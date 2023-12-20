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
    /** This button does not accept children */
    children?: never;
};
export declare const MultipartButton: import("react").ForwardRefExoticComponent<import("@valence-ui/utils/src/generics/Clickable").GenericClickableProps & import("@valence-ui/utils/src/generics/Events").MouseClickEvents & import("@valence-ui/utils/src/generics/Events").MouseEvents & import("@valence-ui/utils/src/generics/Events").PointerEvents & import("@valence-ui/utils/src/generics/Events").FocusEvents & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & import("@valence-ui/utils/src/generics/Global").GenericProps & {
    color?: import("csstype").Property.Color | undefined;
    backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
    padding?: import("csstype").Property.Padding<string | number> | undefined;
    margin?: import("csstype").Property.Margin<string | number> | undefined;
    width?: import("csstype").Property.Width<string | number> | undefined;
    height?: import("csstype").Property.Height<string | number> | undefined;
} & {
    variant?: import("@valence-ui/utils/src/generics/Global").FillVariant | undefined;
    size?: import("@valence-ui/utils/src/generics/Global").ComponentSize | undefined;
    radius?: import("@valence-ui/utils/src/generics/Global").ComponentSize | undefined;
    square?: boolean | undefined;
    shadow?: boolean | undefined;
    grow?: boolean | undefined;
    disabled?: boolean | undefined;
    loading?: boolean | undefined;
} & {
    motion?: import("../Helpers").MotionBehaviourProps | undefined;
} & {
    /** Title/main text content of this button  */
    title: string;
    /** Descriptive secondary text of this button */
    subtitle?: string | undefined;
    /** Icon to display on the left of the button */
    leftIcon?: ReactNode;
    /** Icon to display on the right of the button */
    rightIcon?: ReactNode;
    /** Props to pass to the title text component */
    titleProps?: TextProps | undefined;
    /** Props to pass to the subtitle text component */
    subtitleProps?: TextProps | undefined;
    /** This button does not accept children */
    children?: undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=MultipartButton.d.ts.map