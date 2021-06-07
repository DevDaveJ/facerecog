import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'tachyons';

const PORT = process.env.REACT_APP_SVR_PORT ? (':' + process.env.REACT_APP_SVR_PORT) : '';
const baseURL = `${process.env.REACT_APP_SVR}${PORT}/api`;

ReactDOM.render(
  <React.StrictMode>
    <App env={{
      baseURL: `${baseURL}`
    }}/>
  </React.StrictMode>,
  document.getElementById('root')
);
