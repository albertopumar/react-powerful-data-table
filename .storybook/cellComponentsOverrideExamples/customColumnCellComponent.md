## Description
Show how to override all the cell components inside one column.

## Configuration
 - We need to a new parameter inside column we want to override in the `tableStructure`. This new parameter is called `customCellComponent` and it expect a `React.Component` that will receive the data as a `param`.

## Example
```jsx
import React from 'react';
import ReactTable from '../../src/PowerfulDataTable';

const CustomStatusCellComponent = props => {
    const { data } = props;
    return (
        <input type="checkbox" checked={data} />
    );
};

const CustomNameCellComponent = props => {
    const { data: { firstName, surname } } = props;
    return (
        <>
            <h1 className="firstName">{firstName}</h1>
            <h3 className="surname">{surname}</h3>
        </>
    );
};

const tableStructure = [
    { title: 'Status', field: 'status', customCellComponent: CustomStatusCellComponent }
    { title: 'Identifier', field: 'id' },
    { title: 'Name', field: 'name', customCellComponent: CustomNameCellComponent },
];

const demoData = [
    { status: true, id: 1, name: { firstName: 'pepito', surname: 'perez' } },
    { status: false, id: 2, name: { firstName: 'manolito', surname: 'gafotas' } },
    { status: false, id: 3, name: { firstName: 'jorge', surname: 'nieve' } },
    { status: false, id: 4, name: { firstName: 'pepito', surname: 'garcia' } },
    { status: false, id: 5, name: { firstName: 'antonio', surname: 'gafotas' } }
    ( ... )
];

<ReactTable
    selfManagedData
    tableData={demoData}
    tableStructure={tableStructure} 
/>
```