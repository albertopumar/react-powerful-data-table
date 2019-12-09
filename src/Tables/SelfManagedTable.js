import React from 'react';
import TableStructure from '../Components/TableStructure';

import { defaultFilterFunction, defaultOrderFunction, defaultPaginationFunction } from '../Utils/defaultFunctions';

class SelfManagedData extends React.Component {
    constructor(props) {
        super(props);

        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleOrderChange = this.handleOrderChange.bind(this);

        this.state = {
            pagination: {
                currentPage: 0,
                pageSize: 5,
                totalCount: props.tableData.length
            },
            filter: [],
            order: { field: '', order: '' },
            tableData: [],
            pagedData: []
        };
    }

    componentDidMount() {
        const { currentPage, pageSize } = this.state.pagination;
        const { tableData } = this.props;
        const pagedData = tableData.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
        this.setState({ tableData, pagedData });
    }

    createQuery = inputQuery => {
        const { pagination, filter, order } = this.state;
        const query = {
            page: pagination.currentPage,
            filter,
            order
        };
        return { ...query, ...inputQuery };
    };

    handlePageChange(page) {
        const query = this.createQuery({ page });
        this.props.onPageChanged && this.props.onPageChanged(query);

        const { pageSize } = this.state.pagination;
        const paginationFunction =
            this.props.customFunctions && this.props.customFunctions.paginationFunction
                ? this.props.customFunctions.paginationFunction
                : defaultPaginationFunction;
        const pagedData = paginationFunction(page, pageSize, this.state.tableData);

        this.setState({ pagedData, pagination: { ...this.state.pagination, currentPage: page } });
    }

    handleFilterChange(newFilter) {
        const filter = { ...this.state.filter, [newFilter.field]: newFilter.data };
        const filterFunction =
            this.props.customFunctions && this.props.customFunctions.filterFunction
                ? this.props.customFunctions.filterFunction
                : defaultFilterFunction;
        const tableData = filterFunction(filter, this.props.tableData);

        const query = this.createQuery({ filter });
        this.props.onFilterChanged && this.props.onFilterChanged(query);

        this.setState(
            { filter, tableData, pagination: { ...this.state.pagination, totalCount: tableData.length } },
            () => this.handlePageChange(0)
        );
    }

    handleOrderChange(order) {
        const orderFunction =
            this.props.customFunctions && this.props.customFunctions.orderFunction
                ? this.props.customFunctions.orderFunction
                : defaultOrderFunction;
        const tableData = orderFunction(order, this.state.tableData);

        const query = this.createQuery({ order });
        this.props.onOrderChanged && this.props.onOrderChanged(query);

        this.setState({ tableData, order }, () => this.handlePageChange(this.state.pagination.currentPage));
    }

    render() {
        const { pagedData, order, pagination } = this.state;
        const { components, tableStructure } = this.props;

        return (
            <TableStructure
                components={components}
                tableStructure={tableStructure}
                tableData={pagedData}
                handlePageChange={this.handlePageChange}
                handleFilterChange={this.handleFilterChange}
                handleOrderChange={this.handleOrderChange}
                pagination={pagination}
                order={order}
            />
        );
    }
}

export default SelfManagedData;
