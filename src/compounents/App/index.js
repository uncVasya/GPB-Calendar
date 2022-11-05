import moment from 'moment';
import CalendarGrid from '../Calendar';
import Header from '../Header';

const startDay = moment().startOf('month').startOf('week');

function App() {
  return (
    <div className="App">
      <Header />
      <CalendarGrid startDay={startDay} />
    </div>
  );
}

export default App;
