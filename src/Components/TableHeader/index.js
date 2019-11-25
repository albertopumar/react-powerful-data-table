import React from 'react';
import styled from 'styled-components';

import FilterInput from './Filter';

const Header = styled.div`
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

const SearchWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 0 50px;
    box-sizing: border-box;
`;

const TableHeader = props => {
    //TODO: Set thorttling
    //TODO: Handle order state

    const { tableStructure, handleFilterChange, handleOrderChange } = props;
    return (
        <Header>
            {tableStructure.map(columnStructure => (
                <div className="header-cell">
                    <span onClick={() => handleOrderChange({ order: 'asc', field: columnStructure.field })}>
                        {columnStructure.title}
                    </span>
                    <SearchWrapper>
                        <FilterInput columnStructure={columnStructure} handleFilterChange={handleFilterChange} />
                    </SearchWrapper>
                </div>
            ))}
        </Header>
    );
};

export default TableHeader;
