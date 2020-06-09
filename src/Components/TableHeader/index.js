import React, { useContext } from 'react';

import StyledHeaderWrapper from './HeaderWrapper.styled';
import HeaderCell from './HeaderCell';
import ComponentsContext from '../../Utils/ComponentsContext';

const TableHeader = props => {
    const { tableStructure, handleFilterChange, handleOrderChange, order } = props;

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
                    order={order.field === columnStructure.field && order}
                />
            ))}
        </HeaderWrapper>
    );
};

export default TableHeader;
