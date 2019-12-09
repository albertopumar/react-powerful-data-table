export const defaultOrderFunction = (filterObject, data) => {
    return filterObject.direction === 'asc'
        ? data.sort((a, b) => a[filterObject.field].toString().localeCompare(b[filterObject.field].toString()))
        : data.reverse((a, b) => a[filterObject.field].toString().localeCompare(b[filterObject.field].toString()));
};

export const defaultFilterFunction = (filterObject, data) => {
    return data.filter(
        rowInfo =>
            !Object.entries(filterObject).find(
                ([field, data]) =>
                    !rowInfo[field]
                        .toString()
                        .toLowerCase()
                        .includes(data.toLowerCase())
            )
    );
};

export const defaultPaginationFunction = (page, pageSize, data) => {
    return data.slice(page * pageSize, (page + 1) * pageSize);
};
