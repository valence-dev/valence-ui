"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOptionFilter = exports.getOptionIcon = exports.getOptionLabel = exports.getOptionValue = void 0;
function getOptionValue(option) {
    if (typeof option === "string")
        return option;
    return option.value;
}
exports.getOptionValue = getOptionValue;
function getOptionLabel(option) {
    var _a;
    if (typeof option === "string")
        return option;
    return (_a = option.label) !== null && _a !== void 0 ? _a : option.value;
}
exports.getOptionLabel = getOptionLabel;
function getOptionIcon(option) {
    if (typeof option === "string")
        return undefined;
    return option.icon;
}
exports.getOptionIcon = getOptionIcon;
const defaultOptionFilter = (options, search) => {
    return options.filter(option => {
        const label = getOptionLabel(option);
        return label.toLowerCase().includes(search.toLowerCase());
    });
};
exports.defaultOptionFilter = defaultOptionFilter;
