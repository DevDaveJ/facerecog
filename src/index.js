import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'tachyons';

const PORT = process.env.REACT_APP_SVR_PORT;

ReactDOM.render(
  <React.StrictMode>
    <App env={{
      port: `${PORT}`
    }}/>
  </React.StrictMode>,
  document.getElementById('root')
);
