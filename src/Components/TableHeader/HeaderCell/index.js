import React, { useContext } from 'react';

import FilterInput from '../Filter';
import ComponentsContext from '../../../Utils/ComponentsContext';
import DefaultTableOrder from '../Order';

import StyledHeaderCellWrapper from './HeaderCellWrapper.styled';
import StyledOrderWrapper from './OrderWrapper.styled';
import StyledSearchWrapper from './SearchWrapper.styled';

const HeaderCell = props => {
    const { columnStructure, handleFilterChange, handleOrderChange, order } = props;

    // Extract custom attributes from context
    const {
        SearchWrapper = StyledSearchWrapper,
        OrderWrapper = StyledOrderWrapper,
        HeaderCellWrapper = StyledHeaderCellWrapper,
        DefaultOrder = DefaultTableOrder,
        DefaultFilter = FilterInput
    } = useContext(ComponentsContext);

    const Order = columnStructure.customOrderComponent || DefaultOrder;
    const Filter = columnStructure.customFilterComponent || DefaultFilter;

    return (
        <HeaderCellWrapper className="header-cell">
            <OrderWrapper>
                <Order handleOrderChange={handleOrderChange} order={order} columnStructure={columnStructure} />
            </OrderWrapper>
            <SearchWrapper>
                <Filter columnStructure={columnStructure} handleFilterChange={handleFilterChange} />
            </SearchWrapper>
        </HeaderCellWrapper>
    );
};

export default HeaderCell;
