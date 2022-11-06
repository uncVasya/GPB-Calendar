import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  CellWrapper, GridWraper, CellDivLine, DayWrapper, RowsInCell,
} from '../styled';

function CalendarGrid() {
  const { startDay1 } = useSelector((state) => state);

  const day = startDay1.clone();
  const cellArray = [...new Array(42)].map(() => day.add(1, 'day').clone());

  return (
    <GridWraper>
      {
        cellArray.map((dateItem, i) => (
          <Link
            key={dateItem.format('DDMMYYYY')}
            to="/events"
            style={{ textDecoration: 'none' }}
          >
            <CellWrapper
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
          </Link>
        ))
      }
    </GridWraper>
  );
}
export default CalendarGrid;
