import React, { useContext } from 'react';

import TableCell from './TableCell';
import ComponentsContext from '../../Utils/ComponentsContext';

import StyledRow from './TableRow.styled';

const TableRow = props => {
    const { tableStructure, rowData, columnId } = props;
    const context = useContext(ComponentsContext);

    const Row = context && context.TableRow ? context.TableRow : StyledRow;

    return (
        <Row>
            {tableStructure.map(columnStructure => (
                <TableCell
                    key={`${columnId}-cell-${columnStructure.field}`}
                    data={rowData[columnStructure.field]}
                    columnStructure={columnStructure}
                />
            ))}
        </Row>
    );
};

export default TableRow;
