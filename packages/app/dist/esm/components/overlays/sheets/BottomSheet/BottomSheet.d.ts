/// <reference types="react" />
import { MakeResponsive, FlexProps } from "@valence-ui/core";
import { GenericSheetProps } from "../Generics";
export type BottomSheetProps = GenericSheetProps & {
    /** The offset the sheet must be from its original position before it will close. Defaults to 50% of the viewport height */
    releaseOffset?: number;
    /** The velocity the sheet must be moving at before it will close. Defaults to `500` */
    releaseVelocity?: number;
    /** Whether to allow the sheet to scroll its inner content. Defaults to `false`. */
    allowInnerScrolling?: boolean;
    /** Optional props to apply to the inner flex component. */
    innerFlexProps?: FlexProps;
};
export declare const BottomSheet: import("react").ForwardRefExoticComponent<MakeResponsive<BottomSheetProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=BottomSheet.d.ts.map