import React from 'react';
import { CELLTOTAL } from '../consts';
import { CellWrapper, GridWraper } from '../styled';

function CalendarGrid() {
  const cellArray = [...new Array(CELLTOTAL)];

  return (
    <GridWraper>
      {
        cellArray.map((el, i) => (
          <CellWrapper key={i}>
            {i}
          </CellWrapper>
        ))
      }
    </GridWraper>
  );
}
export default CalendarGrid;
