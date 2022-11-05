import React from 'react';
import { CELLTOTAL } from '../consts';
import {
  CellWrapper, GridWraper, CellDivLine, DayWrapper, RowsInCell,
} from '../styled';

function CalendarGrid() {
  const cellArray = [...new Array(CELLTOTAL)];

  return (
    <GridWraper>
      {
        cellArray.map((el, i) => (
          <CellWrapper key={i}>
            <CellDivLine />
            <RowsInCell
              justifyContent="flex-end"
            >
              <DayWrapper>
                {i}
              </DayWrapper>
            </RowsInCell>
          </CellWrapper>
        ))
      }
    </GridWraper>
  );
}
export default CalendarGrid;
