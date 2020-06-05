import React from 'react';

const DefaultCell = ({data}) => <div className="cell">{data}</div>;

const TableCell = props => {
    const { data, columnStructure: { customCellComponent: CellComponent } } = props;

    return (
        <div className="cell">
            { CellComponent ? <CellComponent {...props} /> : data }
        </div>
    );
};

export default TableCell;
