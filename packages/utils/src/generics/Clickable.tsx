import { FocusEvents, MouseClickEvents, MouseEvents, PointerEvents } from "./Events";

export type GenericClickableProps = {
  /** Sets `to` property on `Link` polymorphic elements */
  to?: string;
  /** Sets html `href` property on valid elements */
  href?: string;
  /** Sets html `target` property on valid elements */
  target?: string;
  /** Sets html `type` property on valid elements */
  type?: "submit" | "reset" | "button";
}

export type GenericClickableEventProps =
  MouseClickEvents
  & MouseEvents
  & PointerEvents
  & FocusEvents;

export const CLICKABLE_ELEMENTS = ["button", "link", "a"];