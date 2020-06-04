import React, { useContext } from 'react';
import styled from 'styled-components';

import TableCell from './TableCell';
import ComponentsContext from '../Utils/ComponentsContext';

const StyledRow = styled.div`
    display: flex;
    min-height: 40px;
    line-height: 40px;

    .cell {
        flex: 1 1 0px;
    }
`;

const TableRow = props => {
    // TODO: Extract cell to component
    // TODO: Responsive
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
