import styled from 'styled-components';

//TODO: review responsive styles
const StyledHeaderWrapper = styled.div`
    display: flex;
    min-height: 40px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #6c7ae0;
    line-height: 40px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;

    .header-cell {
        flex: 1 1 0px;
    }
`;

export default StyledHeaderWrapper;
