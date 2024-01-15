/// <reference types="react" />
import { MakeResponsive } from "@valence-ui/core";
import { GenericSheetProps } from "../Generics";
export type BottomSheetProps = GenericSheetProps & {
    /** The offset the sheet must be from its original position before it will close. Defaults to 50% of the viewport height */
    releaseOffset?: number;
    /** The velocity the sheet must be moving at before it will close. Defaults to `500` */
    releaseVelocity?: number;
};
export declare const BottomSheet: import("react").ForwardRefExoticComponent<MakeResponsive<BottomSheetProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=BottomSheet.d.ts.map