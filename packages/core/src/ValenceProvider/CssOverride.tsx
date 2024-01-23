/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { useColors } from "../utilities";


/** The CSS Overrider is a custom utility component designed to
 * avoid adding a custom global css file to the project to override
 * base styles.
 */
export function CssOverride() {
  const { getHex } = useColors();

  const Style = css({
    "body": {
      margin: 0,
      width: "100vw",
      height: "100vh",
      overflowX: "hidden",
      backgroundColor: getHex("white"),

      // Stop blue highlighting
      WebkitTapHighlightColor: "transparent",
    },

    // Autofill styling
    "input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active": {
      transition: "background-color 5000s ease-in-out 0s",
    },

    // Scrollbar styling
    "*::-webkit-scrollbar": {
      width: 5,
      height: 5,
    },
    "*::-webkit-scrollbar-thumb": {
      borderRadius: 5,
      backgroundColor: getHex("black", "medium"),
    }
  });

  return (
    <Global
      styles={Style}
    />
  )
}