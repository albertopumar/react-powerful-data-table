import React from 'react';
import ReactTable from '../../src/PowerfulDataTable';
import demoData from '../mocks/demo-data';

const CustomColumnOrder = () => <div>Replace Order</div>;
const CustomColumnFilter = () => <div>Replace Filter</div>;

const customColumnTableStructure = [
    {
        title: 'Identificador',
        field: 'id',
        customOrderComponent: CustomColumnOrder,
        customFilterComponent: CustomColumnFilter
    },
    { title: 'Nombre', field: 'name' },
    { title: 'Apellido', field: 'surname' }
];


export const customColumn = () => 
    <ReactTable
        selfManagedData
        tableData={demoData}
        tableStructure={customColumnTableStructure} 
    />;

export default { title: 'Component Overrides Examples' };