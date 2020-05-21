## Description
Show local stored data in the table. Although we have stored all the data we only show one page at a time to help readability.

## Configuration
 - We need to pass the parameter `selfManagedData`. With this parameter we are asking the `ReactTable` to manage the pagination, sort, filters, etc. for us.
 - We need to pass the structure of the table as `tableStructure` parameter. An example of this parameter can be found in the example below.
 - We need to pass the whole `Array` of data.

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

<ReactTable
    selfManagedData
    tableStructure={tableStructure} 
    tableData={demoData}
/>
```