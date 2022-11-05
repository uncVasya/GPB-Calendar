import React from 'react';
import Select from 'react-select';
import './index.css';
import { CURRENT_DAY, OPTION_YEAR, OPTION_MONTH } from '../consts';
import { SelectWrapper, HeaderWrapper, ButtonWrapper } from '../styled';

function Header() {
  const [searchYear, setSearchYear] = React.useState(CURRENT_DAY.format('YYYY'));
  const [searchMonth, setSearchMonth] = React.useState(CURRENT_DAY.format('MMM'));

  const changeYear = (newValue) => {
    setSearchYear(newValue.value);
  };

  const changeMonth = (newValue) => {
    setSearchMonth(newValue.value);
  };

  const getYear = () => (
    OPTION_YEAR.find((sch) => sch.value === searchYear)
  );

  const getMonth = () => (
    OPTION_MONTH.find((sch) => sch.value === searchMonth)
  );

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
    </HeaderWrapper>
  );
}
export default Header;
