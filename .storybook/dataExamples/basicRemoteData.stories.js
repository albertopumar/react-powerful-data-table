import React from 'react';
import ReactTable from '../../src/PowerfulDataTable';
import fetchData from '../mocks/fetchData';

import text from './basicRemoteData.md';

const tableStructure = [
    { title: 'Identificador', field: 'id' },
    { title: 'Nombre', field: 'name' },
    { title: 'Apellido', field: 'surname' }
];

export const basicRemoteData = () => 
    <ReactTable
        tableData={fetchData}
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
