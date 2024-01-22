"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppContext = exports.AppContext = void 0;
const react_1 = require("react");
exports.AppContext = (0, react_1.createContext)(null);
/** The `AppContext` is dispensed by the `AppContainer`, and allows control
 * and access to the sidebar and content information.
 */
const useAppContext = () => {
    const context = (0, react_1.useContext)(exports.AppContext);
    if (context === null) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
};
exports.useAppContext = useAppContext;
