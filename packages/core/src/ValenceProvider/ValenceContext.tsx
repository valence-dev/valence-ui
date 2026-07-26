import { createContext, useContext } from "react";
import type { IValenceContext } from "./ValenceProvider.types";

/** The context every Valence component reads its theme from.
 *
 * This lives in its own module — separate from `<ValenceProvider />` — so that
 * the utilities and hooks the provider itself depends on (`useColors`,
 * `useColorScheme`, `useBreakpoint`, the materials) can reach the context
 * without importing the provider, which would close a require cycle.
 */
export const ValenceContext = createContext<IValenceContext | null>(null);

export const useValence = () => {
  const context = useContext(ValenceContext);

  if (context === null)
    throw new Error(
      "Valence components must be wrapped in <ValenceProvider />",
    );

  return context;
};
