import React from 'react';
import ReactTable from '../../src/PowerfulDataTable';
import text from './customCellHeaderWrapper.md';

const CustomCellComponent = props => {
    const { data: { firstName, surname } } = props;
    return (
        <div className="cell">
            <h1 className="firstName">{firstName}</h1>
            <h3 className="surname">{surname}</h3>
        </div>
    );
};

const tableStructure = [
    {
        title: 'Identificador',
        field: 'id',
    },
    { title: 'Nombre', field: 'name', customCellComponent: CustomCellComponent },
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
    title: 'Component Overrides Examples',
    parameters: {
        info: {
            text
        }
    }
 };
