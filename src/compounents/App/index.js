import moment from 'moment';
import CalendarGrid from '../Calendar';
import Header from '../Header';

moment.updateLocale('en', { week: { dow: 1 } });
const startDay = moment().startOf('month').startOf('week');
const endDay = moment().endOf('month').endOf('week');

const calendar = [];
const day = startDay.clone();

while (!day.isAfter(endDay)) {
  calendar.push(day.clone());
  day.add(1, 'day');
}

// console.exportlog('calendar', calendar);

// window.moment = moment;
// window.startDay = startDay;
// window.endDay = endDay;
// window.day = day;

function App() {
  return (
    <div className="App">
      <Header />
      <CalendarGrid />
    </div>
  );
}

export default App;
