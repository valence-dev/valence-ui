import { Disclosure } from "@valence-ui/core";
import { createContext, useContext } from "react";

export type AppContainerContextType = { 
  /** A disclosure to control the drawer on this page, if it exists */
  drawerDisclosure: Disclosure;
} | null;
export const AppContainerContext = createContext<AppContainerContextType>(null);


/** The `AppContext` is dispensed by the `AppContainer`, and allows control
 * and access to the sidebar and content information.
 */
export const useAppContainerContext = () => { 
  const context = useContext(AppContainerContext);
  if (context === null) { 
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
}