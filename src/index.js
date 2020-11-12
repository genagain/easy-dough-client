import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './styles/main.css';
import 'react-nice-dates/build/style.css'
import './index.css';
import AppWithContext from './AppWithContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWithContext />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
