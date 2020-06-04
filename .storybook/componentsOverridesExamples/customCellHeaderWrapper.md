## Description
Show local stored data in the table. Although we have stored all the data we only show one page at a time to help readability.

## Configuration

## Example
```jsx
import React from 'react';
import ReactTable from '../../src/PowerfulDataTable';

const tableStructure = [
    { title: 'Identifier', field: 'id' },
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname' }
];

const demoData = [
    { id: 1, name: 'pepito', surname: 'perez' },
    { id: 2, name: 'manolito', surname: 'gafotas' },
    { id: 3, name: 'jorge', surname: 'nieve' },
    { id: 4, name: 'pepito', surname: 'garcia' },
    ( ... )
];

const StyledHeaderCellWrapper = styled.div`
    background-color: #cf513d;
`;

const CustomHeaderCellWrapper = props => 
    <StyledHeaderCellWrapper>
        <div>Add something to the header cell</div>
        <div>{props.children}</div>
    </StyledHeaderCellWrapper>;

<ReactTable
    selfManagedData
    components={{HeaderCellWrapper: CustomHeaderCellWrapper}}
    tableData={demoData}
    tableStructure={tableStructure} 
/>
```