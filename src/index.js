import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

document.getElementById('tick').volume = 0.2;
document.getElementById('bank').volume = 0.2;
document.getElementById('bomb').volume = 0.5;
document.getElementById('lifeUp').volume = 1.0;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
