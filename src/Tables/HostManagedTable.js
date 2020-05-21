import React from 'react';
import TableStructure from '../Components/TableStructure';

import { defaultFilterFunction, defaultOrderFunction, defaultPaginationFunction } from '../Utils/defaultFunctions';

class HostManagedTable extends React.Component {
    constructor(props) {
        super(props);

        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleOrderChange = this.handleOrderChange.bind(this);

        this.state = {
            pagination: {
                currentPage: 0,
                pageSize: 5,
                totalCount: 0
            },
            filter: [],
            order: { field: '', order: '' },
            pagedData: []
        };
    }

    componentDidMount() {
        const { tableData } = this.props;
        
        const query = this.createQuery();
        tableData(query).then(res => {
            const {data, ...pagination} = res;
            this.setState({ tableData: data, pagedData: data, pagination });
        });
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
        this.props.tableData(query).then(res => {
            console.log(res);
            const {data, ...pagination} = res;
            this.setState({ tableData: data, pagedData: data, pagination });
        });
    }

    handleFilterChange(newFilter, columnFilter) {
        const filter = { ...this.state.filter, [newFilter.field]: newFilter.data };
        const query = this.createQuery({ filter });

        this.props.tableData(query).then(res => {
            console.log(res);
            const {data, ...pagination} = res;
            this.setState({ tableData: data, pagedData: data, pagination, filter });
        });
    }

    handleOrderChange(order, columnOrder) {
        const query = this.createQuery({ order });
        this.props.tableData(query).then(res => {
            console.log(res);
            const {data, ...pagination} = res;
            this.setState({ tableData: data, pagedData: data, pagination });
        });
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

export default HostManagedTable;
