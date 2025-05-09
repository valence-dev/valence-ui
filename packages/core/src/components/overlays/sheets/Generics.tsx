import { GenericOverlayProps } from "@valence-ui/utils";
import { Disclosure } from "../../../hooks";
import { FlexProps } from "../../layout";

export type GenericSheetProps = GenericOverlayProps & {
  /** A disclosure to handle the sheet's state */
  disclosure: Disclosure;

  /** Props to apply to the flex component */
  flexProps?: FlexProps;
};
