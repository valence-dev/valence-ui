import { useEffect } from "react";
/** Detects when a key is pressed down and calls the callback function
 * @param callback The function to call when the key is pressed
 * @param keys A key or array of keys to detect
 * @param runCheck Whether to run the check or not
 * @param deps Any dependencies to pass to the useEffect hook
 */
export function useDetectKeyDown(callback, keys, runCheck, deps) {
    useEffect(() => {
        function handleKeyDown(e) {
            if (!runCheck)
                return;
            if (typeof keys === "string") {
                if (e.key === keys)
                    callback(e);
            }
            else {
                if (keys.includes(e.key))
                    callback(e);
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, deps);
}
