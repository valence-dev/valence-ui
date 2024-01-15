/// <reference types="react" />
import { MakeResponsive } from "../../..";
import { FlexProps } from "./Flex";
import { ComponentSize, FillVariant } from "@valence-ui/utils";
export type StyledFlexProps = FlexProps & {
    /** Sets the styling variant. Defaults to the theme default variant. */
    variant?: FillVariant;
    /** Sets the size of this component. Defaults to the theme default size. */
    size?: ComponentSize;
    /** Sets the radius of this component. Defaults to the theme default border size. */
    radius?: ComponentSize;
    /** Whether to include a shadow underneath this component. Will display the theme default shadow. */
    shadow?: boolean;
};
/** A styled version of the `Flex` component that offers many props in line with the button styling system */
export declare const StyledFlex: import("react").ForwardRefExoticComponent<MakeResponsive<StyledFlexProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=StyledFlex.d.ts.map