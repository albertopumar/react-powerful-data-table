import React, { useContext } from 'react';
import styled from 'styled-components';

import HeaderCell from './HeaderCell';
import ComponentsContext from '../../Utils/ComponentsContext';

//TODO: review responsive styles
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
    //TODO: Handle order state

    const { tableStructure, handleFilterChange, handleOrderChange } = props;

    // Extract custom attributes from context
    const { HeaderWrapper = StyledHeaderWrapper } = useContext(ComponentsContext);

    return (
        <HeaderWrapper>
            {tableStructure.map(columnStructure => (
                <HeaderCell
                    key={`header-key-${columnStructure.field}`}
                    columnStructure={columnStructure}
                    handleFilterChange={handleFilterChange}
                    handleOrderChange={handleOrderChange}
                />
            ))}
        </HeaderWrapper>
    );
};

export default TableHeader;
