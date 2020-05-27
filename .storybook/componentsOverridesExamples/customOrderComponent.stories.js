import React from 'react';
import ReactTable from '../../src/PowerfulDataTable';
import demoData from '../mocks/demo-data';

let OrderComponentProps = {};

const tableStructure = [
    {
        title: 'Identificador',
        field: 'id',
        customSort: (a, b) => a.toString().localeCompare(b.toString()),
        customFilter: (a, b) =>
            a
                .toString()
                .toLowerCase()
                .includes(b.toLowerCase())
    },
    { title: 'Nombre', field: 'name' },
    { title: 'Apellido', field: 'surname' }
];

const OrderComponent = props => {
    return <div>Order Component</div>;
}
    

export const customOrderComponent = () =>
    <ReactTable
        selfManagedData
        components={{DefaultOrder: OrderComponent}}
        tableData={demoData}
        tableStructure={tableStructure} 
    />;

export default { title: 'Component Overrides Examples' };
