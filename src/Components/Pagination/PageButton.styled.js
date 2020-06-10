import styled from 'styled-components';

const PageButton = styled.div`
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

export default PageButton;
