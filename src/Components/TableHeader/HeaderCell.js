import React from 'react';
import styled from 'styled-component';

import FilterInput from './Filter';

const StyledSearchWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 0 50px;
    box-sizing: border-box;
`;

const StyledHeaderCellWrapper = styled.div``;

const HeaderCell = props => {
    const { columnStructure, handleFilterChange, handleOrderChange } = props;

    const { SearchWrapper = StyledSearchWrapper, HeaderCellWrapper = StyledHeaderCellWrapper } = useContext(
        ComponentsContext
    );
    return (
        <HeaderCellWrapper className="header-cell">
            <span onClick={() => handleOrderChange({ order: 'asc', field: columnStructure.field })}>
                {columnStructure.title}
            </span>
            <SearchWrapper>
                <FilterInput columnStructure={columnStructure} handleFilterChange={handleFilterChange} />
            </SearchWrapper>
        </HeaderCellWrapper>
    );
};

export default HeaderCell;
