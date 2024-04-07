/// <reference types="react" />
import { Disclosure } from "@valence-ui/core";
export type AppContainerContextType = {
    /** A disclosure to control the drawer on this page, if it exists */
    drawerDisclosure: Disclosure;
} | null;
export declare const AppContainerContext: import("react").Context<AppContainerContextType>;
/** The `AppContext` is dispensed by the `AppContainer`, and allows control
 * and access to the sidebar and content information.
 */
export declare const useAppContainerContext: () => {
    /** A disclosure to control the drawer on this page, if it exists */
    drawerDisclosure: Disclosure;
};
//# sourceMappingURL=AppContainer.d.ts.map