import React from 'react';
import TableStructure from '../Components/TableStructure';

class StoreDrivenData extends React.Component {
    constructor(props) {
        super(props);

        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleOrderChange = this.handleOrderChange.bind(this);

        this.state = {
            page: 0,
            filter: {},
            order: { field: '', order: '' }
        };
    }

    handlePageChange(page) {
        this.props.onPageChanged && this.props.onPageChanged(page);
        this.props.onQueryChanged && this.props.onQueryChanged({...this.state, page});

        this.setState({ page });
    }

    handleFilterChange(newFilter) {
        const filter = { ...this.state.filter, [newFilter.field]: newFilter.data };

        this.props.onFilterChanged && this.props.onFilterChanged(filter);
        this.props.onQueryChanged && this.props.onQueryChanged({...this.state, filter, page: 0});

        this.setState({ filter });
    }

    handleOrderChange(order) {
        this.props.onOrderChanged && this.props.onOrderChanged(order);
        this.props.onQueryChanged && this.props.onQueryChanged({...this.state, order});

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

export default StoreDrivenData;
