"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultOptionsFilter = void 0;
const DefaultOptionsFilter = (options, search) => {
    const query = search.trim().toLowerCase();
    const filtered = options.filter((option) => option.label.toLowerCase().includes(query));
    return filtered;
};
exports.DefaultOptionsFilter = DefaultOptionsFilter;
