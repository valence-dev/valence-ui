/// <reference types="react" />
import { MotionBehaviourProps } from "../Helpers";
import { GenericButtonProps } from "../../../generics";
import { MakeResponsive } from "../../../utilities/responsive";
export type PrimitiveButtonProps = GenericButtonProps & {
    /** Defines motion behavior for this button. This will automatically be overridden if the user has reduced motion enabled on their device. */
    motion?: MotionBehaviourProps;
};
export declare const PrimitiveButton: import("react").ForwardRefExoticComponent<MakeResponsive<PrimitiveButtonProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=PrimitiveButton.d.ts.map