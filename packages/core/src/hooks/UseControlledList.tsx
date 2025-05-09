import { useState } from "react";

export type ControlledList<T> = {
  /** The list of items */
  items: T[];
  /** Add an item to the list */
  add: (item: T) => void;
  /** Remove an item from the list */
  remove: (item: T) => void;
  /** Override all items in the list */
  update: (items: T[]) => void;
  /** Clear the list */
  clear: () => void;

  /** Whether the list includes an item */
  includes: (item: T) => boolean;
};

export function useControlledList<T = string>(
  defaultValue?: T[]
): ControlledList<T> {
  const [items, setItems] = useState<T[]>(defaultValue ?? []);

  const add = (item: T) => setItems([...items, item]);
  const remove = (item: T) => setItems(items.filter((i) => i !== item));
  const update = (items: T[]) => setItems(items);
  const clear = () => setItems([]);

  const includes = (item: T) => items.includes(item);

  return {
    items: items,
    add: add,
    remove: remove,
    update: update,
    clear: clear,
    includes: includes,
  };
}
