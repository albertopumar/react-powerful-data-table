import React from 'react';
import ReactTable from '../../src/PowerfulDataTable';
import demoData from '../mocks/demo-data';

import text from './basicLocalData.md';

const tableStructure = [
    { title: 'Identificador', field: 'id' },
    { title: 'Nombre', field: 'name' },
    { title: 'Apellido', field: 'surname' }
];

export const basicLocalData = () => 
    <ReactTable
        selfManagedData
        tableData={demoData}
        tableStructure={tableStructure} 
    />;

export default { 
    title: 'Data Handle Examples',
    parameters: {
        info: {
            text
        }
    }
};
