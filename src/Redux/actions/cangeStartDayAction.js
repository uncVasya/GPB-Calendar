import moment from 'moment';
import { CHANGE_MONTH, CHANGE_YEAR } from '../types/types';

export const changeYearAction = (year, month) => {
  const startDate = moment(`${year}-${month}-01`);

  return {
    type: CHANGE_YEAR,
    payload: moment(startDate).clone().startOf('week'),
  };
};

export const changeMonthAction = (year, month) => {
  const startDate = moment(`${year}-${month}-01`);

  return {
    type: CHANGE_MONTH,
    payload: moment(startDate).clone().startOf('week'),
  };
};
