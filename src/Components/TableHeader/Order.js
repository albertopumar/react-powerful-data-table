import React from 'react';
import Dropdown from '../Icons/Dropdown';
import Dropup from '../Icons/Dropup';

const Order = props => {
    const { columnStructure, order, handleOrderChange } = props;
    return (
        <div
            onClick={() =>
                handleOrderChange(
                    {
                        direction: order.direction === 'asc' ? 'desc' : 'asc',
                        field: columnStructure.field
                    },
                    columnStructure.customSort
                )
            }
        >
            <span> {columnStructure.title} </span>
            {order && (order.direction === 'asc' ? <Dropdown /> : <Dropup />)}
        </div>
    );
};

export default Order;
