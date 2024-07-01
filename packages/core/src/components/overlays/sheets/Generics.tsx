import { Disclosure, FlexProps } from "@valence-ui/core";
import { GenericOverlayProps } from "@valence-ui/utils";

export type GenericSheetProps = GenericOverlayProps & {
  /** A disclosure to handle the sheet's state */
  disclosure: Disclosure;

  /** Props to apply to the flex component */
  flexProps?: FlexProps;
}