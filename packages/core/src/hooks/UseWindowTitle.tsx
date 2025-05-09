import { useEffect } from "react";

/**
 * A hook that sets the window title.
 * @param title The title to set.
 */
export function UseWindowTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
