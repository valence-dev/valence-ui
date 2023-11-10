export const DefaultOptionsFilter = (options, search) => {
    const query = search.trim().toLowerCase();
    const filtered = options.filter((option) => option.label.toLowerCase().includes(query));
    return filtered;
};
