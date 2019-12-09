import React, { useContext } from 'react';
import styled from 'styled-components';

import TableHeader from './TableHeader';
import ComponentsContext from '../Utils/ComponentsContext';
import TableContent from './TableContent';
import DefaultPagination from './Pagination';

// TODO: extract to component
const TableWrapper = styled.div`
    width: 80%;
    max-width: 900px;
    margin: auto;
`;

export default props => {
    const {
        components,
        tableStructure,
        tableData,
        handlePageChange,
        handleFilterChange,
        handleOrderChange,
        pagination,
        order
    } = props;

    const context = useContext(ComponentsContext);
    const Pagination = context && context.Pagination ? context.Pagination : DefaultPagination;

    return (
        <TableWrapper>
            <ComponentsContext.Provider value={components}>
                <TableHeader
                    tableStructure={tableStructure}
                    handleFilterChange={handleFilterChange}
                    handleOrderChange={handleOrderChange}
                    order={order}
                />
                <TableContent tableStructure={tableStructure} tableData={tableData} />
                <Pagination pagination={pagination} handlePageChange={handlePageChange} />
            </ComponentsContext.Provider>
        </TableWrapper>
    );
};
