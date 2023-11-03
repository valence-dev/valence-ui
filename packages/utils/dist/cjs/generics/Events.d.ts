/// <reference types="react" />
export type MouseClickEvents = {
    /** Fires on a mouse click event */
    onClick?: (event: React.MouseEvent) => void;
    /** Fires on a mouse double-click event */
    onDoubleClick?: (event: React.MouseEvent) => void;
};
export type MouseEvents = {
    /** Fires when a mouse button is pressed down on this element */
    onMouseDown?: (event: React.MouseEvent) => void;
    /** Fires when a mouse button is released on this element */
    onMouseUp?: (event: React.MouseEvent) => void;
    /** Fires when a mouse enters this element and its children */
    onMouseOver?: (event: React.MouseEvent) => void;
    /** Fires when a mouse enters this element */
    onMouseEnter?: (event: React.MouseEvent) => void;
    /** Fires when a mouse leaves this element */
    onMouseLeave?: (event: React.MouseEvent) => void;
    /** Fires when a mouse moves while over this element */
    onMouseMove?: (event: React.MouseEvent) => void;
};
export type PointerEvents = {
    /** Fires when a pointer becomes active on this element. This is for triggering drag events as this event is only called once on touchscreen devices. */
    onPointerDown?: (event: React.PointerEvent) => void;
    /** Fires when a pointer is no longer active on this element. */
    onPointerUp?: (event: React.PointerEvent) => void;
    /** Fires when the browser determines there are unlikely to be any more pointer events */
    onPointerCancel?: (event: React.PointerEvent) => void;
    /** Fires when a pointing device is moved onto this element and its children.  */
    onPointerEnter?: (event: React.PointerEvent) => void;
    /** Fires when a pointing device is moved off this element */
    onPointerLeave?: (event: React.PointerEvent) => void;
    /** Fires when a pointer moves while over this element */
    onPointerMove?: (event: React.PointerEvent) => void;
    /** Fires when a pointer is moved onto this element */
    onPointerOver?: (event: React.PointerEvent) => void;
};
export type FocusEvents = {
    /** Fires when this element receives focus */
    onFocus?: (event: React.FocusEvent) => void;
    /** Fires when this element loses focus */
    onBlur?: (event: React.FocusEvent) => void;
};
export type KeyboardEvents = {
    /** Fires when a key is pressed down */
    onKeyDown?: (event: React.KeyboardEvent) => void;
    /** Fires after a key is pressed and released */
    onKeyPress?: (event: React.KeyboardEvent) => void;
    /** Fires when a key is released */
    onKeyUp?: (event: React.KeyboardEvent) => void;
};
//# sourceMappingURL=Events.d.ts.map