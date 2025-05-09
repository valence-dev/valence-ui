import { CSSProperties, Dispatch, ReactNode, SetStateAction } from "react";
import {
  FocusEvents,
  KeyboardEvents,
  MouseClickEvents,
  MouseEvents,
  PointerEvents,
  ComponentSize,
  FillVariant,
  GenericLayoutProps,
} from "@valence-ui/utils";

export type GenericInputProps<T = string> = GenericLayoutProps & {
  /** The value of this input. Use this in conjunction with `onInput` or `onChange` to create controlled inputs. */
  value: T;
  /** Sets the value of this input. Use this in conjunction with `value` to create controlled inputs. */
  setValue: (value: T) => void;

  /** This input's size class. Defaults to theme default */
  size?: ComponentSize;
  /** This input's radius size class. Defaults to theme default */
  radius?: ComponentSize;
  /** This input's styling variant. Defaults to theme default */
  variant?: FillVariant;

  /** Whether this input is disabled */
  disabled?: boolean;
  /** Whether this input is readonly */
  readOnly?: boolean;
  /** Whether this input is required */
  required?: boolean;
  /** Whether to focus this input on mount */
  autoFocus?: boolean;
  /** Whether this input is loading */
  loading?: boolean;

  /** Associates this input with a form element */
  form?: string;
  /** The name of this input. Submitted with the form as part of a name/value pair */
  name?: string;
};

export type GenericTextInputProps = Omit<
  GenericInputProps<string>,
  "children"
> & {
  /** An icon to display at the left side of this input */
  icon?: ReactNode;
  /** Text that appears in this input when it has no value */
  placeholder?: string;

  /** The minimum length of this input's `value` */
  minLength?: number;
  /** The maximum length of this input's `value` */
  maxLength?: number;

  /** A regex pattern to use for validation */
  pattern?: string;

  /** Optional styles to apply to the input component */
  inputStyle?: CSSProperties;
};

export type GenericTextInputEventProps = MouseClickEvents &
  MouseEvents &
  PointerEvents &
  FocusEvents &
  KeyboardEvents & {
    /** Fires when the value of this input has been changed */
    onInput?: (event: React.FormEvent) => void;
    /** Fires when the value of this input has been changed. This is functionally the same as `onInput` because of how React handles these events. */
    onChange?: (event: React.FormEvent) => void;

    /** Fires when the input's value does not satisfy its validation constraints */
    onInvalid?: (event: React.FormEvent) => void;

    /** Fires when the `enter` key is pressed */
    onEnterPress?: (e: React.KeyboardEvent) => void;
  };
