import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import storeR from './Redux/store';
import App from './compounents/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeR}>
      <App />
    </Provider>
  </React.StrictMode>,
);
