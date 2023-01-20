import logo from './logo.svg';
import './App.css';
import Calendar from './Components/Calendar';

import { CurrentDataContext } from './Components/Context';
import { format } from 'date-fns';
import moment from 'moment';

function App() {
  return (
    <>
      <CurrentDataContext.Provider value={new Date().toDateString()}>
        <Calendar />
      </CurrentDataContext.Provider>
    </>
  );
}

export default App;
