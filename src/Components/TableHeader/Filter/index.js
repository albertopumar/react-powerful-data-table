import React from 'react';
import _ from 'lodash';

import ClearIcon from './ClearIcon.styled';
import SearchInput from './SearchInput.styled';

import Close from '../../Icons/Close';
import { DEBOUNCE_TIME } from '../../../constants';


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
            <ClearIcon onClick={handleClearClick}><Close /></ClearIcon>
        </React.Fragment>
    );
};

export default FilterInput;
