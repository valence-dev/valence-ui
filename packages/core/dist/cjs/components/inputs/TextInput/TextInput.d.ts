/// <reference types="react" />
import { GenericTextInputEventProps, GenericTextInputProps } from "../../..";
/** Defines the type of input that will be rendered */
export type TextInputType = "text" | "password" | "email" | "number" | "tel" | "url" | "search";
/** Defines the type of autocomplete behaviour that will be used */
export type AutoCompleteBehaviour = "off" | "on" | "name" | "honorific-prefix" | "given-name" | "addtional-name" | "family-name" | "honorific-suffix" | "nickname" | "email" | "email" | "username" | "new-password" | "current-password" | "one-time-code" | "organization-title" | "organization" | "street-address" | "shipping" | "billing" | "address-line1" | "address-line2" | "address-line3" | "address-level4" | "address-level3" | "address-level2" | "address-level1" | "country" | "country-name" | "postal-code" | "cc-name" | "cc-given-name" | "cc-additional-name" | "cc-family-name" | "cc-number" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-csc" | "cc-type" | "transaction-currency" | "transaction-amount" | "language" | "bday" | "bday-day" | "bday-month" | "bday-year" | "sex" | "tel" | "tel-country-code" | "tel-national" | "tel-area-code" | "tel-local" | "tel-extension" | "impp" | "url" | "photo" | "webauthn";
export type TextInputProps = GenericTextInputProps & GenericTextInputEventProps & {
    /** The type of input to render. Defaults to `text` */
    type?: TextInputType;
    /** The autocomplete behaviour to use. Defaults to `off` */
    autoComplete?: AutoCompleteBehaviour;
    /** For `type=email`, this specifies if this input accepts multiple values */
    multiple?: boolean;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;
};
export declare const TextInput: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    color?: import("csstype").Property.Color | undefined;
    backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
    padding?: import("csstype").Property.Padding<string | number> | undefined;
    margin?: import("csstype").Property.Margin<string | number> | undefined;
    width?: import("csstype").Property.Width<string | number> | undefined;
    height?: import("csstype").Property.Height<string | number> | undefined;
} & {
    value: string;
    setValue: import("react").Dispatch<import("react").SetStateAction<string>>;
    size?: import("@valence-ui/utils").ComponentSize | undefined;
    radius?: import("@valence-ui/utils").ComponentSize | undefined;
    variant?: import("@valence-ui/utils").FillVariant | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    required?: boolean | undefined;
    autoFocus?: boolean | undefined;
    loading?: boolean | undefined;
    form?: string | undefined;
    name?: string | undefined;
} & {
    icon?: import("react").ReactNode;
    placeholder?: string | undefined; /** For `type=email`, this specifies if this input accepts multiple values */
    minLength?: number | undefined;
    maxLength?: number | undefined;
    pattern?: string | undefined;
    inputStyle?: import("react").CSSProperties | undefined;
    children?: undefined;
} & import("@valence-ui/utils/src/generics/Events").MouseClickEvents & import("@valence-ui/utils/src/generics/Events").MouseEvents & import("@valence-ui/utils/src/generics/Events").PointerEvents & import("@valence-ui/utils/src/generics/Events").FocusEvents & import("@valence-ui/utils/src/generics/Events").KeyboardEvents & {
    onInput?: ((event: import("react").FormEvent<Element>) => void) | undefined;
    onChange?: ((event: import("react").FormEvent<Element>) => void) | undefined;
    onInvalid?: ((event: import("react").FormEvent<Element>) => void) | undefined;
    onEnterPress?: ((e: import("react").KeyboardEvent<Element>) => void) | undefined;
} & {
    /** The type of input to render. Defaults to `text` */
    type?: TextInputType | undefined;
    /** The autocomplete behaviour to use. Defaults to `off` */
    autoComplete?: AutoCompleteBehaviour | undefined;
    /** For `type=email`, this specifies if this input accepts multiple values */
    multiple?: boolean | undefined;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=TextInput.d.ts.map