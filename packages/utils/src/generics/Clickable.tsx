import {
  FocusEvents,
  MouseClickEvents,
  MouseEvents,
  PointerEvents,
} from "./Events";

export type GenericClickableProps = {
  /** Sets `to` property on `Link` polymorphic elements */
  to?: string;
  /** Sets html `href` property on valid elements */
  href?: string;
  /** Sets html `target` property on valid elements */
  target?: string;
  /** Sets html `type` property on valid elements */
  type?: "submit" | "reset" | "button";
  /** Sets the html `disabled` property on native `<button>` elements. On other elements this is instead backed by `aria-disabled`, a suppressed `tabIndex`, and a suppressed click. */
  disabled?: boolean;
  /** Sets the `aria-disabled` attribute, announcing a disabled state on elements (e.g. anchors) that don't natively support the `disabled` attribute. */
  "aria-disabled"?: boolean;
};

export type GenericClickableEventProps = MouseClickEvents &
  MouseEvents &
  PointerEvents &
  FocusEvents;

export const CLICKABLE_ELEMENTS = ["button", "link", "a"];
