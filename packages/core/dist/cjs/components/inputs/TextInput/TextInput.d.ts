/// <reference types="react" />
import { GenericTextInputEventProps, GenericTextInputProps, MakeResponsive } from "../../..";
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
export declare const TextInput: import("react").ForwardRefExoticComponent<MakeResponsive<TextInputProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=TextInput.d.ts.map