import React from 'react';

import './Display.css';

const CalculatorDisplay = props => {
  return (
    <div className="calculator__display-area">{props.display}</div>
  );
}

export default CalculatorDisplay;