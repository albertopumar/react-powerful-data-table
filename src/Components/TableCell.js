import React from 'react';

const DefaultCell = ({data}) => <div className="cell">{data}</div>;

const TableCell = props => {
    const { data, columnStructure } = props;
    const CellComponent = columnStructure.customCellComponent || DefaultCell;

    return <CellComponent {...props} />;
};

export default TableCell;
