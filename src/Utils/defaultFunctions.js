export const defaultOrderFunction = (filterObject, data, orderLogic) => {
    const defaultOrderLogic = (a, b) =>
        a[filterObject.field].toString().localeCompare(b[filterObject.field].toString());

    return filterObject.direction === 'asc'
        ? data.sort(orderLogic || defaultOrderLogic)
        : data.reverse(orderLogic || defaultOrderLogic);
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
