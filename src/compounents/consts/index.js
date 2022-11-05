import moment from 'moment';

export const CELLTOTAL = 42;
export const CURRENT_DAY = moment();

//* ******* crutch ******** */

export const OPTION_YEAR = [
  { value: '2020', label: '2020' },
  { value: '2021', label: '2021' },
  { value: '2022', label: '2022' },
  { value: '2023', label: '2023' },
];

export const OPTION_MONTH = moment.monthsShort()
  .map((el) => ({ value: `${el}`, label: `${el}` }));
