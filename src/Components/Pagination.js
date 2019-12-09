import React, { useContext } from 'react';
import styled from 'styled-components';

import ComponentsContext from '../Utils/ComponentsContext';

const StyledPaginationWrapper = styled.div`
    display: flex;
    min-height: 40px;
    line-height: 40px;
`;

const StyledPageButton = styled.div`
    display: inline-block;
    min-width: 32px;
    height: 32px;
    margin-right: 8px;
    font-family: Arial;
    line-height: 30px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid ${props => (props.selected ? '#3fc5f0' : '#d9d9d9')};
    border-radius: 4px;
    cursor: pointer;
    color: ${props => (props.selected ? '#3fc5f0' : 'rgba(0, 0, 0, 0.65)')};
`;

const Pagination = ({ pagination, handlePageChange }) => {
    //TODO: Responsive mobile pagination
    //TODO: Change next and prev icons

    const pageNumber = Math.ceil(pagination.totalCount / pagination.pageSize);

    const isPageStarting = pagination.currentPage > 3;
    const isPageEnding = pagination.currentPage < pageNumber - 4;

    //TODO: refactor for legibility
    const pages = [...Array(pageNumber).keys()].slice(
        isPageStarting ? (!isPageEnding && pageNumber > 7 ? pageNumber - 5 : pagination.currentPage - 1) : 0,
        isPageEnding ? (!isPageStarting && pageNumber > 7 ? 5 : pagination.currentPage + 2) : pageNumber
    );

    const context = useContext(ComponentsContext);

    const PaginationWrapper =
        context && context.PaginationWrapper ? context.PaginationWrapper : StyledPaginationWrapper;
    const PageButton = context && context.PageButton ? context.PageButton : StyledPageButton;

    return (
        <PaginationWrapper>
            <PageButton
                disabled={pagination.currentPage === 0}
                onClick={() => pagination.currentPage > 0 && handlePageChange(pagination.currentPage - 1)}
            >
                {'<'}
            </PageButton>

            {pagination.currentPage > 3 && (
                <React.Fragment>
                    <PageButton onClick={() => handlePageChange(0)}>1</PageButton>
                    <PageButton>...</PageButton>
                </React.Fragment>
            )}

            {pages.map(page => (
                <PageButton
                    key={`page-key-${page}`}
                    selected={pagination.currentPage === page}
                    onClick={() => handlePageChange(page)}
                >
                    {page + 1}
                </PageButton>
            ))}

            {pagination.currentPage < pageNumber - 4 && (
                <React.Fragment>
                    <PageButton>...</PageButton>
                    <PageButton onClick={() => handlePageChange(pageNumber - 1)}>{pageNumber}</PageButton>
                </React.Fragment>
            )}

            <PageButton
                disabled={pagination.currentPage === pageNumber - 1}
                onClick={() => pagination.currentPage < pageNumber - 1 && handlePageChange(pagination.currentPage + 1)}
            >
                {'>'}
            </PageButton>
        </PaginationWrapper>
    );
};

export default Pagination;
