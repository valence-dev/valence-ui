import {
  ComponentSize,
  GenericClickableEventProps,
  GenericClickableProps,
  GenericLayoutProps,
  PolymorphicButtonProps,
} from "@valence-ui/utils";
import { Material } from "../utilities";

export type GenericButtonProps = GenericClickableProps &
  GenericClickableEventProps &
  PolymorphicButtonProps &
  GenericLayoutProps & {
    /** The button's material */
    material?: Material;
    /** This button's size class. Defaults to theme default */
    size?: ComponentSize;
    /** This button's radius size class. Defaults to theme default */
    radius?: ComponentSize;

    /** Whether this button is square. */
    square?: boolean;
    /** Whether a shadow will be shown under this button */
    shadow?: boolean;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;

    /** Whether this button is disabled */
    disabled?: boolean;
    /** Whether this button is loading */
    loading?: boolean;
  };
