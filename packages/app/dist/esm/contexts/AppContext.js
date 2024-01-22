import { createContext, useContext } from "react";
export const AppContext = createContext(null);
/** The `AppContext` is dispensed by the `AppContainer`, and allows control
 * and access to the sidebar and content information.
 */
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === null) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
};
