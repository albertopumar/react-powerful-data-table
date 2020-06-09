import React from 'react';
import Dropdown from '../Icons/Dropdown';
import Dropup from '../Icons/Dropup';

const Order = props => {
    const { columnStructure, order, handleOrderChange } = props;
    return (
        <>
            <span
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
                {columnStructure.title} 
            </span>
            {order && (order.direction === 'asc' ? <Dropdown /> : <Dropup />)}
        </>
    );
};

export default Order;
