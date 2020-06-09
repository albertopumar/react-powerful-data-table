import React, { useContext } from 'react';
import styled from 'styled-components';

import FilterInput from './Filter';
import ComponentsContext from '../../Utils/ComponentsContext';
import DefaultTableOrder from './Order';

const StyledOrderWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 0 30px 10px;
    box-sizing: border-box;
`;


const StyledSearchWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
`;

const StyledHeaderCellWrapper = styled.div`
    flex: 1 1 0px;
    padding: 10px 0;
`;

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
