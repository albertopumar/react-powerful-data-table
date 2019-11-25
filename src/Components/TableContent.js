import React from 'react';
import styled from 'styled-components';

import TableRow from './TableRow';

const ContentWrapper = styled.div`
    background-color: #f5f5f5;
`;

const TableContent = props => {
    const { tableStructure, tableData } = props;

    // TODO: find representative key
    return (
        <ContentWrapper>
            {tableData.map(rowData => (
                <TableRow tableStructure={tableStructure} rowData={rowData} />
            ))}
        </ContentWrapper>
    );
};

export default TableContent;
