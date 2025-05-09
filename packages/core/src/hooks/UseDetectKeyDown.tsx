import { useEffect } from "react";

/** Detects when a key is pressed down and calls the callback function
 * @param callback The function to call when the key is pressed.
 * @param keys A key or array of keys to listen for.
 * @param runCheck Whether to listen for keyboard events.
 * @param deps Any dependencies to pass to the `useEffect` hook.
 */
export function useDetectKeyDown(
  callback: (e: KeyboardEvent) => void,
  keys: string | string[],
  runCheck?: boolean,
  deps?: any[]
) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!runCheck) return;
      if (typeof keys === "string") {
        if (e.key === keys) callback(e);
      } else {
        if (keys.includes(e.key)) callback(e);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, deps);
}
