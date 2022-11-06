import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calendar from '../Calendar';
import Events from '../Events';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
