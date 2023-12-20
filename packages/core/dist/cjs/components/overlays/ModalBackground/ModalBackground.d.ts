/// <reference types="react" />
import { Disclosure } from "../../..";
import { GenericOverlayBackgroundProps } from "@valence-ui/utils";
export type ModalBackgroundProps = GenericOverlayBackgroundProps & {
    /** A disclosure to specify state information about the modal */
    disclosure: Disclosure;
};
export declare const ModalBackground: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & {
    closeOnClick?: boolean | undefined;
    backdropFilter?: import("@valence-ui/utils").BackdropFilter | undefined;
    backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
    padding?: import("csstype").Property.Padding<string | number> | undefined;
    zIndex?: import("csstype").Property.ZIndex | undefined;
} & {
    /** A disclosure to specify state information about the modal */
    disclosure: Disclosure;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=ModalBackground.d.ts.map