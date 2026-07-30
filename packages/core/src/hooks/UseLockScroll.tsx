import { useEffect } from "react";

/**
 * Locks (or unlocks) scrolling on a container while `lock` is true.
 *
 * By default this locks `document.body`, which works regardless of where the
 * consuming app mounts. Pass `elementId` to target a specific scroll
 * container instead - if an element with that ID can't be found, this falls
 * back to locking `document.body` rather than doing nothing.
 */
export function useLockScroll(lock: boolean, elementId?: string) {
  useEffect(() => {
    const namedElement = elementId ? document.getElementById(elementId) : null;
    const element = namedElement ?? document.body;

    if (elementId && !namedElement && process.env.NODE_ENV !== "production") {
      console.warn(
        `Element with ID "${elementId}" not found, locking scroll on document.body instead.`
      );
    }

    if (lock) {
      // Lock scroll
      element.style.overflow = "hidden";
    } else {
      // Unlock scroll
      element.style.overflow = "";
    }

    return () => {
      // Clean up when the component unmounts or lock state changes
      element.style.overflow = "";
    };
  }, [elementId, lock]);
}
