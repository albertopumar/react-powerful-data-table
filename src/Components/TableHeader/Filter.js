import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { DEBOUNCE_TIME } from '../../constants';

const SearchInput = styled.input`
    background: none;
    border: none;
    border-bottom: 2px solid #999999;
    font-size: 16px;
    color: white;
`;

const ClearIcon = styled.span`
    position: absolute;
    cursor: pointer;
    right: 55px;
`;

const FilterInput = props => {
    const searchInputRef = React.createRef();

    const _handleFilterChange = data => {
        const { columnStructure, handleFilterChange } = props;
        handleFilterChange({ data, field: columnStructure.field }, columnStructure.customFilter);
    };
    const debounceFilter = _.debounce(_handleFilterChange, DEBOUNCE_TIME);

    const handleClearClick = () => {
        searchInputRef.current.value = '';
        _handleFilterChange('');
    };

    return (
        <React.Fragment>
            <SearchInput
                type="text"
                placeholder="Search"
                onChange={({ target: { value } }) => debounceFilter(value)}
                ref={searchInputRef}
            />
            <ClearIcon onClick={handleClearClick}>X</ClearIcon>
        </React.Fragment>
    );
};

export default FilterInput;
