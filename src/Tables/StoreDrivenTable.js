import React from 'react';
import TableStructure from '../Components/TableStructure';

class SelfManagedData extends React.Component {
    constructor(props) {
        super(props);

        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleOrderChange = this.handleOrderChange.bind(this);

        this.state = {
            page: 0,
            filter: [],
            order: { field: '', order: '' }
        };
    }

    handlePageChange(page) {
        const query = { ...this.state, page };

        this.props.onPageChanged && this.props.onPageChanged(query);

        this.setState({ page });
    }

    handleFilterChange(newFilter) {
        const filter = { ...this.state.filter, [newFilter.field]: newFilter.data };
        const query = { ...this.state, filter };

        this.props.onFilterChanged && this.props.onFilterChanged(query);

        this.setState({ filter });
    }

    handleOrderChange(order) {
        const query = { ...this.state, order };
        this.props.onOrderChanged && this.props.onOrderChanged(query);

        this.setState({ order });
    }

    render() {
        const { order } = this.state;

        const defaultPagination = { currentPage: 0, pageSize: 5, totalCount: 0 };
        const { components, tableStructure, tableData, pagination } = this.props;

        return (
            <TableStructure
                components={components}
                tableStructure={tableStructure}
                tableData={tableData}
                handlePageChange={this.handlePageChange}
                handleFilterChange={this.handleFilterChange}
                handleOrderChange={this.handleOrderChange}
                pagination={{ ...defaultPagination, ...pagination }}
                order={order}
            />
        );
    }
}

export default SelfManagedData;
