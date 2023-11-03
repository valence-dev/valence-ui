import { ComponentSize, FillVariant } from "@valence-ui/utils/src/generics/Global";
import { GenericClickableEventProps, GenericClickableProps } from "@valence-ui/utils/src/generics/Clickable";
import { GenericLayoutProps } from "@valence-ui/utils/src/generics/Layout";
import { PolymorphicButtonProps } from "@valence-ui/utils";
export type GenericButtonProps = GenericClickableProps & GenericClickableEventProps & PolymorphicButtonProps & GenericLayoutProps & {
    /** This button's styling variant. Defaults to theme default */
    variant?: FillVariant;
    /** This button's size class. Defaults to theme default */
    size?: ComponentSize;
    /** This button's radius size class. Defaults to theme default */
    radius?: ComponentSize;
    /** Whether this button is square. */
    square?: boolean;
    /** Whether a shadow will be shown under this button */
    shadow?: boolean;
    /** Whether this button will grow to fill its container */
    grow?: boolean;
    /** Whether this button is disabled */
    disabled?: boolean;
    /** Whether this button is loading */
    loading?: boolean;
};
//# sourceMappingURL=Button.d.ts.map