import React from 'react';
import styled from 'styled-components';

const StyledCell = styled.div`
    padding: 0 30px;
`;

const DefaultCell = ({data}) => <StyledCell className="cell">{data}</StyledCell>;

const TableCell = props => {
    const { data, columnStructure: { customCellComponent: CellComponent } } = props;

    return (
        <div className="cell">
            { CellComponent ? <CellComponent {...props} /> : data }
        </div>
    );
};

export default TableCell;
