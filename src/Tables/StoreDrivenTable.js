import React from 'react';
import TableStructure from '../Components/TableStructure';

class SelfManagedData extends React.Component {
    //TODO: Redux and promise support
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
            order: { field: '', order: '' }
        };
    }

    componentDidMount() {
        const { currentPage, pageSize } = this.state.pagination;
        const { tableData } = this.props;
        const pagedData = tableData.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
        this.setState({ tableData, pagedData });
    }

    // TODO: Return query not page
    handlePageChange(page) {
        this.props.onPageChanged && this.props.onPageChanged({ page });
    }

    // TODO: Return query not filter
    handleFilterChange(newFilter) {}

    // TODO: Return query not order
    handleOrderChange(newOrder) {
        this.props.onOrderChanged && this.props.onOrderChanged(newOrder);

        this.setState({ order: newOrder });
    }

    render() {
        const { order } = this.state;

        const defaultPagination = { currentPage: 0, pageSize: 5, totalCount: 0 };
        const { components, tableStructure, tableData, pagination } = this.props;

        console.log(pagination);

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
