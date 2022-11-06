import React from 'react';
import Select from 'react-select';
import './index.css';
import { useDispatch } from 'react-redux';
import {
  CURRENT_DAY, OPTION_YEAR, OPTION_MONTH, OPTION_WEEK,
} from '../consts';
import {
  SelectWrapper, HeaderWrapper, ButtonWrapper, WeekWrapper,
} from '../styled';
import { changeMonthAction, changeYearAction } from '../../Redux/actions/cangeStartDayAction';

function CalendarHeader() {
  const dispatch = useDispatch();

  const [searchYear, setSearchYear] = React.useState(CURRENT_DAY.format('YYYY'));
  const [searchMonth, setSearchMonth] = React.useState(CURRENT_DAY.format('MMM'));

  const getYear = () => (
    OPTION_YEAR.find((sch) => sch.value === searchYear)
  );

  const getMonth = () => (
    OPTION_MONTH.find((sch) => sch.value === searchMonth)
  );
  const changeYear = (newValue) => {
    setSearchYear(newValue.value);
    dispatch(changeYearAction(newValue.value, searchMonth));
  };

  const changeMonth = (newValue) => {
    setSearchMonth(newValue.value);
    dispatch(changeMonthAction(searchYear, newValue.value));
  };

  return (
    <HeaderWrapper>
      <SelectWrapper>
        <Select className="select" onChange={changeYear} value={getYear()} options={OPTION_YEAR} />
        <Select className="select" onChange={changeMonth} value={getMonth()} options={OPTION_MONTH} />
        <ButtonWrapper>
          <button className="selButtM">Month</button>
          <button className="selButtY">Year</button>
        </ButtonWrapper>
      </SelectWrapper>
      <WeekWrapper>
        {OPTION_WEEK.map((week) => (
          <span key={week}>{week}</span>
        ))}
      </WeekWrapper>
    </HeaderWrapper>
  );
}
export default CalendarHeader;
