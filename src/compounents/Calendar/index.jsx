import React from 'react';
import moment from 'moment';
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
            isCurrentMonth={moment().isSame(dateItem, 'month')}
            isCurrentDay={moment().isSame(dateItem, 'day')}
          >
            <CellDivLine
              isCurrentDay={moment().isSame(dateItem, 'day')}
            />
            <RowsInCell
              justifyContent="flex-end"
            >
              <DayWrapper
                isCurrentDay={moment().isSame(dateItem, 'day')}
              >
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
