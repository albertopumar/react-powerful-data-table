import React from 'react';
import styled from 'styled-components';

import TableHeader from './TableHeader';
import ComponentsContext from '../Utils/ComponentsContext';
import TableContent from './TableContent';
import Pagination from './Pagination';

const TableWrapper = styled.div`
    width: 80%;
    max-width: 900px;
    margin: auto;
`;

class PowerfulDataTable extends React.Component {
    //TODO: Redux and promise support
    constructor(props) {
        super(props);

        const { tableStructure } = props;
        this.state = {
            paging: {
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
        const { currentPage, pageSize } = this.state.paging;
        const { tableData } = this.props;
        const pagedData = tableData.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
        this.setState({ tableData, pagedData });
    }

    //TODO: use function and bind it
    handlePageChange = page => {
        const { pageSize } = this.state.paging;
        const pagedData = this.state.tableData.slice(page * pageSize, (page + 1) * pageSize);

        this.setState({ pagedData, paging: { ...this.state.paging, currentPage: page } });
    };

    //TODO: use function and bind it
    handleFilterChange = newFilter => {
        const filter = { ...this.state.filter, [newFilter.field]: newFilter.data };
        const tableData = this.defaultFilterFunction(filter, this.props.tableData);

        this.setState({ filter, tableData, paging: { ...this.state.paging, totalCount: tableData.length } }, () =>
            this.handlePageChange(0)
        );
    };

    //TODO: better filter function
    defaultFilterFunction = (filterObject, data) => {
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

    //TODO: use custom order
    //TODO: prevent page change
    handleOrderChange = newOrder => {
        const tableData = this.defaultOrderFunction(newOrder, this.state.tableData);

        this.setState({ tableData, order: newOrder }, () => this.handlePageChange(0));
    };

    //TODO: better order function
    defaultOrderFunction = (filterObject, data) => {
        return filterObject.direction === 'asc'
            ? data.sort((a, b) => a[filterObject.field].toString().localeCompare(b[filterObject.field].toString()))
            : data.reverse((a, b) => a[filterObject.field].toString().localeCompare(b[filterObject.field].toString()));
    };

    render() {
        const { pagedData, paging, order } = this.state;
        const { components, tableStructure } = this.props;

        return (
            <TableWrapper>
                <ComponentsContext.Provider value={components}>
                    <TableHeader
                        tableStructure={tableStructure}
                        handleFilterChange={this.handleFilterChange}
                        handleOrderChange={this.handleOrderChange}
                        order={order}
                    />
                    <TableContent tableStructure={tableStructure} tableData={pagedData} />
                    <Pagination paging={paging} handlePageChange={this.handlePageChange} />
                </ComponentsContext.Provider>
            </TableWrapper>
        );
    }
}

export default PowerfulDataTable;
