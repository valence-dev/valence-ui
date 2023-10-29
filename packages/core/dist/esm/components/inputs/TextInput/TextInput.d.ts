/** @jsxImportSource @emotion/react */
import { Dispatch, SetStateAction } from "react";
import { GenericInputEventHandlerProps, GenericInputProps } from "../InputContainer";
/** Defines the type of input that will be rendered */
export type TextInputType = "text" | "password" | "email" | "number" | "tel" | "url" | "search";
/** Defines the type of autocomplete behaviour that will be used */
export type AutoCompleteBehaviour = "off" | "on" | "name" | "honorific-prefix" | "given-name" | "addtional-name" | "family-name" | "honorific-suffix" | "nickname" | "email" | "email" | "username" | "new-password" | "current-password" | "one-time-code" | "organization-title" | "organization" | "street-address" | "shipping" | "billing" | "address-line1" | "address-line2" | "address-line3" | "address-level4" | "address-level3" | "address-level2" | "address-level1" | "country" | "country-name" | "postal-code" | "cc-name" | "cc-given-name" | "cc-additional-name" | "cc-family-name" | "cc-number" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-csc" | "cc-type" | "transaction-currency" | "transaction-amount" | "language" | "bday" | "bday-day" | "bday-month" | "bday-year" | "sex" | "tel" | "tel-country-code" | "tel-national" | "tel-area-code" | "tel-local" | "tel-extension" | "impp" | "url" | "photo" | "webauthn";
export type TextInputProps = GenericInputProps & GenericInputEventHandlerProps & {
    /** The value of the input */
    value: string;
    /** Sets the value of the input */
    setValue: Dispatch<SetStateAction<string>>;
    /** The type of input to render. Defaults to `text` */
    type?: TextInputType;
    /** The autocomplete behaviour to use. Defaults to `off` */
    autoComplete?: AutoCompleteBehaviour;
    /** A regex pattern to use for validation */
    pattern?: string;
    /** The minimum length of the input */
    minLength?: number;
    /** The maximum length of the input */
    maxLength?: number;
    /** For `type=email`, this specifies if this input accepts multiple values */
    multiple?: boolean;
};
export declare function TextInput(props: TextInputProps): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TextInput.d.ts.map