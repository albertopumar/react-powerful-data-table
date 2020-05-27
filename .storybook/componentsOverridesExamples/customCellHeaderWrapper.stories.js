import React from 'react';
import ReactTable from '../../src/PowerfulDataTable';
import demoData from '../mocks/demo-data';
import styled from 'styled-components';

const tableStructure = [
    {
        title: 'Identificador',
        field: 'id',
        customSort: (a, b) => a.toString().localeCompare(b.toString()),
        customFilter: (a, b) =>
            a
                .toString()
                .toLowerCase()
                .includes(b.toLowerCase())
    },
    { title: 'Nombre', field: 'name' },
    { title: 'Apellido', field: 'surname' }
];

const StyledHeaderCellWrapper = styled.div`
    background-color: #cf513d;
`;

const CustomHeaderCellWrapper = props => 
    <StyledHeaderCellWrapper>
        <div>Add something to the header cell</div>
        <div>{props.children}</div>
    </StyledHeaderCellWrapper>;


export const customHeaderCellWrapper = () => 
    <ReactTable
        selfManagedData
        components={{HeaderCellWrapper: CustomHeaderCellWrapper}}
        tableData={demoData}
        tableStructure={tableStructure} 
    />;

export default { title: 'Component Overrides Examples' };
