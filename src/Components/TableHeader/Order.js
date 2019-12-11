import React from 'react';

const Order = props => {
    const { columnStructure, order, handleOrderChange } = props;
    return (
        <span
            onClick={() =>
                handleOrderChange({
                    direction: order.direction === 'asc' ? 'desc' : 'asc',
                    field: columnStructure.field
                })
            }
        >
            {columnStructure.title} {order && (order.direction === 'asc' ? '<' : '>')}
        </span>
    );
};

export default Order;
