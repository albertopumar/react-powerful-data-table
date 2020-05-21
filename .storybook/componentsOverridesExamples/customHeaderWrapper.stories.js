import React from 'react';
import ReactTable from '../../src/PowerfulDataTable';
import demoData from '../demo-data';
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

const StyledHeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 40px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #cf513d;
    line-height: 40px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;

    .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .header-cell {
        flex: 1 1 0px;
    }
`;

const CustomHeaderWrapper = props => 
    <StyledHeaderWrapper>
        <div className="row">Add something to the header</div>
        <div className="row">{props.children}</div>
    </StyledHeaderWrapper>;

export const customHeaderWrapper = () => 
    <ReactTable
        selfManagedData
        components={{HeaderWrapper: CustomHeaderWrapper}}
        tableData={demoData}
        tableStructure={tableStructure} 
    />;

export default { title: 'Component Overrides Examples' };
