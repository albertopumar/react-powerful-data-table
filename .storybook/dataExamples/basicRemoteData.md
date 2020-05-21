## Description
Show local stored data in the table. Although we have stored all the data we only show one page at a time to help readability.

## Configuration
 - We need to pass the structure of the table as `tableStructure` parameter. An example of this parameter can be found in the example below.
 - We need to pass a function wrapping the backend request
    - It expect result to be:
```json
    {
        data: [],
        pageSize: 5,
        totalCount: 20,
        currentPage: 0
    }
```
    - The `query` object has this structure:
```json
    {
        filter: {columnIdentifier: "value", otherColumn: "value"},
        order: { field: "value", order: "value" },
        page: 0
    }
```

## Example
```jsx
import React from 'react';
import ReactTable from '../../src/PowerfulDataTable';

const tableStructure = [
    { title: 'Identifier', field: 'id' },
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname' }
];

const fetchTableData = query => {
    return fetch('some/backend/url');
};

<ReactTable
    selfManagedData
    tableStructure={tableStructure} 
    tableData={fetchTableData}
/>
```