import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
    background: none;
    border: none;
    border-bottom: 2px solid #999999;
    font-size: 16px;
    color: white;
`;

const ClearIcon = styled.span`
    position: absolute;
    right: 55px;
`;

const FilterInput = props => {
    const searchInputRef = React.createRef();

    const handleClearClick = () => {
        searchInputRef.current.value = '';
        _handleFilterChange('');
    };

    const _handleFilterChange = data => {
        const { columnStructure, handleFilterChange } = props;
        handleFilterChange({ data, field: columnStructure.field });
    };

    return (
        <React.Fragment>
            <SearchInput
                type="text"
                placeholder="Search"
                onChange={({ target: { value } }) => handleFilterChange(value)}
                ref={searchInputRef}
            />
            <ClearIcon onClick={handleClearClick}>X</ClearIcon>
        </React.Fragment>
    );
};

export default FilterInput;
