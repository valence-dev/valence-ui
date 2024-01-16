import { Disclosure } from "@valence-ui/core";
import { createContext, useContext } from "react";

export type AppContextType = { 
  /** A disclosure to control the sidebar on this page, if it exists */
  sidebarDisclosure: Disclosure;

  /** The width of the content area */
  contentWidth: number;
  /** The width of the left sidebar */
  leftWidth: number;
} | null;
export const AppContext = createContext<AppContextType>(null);


/** The `AppContext` is dispensed by the `AppContainer`, and allows control
 * and access to the sidebar and content information.
 */
export const useAppContext = () => { 
  const context = useContext(AppContext);
  if (context === null) { 
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
}