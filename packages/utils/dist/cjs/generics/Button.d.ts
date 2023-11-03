import { ComponentSize, FillVariant } from "./Global";
import { GenericClickableEventProps, GenericClickableProps } from "./Clickable";
export type GenericButtonProps = GenericClickableProps & GenericClickableEventProps & {
    /** Sets styling variant. Defaults to theme default */
    variant?: FillVariant;
    /** Sets size class. Defaults to theme default */
    size?: ComponentSize;
    /** Sets radius size class. Defaults to theme default */
    radius?: ComponentSize;
};
//# sourceMappingURL=Button.d.ts.map