import { useState } from "react";

export type Disclosure = {
  opened: boolean;
  open: () => void;
  close: () => void;
  update: (value: boolean) => void;
}

/** Returns a boolean value and functions to open and close the value */
export function useDisclosure(defaultValue: boolean = false): Disclosure { 
  const [value, setValue] = useState(defaultValue ?? false);

  const open = () => setValue(true);
  const close = () => setValue(false);
  const update = (value: boolean) => setValue(value);

  return {
    opened: value,
    open: open,
    close: close,
    update: update,
  };
}