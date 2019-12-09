import React from 'react';
import TableStructure from './Components/TableStructure';

import { defaultFilterFunction, defaultOrderFunction } from './Utils/defaultFunctions';

class SelfManagedData extends React.Component {
    //TODO: Redux and promise support
    constructor(props) {
        super(props);

        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleOrderChange = this.handleOrderChange.bind(this);

        const { tableStructure } = props;
        this.state = {
            pagination: {
                currentPage: 0,
                pageSize: 5,
                totalCount: props.tableData.length
            },
            filter: [],
            order: { field: '', order: '' },
            tableData: [],
            pagedData: [],
            tableStructure
        };
    }

    componentDidMount() {
        const { currentPage, pageSize } = this.state.pagination;
        const { tableData } = this.props;
        const pagedData = tableData.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
        this.setState({ tableData, pagedData });
    }

    //TODO: use function and bind it
    handlePageChange(page) {
        this.props.onPageChanged && this.props.onPageChanged({ page });

        const { pageSize } = this.state.pagination;
        const pagedData = this.state.tableData.slice(page * pageSize, (page + 1) * pageSize);

        this.setState({ pagedData, pagination: { ...this.state.pagination, currentPage: page } });
    }

    //TODO: use function and bind it
    handleFilterChange(newFilter) {
        const filter = { ...this.state.filter, [newFilter.field]: newFilter.data };
        // TODO: moved
        const tableData = defaultFilterFunction(filter, this.props.tableData);

        this.setState(
            { filter, tableData, pagination: { ...this.state.pagination, totalCount: tableData.length } },
            () => this.handlePageChange(0)
        );
    }

    //TODO: use custom order
    //TODO: prevent page change
    handleOrderChange(newOrder) {
        // TODO: moved
        const tableData = defaultOrderFunction(newOrder, this.state.tableData);

        this.setState({ tableData, order: newOrder }, () => this.handlePageChange(0));
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
