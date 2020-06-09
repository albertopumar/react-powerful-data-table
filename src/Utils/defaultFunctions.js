const defaultOrderLogic = (a, b) =>
    a.toString().localeCompare(b.toString());

export const defaultOrderFunction = (filterObject, data, orderLogic = defaultOrderLogic) => {
    return filterObject.direction === 'asc'
        ? data.sort((a, b) => orderLogic(a[filterObject.field], b[filterObject.field]))
        : data.reverse((a, b) => orderLogic(a[filterObject.field], b[filterObject.field]));
};

export const defaultFilterFunction = (filterObject, data, filterLogic) => {
    const defaultFilterLogic = (field, filterInput) =>
        field
            .toString()
            .toLowerCase()
            .includes(filterInput.toLowerCase());

    return data.filter(
        rowInfo =>
            !Object.entries(filterObject).find(([field, filterInput]) =>
                filterLogic
                    ? !filterLogic(rowInfo[field], filterInput)
                    : !defaultFilterLogic(rowInfo[field], filterInput)
            )
    );
};

export const defaultPaginationFunction = (page, pageSize, data) => {
    return data.slice(page * pageSize, (page + 1) * pageSize);
};
