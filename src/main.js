import React from 'react';
import ReactDOM from 'react-dom';
import Style from './style/style.sass';
import SelectStyle from 'react-select/dist/react-select.min.css';
import Data from './telemetry.js';

ReactDOM.render(
  <Data/>,
  document.getElementById('data')
);
