import React from 'react';
import ReactTable from '../../src/PowerfulDataTable';
import text from './customColumnCellComponent.md';

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
    { title: 'Status', field: 'status', customCellComponent: CustomStatusCellComponent },
    { title: 'Identifier', field: 'id' },
    { title: 'Name', field: 'name', customCellComponent: CustomNameCellComponent },
];

const demoData = [
    { id: 1, name: { firstName: 'pepito', surname: 'perez' } },
    { id: 2, name: { firstName: 'manolito', surname: 'gafotas' } },
    { id: 3, name: { firstName: 'jorge', surname: 'nieve' } },
    { id: 4, name: { firstName: 'pepito', surname: 'garcia' } },
    { id: 5, name: { firstName: 'antonio', surname: 'gafotas' } }
];


export const customColumnCellComponent = () => 
    <ReactTable
        selfManagedData
        tableData={demoData}
        tableStructure={tableStructure} 
    />;

export default { 
    title: 'Column Component Overrides Examples',
    parameters: {
        info: {
            text
        }
    }
 };
