/// <reference types="react" />
import { Disclosure, MakeResponsive } from "../../..";
import { FlexProps } from "../../layout";
import { GenericOverlayHeaderProps, GenericOverlayProps } from "@valence-ui/utils";
export type ModalProps = GenericOverlayProps & {
    /** A disclosure to handle state information about this modal */
    disclosure: Disclosure;
    /** Optional props to pass to the flex component */
    flexProps?: FlexProps;
    /** Optional props to pass to the inner flex component */
    innerFlexProps?: FlexProps;
};
export declare const Modal: import("react").ForwardRefExoticComponent<MakeResponsive<ModalProps> & import("react").RefAttributes<unknown>>;
export type DefaultModalHeaderProps = GenericOverlayHeaderProps & {
    /** A disclosure to handle state information about this modal */
    disclosure: Disclosure;
};
export declare const DefaultModalHeader: import("react").ForwardRefExoticComponent<MakeResponsive<DefaultModalHeaderProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Modal.d.ts.map