import { useState } from "react";

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

  const open = () => setValue(true);
  const close = () => setValue(false);
  const toggle = () => setValue(!value);
  const update = (value: boolean) => setValue(value);

  return {
    opened: value,
    open: open,
    close: close,
    toggle: toggle,
    update: update,
  };
}
