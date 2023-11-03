import { CSSProperties } from "react";
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
export declare const StyledFlex: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    style?: ReactiveProp<CSSProperties> | undefined;
    tabIndex?: ReactiveProp<number> | undefined;
} & {
    backgroundColor?: ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
    color?: ReactiveProp<import("csstype").Property.Color | undefined>;
    padding?: ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
    margin?: ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
    width?: ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
    height?: ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
} & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & {
    direction?: ReactiveProp<import("csstype").Property.FlexDirection | undefined>;
    align?: ReactiveProp<import("csstype").Property.AlignItems | undefined>;
    justify?: ReactiveProp<import("csstype").Property.JustifyContent | undefined>;
    alignSelf?: ReactiveProp<import("csstype").Property.AlignSelf | undefined>;
    gap?: ReactiveProp<import("csstype").Property.Gap<string | number> | undefined>;
    grow?: ReactiveProp<boolean> | undefined;
    wrap?: ReactiveProp<import("csstype").Property.FlexWrap | undefined>;
} & {
    /** **[REACTIVE]** Sets the styling variant. Defaults to the theme default variant. */
    variant?: ReactiveProp<FillVariant> | undefined;
    /** **[REACTIVE]** Sets the size of this component. Defaults to the theme default size. */
    size?: ReactiveProp<ComponentSize> | undefined;
    /** **[REACTIVE]** Sets the radius of this component. Defaults to the theme default border size. */
    radius?: ReactiveProp<ComponentSize> | undefined;
    /** **[REACTIVE]** Whether to include a shadow underneath this component. Will display the theme default shadow. */
    shadow?: ReactiveProp<boolean> | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=StyledFlex.d.ts.map