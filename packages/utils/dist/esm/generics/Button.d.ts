import { ComponentSize, FillVariant } from "../../../dist/esm/generics/Global";
import { GenericClickableEventProps, GenericClickableProps } from "../../../dist/esm/generics/Clickable";
export type GenericButtonProps = GenericClickableProps & GenericClickableEventProps & {
    /** Sets styling variant. Defaults to theme default */
    variant?: FillVariant;
    /** Sets size class. Defaults to theme default */
    size?: ComponentSize;
    /** Sets radius size class. Defaults to theme default */
    radius?: ComponentSize;
};
//# sourceMappingURL=Button.d.ts.map