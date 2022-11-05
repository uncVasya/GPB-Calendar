import styled from 'styled-components';

export const GridWraper = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: repeat(6, 1fr);
grid-gap: 10px;
`;

export const CellWrapper = styled.div`
min-width: 14.27%;
height: 150px;
background-color: #ffffff;
color: ${(props) => (props.isCurrentMonth ? 'black' : 'grey')};
`;

export const CellDivLine = styled.div`
width: 100%;
height: 3px;
background-color: #f0f0f0;
margin-bottom: 8px;
`;

export const RowsInCell = styled.div`
display: flex;
justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'flex-start')} ;
`;

export const DayWrapper = styled.div`
height: 33px;
width: 33px;
display: flex;
align-items: center;
justify-content: center;
`;
