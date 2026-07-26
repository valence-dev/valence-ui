import { useEffect } from "react";

/**
 * A hook that sets the window title.
 * @param title The title to set.
 */
export function useWindowTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

/**
 * @deprecated Renamed to {@link useWindowTitle}. The PascalCase name meant
 * React's rules-of-hooks lint did not recognise it as a hook, so a conditional
 * or looped call went unreported. Kept as an alias for one release.
 */
export const UseWindowTitle = useWindowTitle;
