import React from 'react';
import ReactTable from '../../src/PowerfulDataTable';
import demoData from '../demo-data';

import text from './basicRemoteData.md';

const tableStructure = [
    { title: 'Identificador', field: 'id' },
    { title: 'Nombre', field: 'name' },
    { title: 'Apellido', field: 'surname' }
];

const fetchTableData = query => {
    console.log(query);
    
    return new Promise(resolve => 
        resolve({
            data: demoData.slice(0, 5),
            pageSize: 5,
            totalCount: 20,
            currentPage: 0
        }))
};

export const basicRemoteData = () => 
    <ReactTable
        tableData={fetchTableData}
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
