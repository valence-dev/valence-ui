import { useCallback, useMemo, useState } from "react";

export type Disclosure = {
  /** Whether the disclosure is open. */
  opened: boolean;
  /** Open the disclosure. */
  open: () => void;
  /** Close the disclosure. */
  close: () => void;
  /** Toggle the disclosure. */
  toggle: () => void;
  /** Manually update the disclosure. */
  update: (value: boolean) => void;
};

/** Returns a boolean value and functions to open and close the value */
export function useDisclosure(defaultValue: boolean = false): Disclosure {
  const [value, setValue] = useState(defaultValue ?? false);

  const open = useCallback(() => setValue(true), []);
  const close = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((value) => !value), []);
  const update = useCallback((value: boolean) => setValue(value), []);

  return useMemo(
    () => ({
      opened: value,
      open: open,
      close: close,
      toggle: toggle,
      update: update,
    }),
    [value, open, close, toggle, update],
  );
}
