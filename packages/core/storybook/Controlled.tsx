import { ReactNode, useState } from "react";

export type ControlledProps<T> = {
  /** The value the input starts at. */
  initial: T;
  /** Renders the input against the state this component owns. */
  children: (value: T, setValue: (value: T) => void) => ReactNode;
};

/**
 * Owns the state for one controlled input.
 *
 * Every input in the library is fully controlled — `value` in, `setValue` out,
 * with no uncontrolled fallback — so a story that wants to show ten inputs at
 * once would otherwise need ten `useState` calls in its render function, in a
 * fixed order that a `map` cannot produce. Wrapping each case in one of these
 * gives it its own state without the story having to hold any, which is what
 * lets an input's cases be generated from a `Matrix` like every other
 * component's.
 *
 * ```tsx
 * <Controlled initial="">
 *   {(value, setValue) => <TextInput value={value} setValue={setValue} />}
 * </Controlled>
 * ```
 */
export function Controlled<T>(props: ControlledProps<T>) {
  const [value, setValue] = useState<T>(props.initial);
  return <>{props.children(value, setValue)}</>;
}
