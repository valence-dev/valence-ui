/// <reference types="react" />
import { Disclosure } from "@valence-ui/core";
export type AppContextType = {
    /** A disclosure to control the sidebar on this page, if it exists */
    sidebarDisclosure: Disclosure;
    /** The width of the content area */
    contentWidth: number;
    /** The width of the left sidebar */
    leftWidth: number;
} | null;
export declare const AppContext: import("react").Context<AppContextType>;
/** The `AppContext` is dispensed by the `AppContainer`, and allows control
 * and access to the sidebar and content information.
 */
export declare const useAppContext: () => {
    /** A disclosure to control the sidebar on this page, if it exists */
    sidebarDisclosure: Disclosure;
    /** The width of the content area */
    contentWidth: number;
    /** The width of the left sidebar */
    leftWidth: number;
};
//# sourceMappingURL=AppContext.d.ts.map