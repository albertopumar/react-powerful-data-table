import allData from './demo-data';

export default (query = { page: 0 }) => {
    return new Promise(resolve => {
        let data = allData;

        if (query.filter) {
            data = data.filter(
                rowInfo =>
                    !Object.entries(query.filter).find(
                        ([field, data]) =>
                            !rowInfo[field]
                                .toString()
                                .toLowerCase()
                                .includes(data.toLowerCase())
                    )
            );
        }
        if (query.order) {
            data =
                query.order.direction === 'asc'
                    ? data.sort((a, b) =>
                            a[query.order.field].toString().localeCompare(b[query.order.field].toString())
                        )
                    : query.order.direction === 'desc' 
                        ? data.sort((a, b) =>
                                b[query.order.field].toString().localeCompare(a[query.order.field].toString())
                            ) 
                        : data;
        }

        resolve({
            data: data.slice(query.page * 5, (query.page + 1) * 5),
            currentPage: query.page,
            pageSize: 5,
            totalCount: data.length
        });
    });
};