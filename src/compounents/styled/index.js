import styled from 'styled-components';

export const GridWraper = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: repeat(6, 1fr);
`;

export const CellWrapper = styled.div`
width: 14.27%;
min-height: 150px;
`;
