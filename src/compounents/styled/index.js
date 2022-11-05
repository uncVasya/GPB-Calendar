import styled from 'styled-components';

// ****-----Header_STILES----****//
export const HeaderWrapper = styled.div`

`;

export const SelectWrapper = styled.div`
display: flex;
justify-content: end;
`;

export const ButtonWrapper = styled.div`
margin-left: 24px;
`;

// ****-----Calendar_STILES----****//

export const GridWraper = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: repeat(6, 1fr);
grid-gap: 10px;
`;

export const CellWrapper = styled.div`
min-width: 14.27%;
height: 150px;
background-color: ${(props) => (props.isCurrentDay ? '#e2f7ff' : '#ffffff')};
color: ${(props) => (props.isCurrentMonth ? 'black' : 'grey')};
`;

export const CellDivLine = styled.div`
width: 100%;
height: 3px;
background-color: ${(props) => (props.isCurrentDay ? '#008eff' : '#f0f0f0')};
margin-bottom: 8px;
`;

export const RowsInCell = styled.div`
display: flex;
justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'flex-start')};
`;

export const DayWrapper = styled.div`
height: 33px;
width: 33px;
display: flex;
align-items: center;
justify-content: center;
color: ${(props) => (props.isCurrentDay ? '#008eff' : '')};
`;
