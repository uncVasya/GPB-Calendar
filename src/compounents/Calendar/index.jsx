import React from 'react';
import { CELLTOTAL, CURRENT_DAY } from '../consts';
import {
  CellWrapper, GridWraper, CellDivLine, DayWrapper, RowsInCell,
} from '../styled';

function CalendarGrid({ startDay }) {
  const day = startDay.clone();
  const cellArray = [...new Array(CELLTOTAL)].map(() => day.add(1, 'day').clone());

  return (
    <GridWraper>
      {
        cellArray.map((dateItem, i) => (
          <CellWrapper
            key={dateItem.format('DDMMYYYY')}
            isCurrentMonth={dateItem.format('MMM') === CURRENT_DAY.format('MMM')}
          >
            <CellDivLine />
            <RowsInCell
              justifyContent="flex-end"
            >
              <DayWrapper>
                {dateItem.format('D')}
              </DayWrapper>
            </RowsInCell>
          </CellWrapper>
        ))
      }
    </GridWraper>
  );
}
export default CalendarGrid;
