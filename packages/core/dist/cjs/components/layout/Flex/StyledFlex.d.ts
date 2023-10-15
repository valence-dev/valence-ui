import { FlexProps } from "./Flex";
import { ComponentSize, FillVariant, ReactiveProp } from "@valence-ui/utils";
export type StyledFlexProps = FlexProps & {
    /** **[REACTIVE]** Sets the styling variant. Defaults to the theme default variant. */
    variant?: ReactiveProp<FillVariant>;
    /** **[REACTIVE]** Sets the size of this component. Defaults to the theme default size. */
    size?: ReactiveProp<ComponentSize>;
    /** **[REACTIVE]** Sets the radius of this component. Defaults to the theme default border size. */
    radius?: ReactiveProp<ComponentSize>;
    /** **[REACTIVE]** Whether to include a shadow underneath this component. Will display the theme default shadow. */
    shadow?: ReactiveProp<boolean>;
};
/** A styled version of the `Flex` component that offers many props in line with the button styling system */
export declare function StyledFlex(props: StyledFlexProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=StyledFlex.d.ts.map