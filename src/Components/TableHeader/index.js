import React from 'react';
import styled from 'styled-components';
import HeaderCell from './HeaderCell';

const StyledHeaderWrapper = styled.div`
    display: flex;
    min-height: 40px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #6c7ae0;
    line-height: 40px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;

    .header-cell {
        flex: 1 1 0px;
    }
`;

const TableHeader = props => {
    //TODO: Set thorttling
    //TODO: Handle order state

    const { tableStructure, handleFilterChange, handleOrderChange } = props;

    // Extract custom attributes from context
    const { HeaderWrapper = StyledHeaderWrapper } = useContext(ComponentsContext);

    return (
        <HeaderWrapper>
            {tableStructure.map(columnStructure => (
                <HeaderCell
                    columnStructure={columnStructure}
                    handleFilterChange={handleFilterChange}
                    handleOrderChange={handleOrderChange}
                />
            ))}
        </HeaderWrapper>
    );
};

export default TableHeader;
