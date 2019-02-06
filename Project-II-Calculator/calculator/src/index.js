import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import CalculatorProvider from './providers/CalculatorProvider';
import App from './App';

ReactDOM.render(
  <CalculatorProvider>
    <App />
  </CalculatorProvider>,
  document.getElementById('root')
);
