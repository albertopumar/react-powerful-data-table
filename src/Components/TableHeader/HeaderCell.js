import React, { useContext } from 'react';
import styled from 'styled-components';

import FilterInput from './Filter';
import ComponentsContext from '../../Utils/ComponentsContext';
import DefaultTableOrder from './Order';

const StyledSearchWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 0 50px;
    box-sizing: border-box;
`;

const StyledHeaderCellWrapper = styled.div``;

const HeaderCell = props => {
    const { columnStructure, handleFilterChange, handleOrderChange, order } = props;

    // Extract custom attributes from context
    debugger;
    const {
        SearchWrapper = StyledSearchWrapper,
        HeaderCellWrapper = StyledHeaderCellWrapper,
        DefaultOrder = DefaultTableOrder,
        DefaultFilter = FilterInput
    } = useContext(ComponentsContext);

    debugger;
    const Order = columnStructure.customOrderComponent || DefaultOrder;
    const Filter = columnStructure.customFilterComponent || DefaultFilter;

    debugger;
    return (
        <HeaderCellWrapper className="header-cell">
            <Order handleOrderChange={handleOrderChange} order={order} columnStructure={columnStructure} />
            <SearchWrapper>
                <Filter columnStructure={columnStructure} handleFilterChange={handleFilterChange} />
            </SearchWrapper>
        </HeaderCellWrapper>
    );
};

export default HeaderCell;
