import { useEffect } from "react";


export function useLockScroll(lock: boolean, elementId: string = "root") {

  useEffect(() => {
    const element = document.getElementById(elementId);

    if (!element) {
      console.warn(`Element with ID "${elementId}" not found.`);
      return;
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
};