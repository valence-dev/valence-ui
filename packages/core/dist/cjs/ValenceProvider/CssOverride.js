"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssOverride = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("@emotion/react");
const utilities_1 = require("../utilities");
/** The CSS Overrider is a custom utility component designed to
 * avoid adding a custom global css file to the project to override
 * base styles.
 */
function CssOverride() {
    const { getHex } = (0, utilities_1.useColors)();
    const Style = (0, react_1.css)({
        "body": {
            margin: 0,
            width: "100vw",
            height: "100vh",
            overflowX: "hidden",
            backgroundColor: getHex("white"),
        },
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
    return ((0, jsx_runtime_1.jsx)(react_1.Global, { styles: Style }));
}
exports.CssOverride = CssOverride;
