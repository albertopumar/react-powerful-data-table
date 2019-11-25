import React, { useContext } from 'react';

import StyledHeaderWrapper from './StyledHeaderWrapper';
import HeaderCell from './HeaderCell';
import ComponentsContext from '../../Utils/ComponentsContext';

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
