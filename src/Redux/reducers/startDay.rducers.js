import moment from 'moment';
import { CHANGE_MONTH, CHANGE_YEAR } from '../types/types';

const init = moment().startOf('month').startOf('week');

const startDayReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_YEAR:
      return payload;

    case CHANGE_MONTH:
      return payload;

    default:
      return state;
  }
};
export default startDayReducer;
