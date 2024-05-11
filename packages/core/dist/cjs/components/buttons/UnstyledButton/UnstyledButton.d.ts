/// <reference types="react" />
/** @jsxImportSource @emotion/react */
import { GenericClickableEventProps, GenericClickableProps, GenericProps, PolymorphicButtonProps } from "@valence-ui/utils";
import { MakeResponsive } from "../../../utilities/responsive";
import { MotionBehaviourProps } from "../Helpers";
export type UnstyledButtonProps = PolymorphicButtonProps & GenericClickableEventProps & GenericClickableProps & GenericProps & {
    /** Defines motion behavior for this button. This will automatically be overridden if the user has reduced motion enabled on their device. */
    motion?: MotionBehaviourProps;
};
export declare const UnstyledButton: import("react").ForwardRefExoticComponent<MakeResponsive<UnstyledButtonProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=UnstyledButton.d.ts.map