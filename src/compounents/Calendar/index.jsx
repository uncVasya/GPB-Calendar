import React from 'react';

import { CalendarWrapper } from '../styled';

import CalendarGrid from '../CalendarGrid';
import CalendarHeader from '../CalendarHeader';

function Calendar() {
  return (
    <CalendarWrapper>
      <CalendarHeader />
      <CalendarGrid />
    </CalendarWrapper>
  );
}

export default Calendar;
