"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultSwatch = void 0;
/** Gets the swatch for the given hex code. This should be used
 * in situations where an unknown hex color has been provided.
 * @param hex The hex code to get the swatch for.
 */
function getDefaultSwatch(hex) {
    if (!hex)
        return undefined;
    return { base: hex, opacity: { weak: "20", medium: "4A", strong: "A0" } };
}
exports.getDefaultSwatch = getDefaultSwatch;
