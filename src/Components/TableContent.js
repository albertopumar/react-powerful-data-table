import React from 'react';
import styled from 'styled-components';

import TableRow from './TableRow';

const ContentWrapper = styled.div`
    background-color: #f5f5f5;
`;

const TableContent = props => {
    const { tableStructure, tableData } = props;

    return (
        <ContentWrapper>
            {tableData && tableData.map((rowData, index) => 
                <TableRow 
                    key={`row-${index}`}
                    columnId={`row-${index}`}
                    tableStructure={tableStructure}
                    rowData={rowData} 
                />
            )}
        </ContentWrapper>
    );
};

export default TableContent;
