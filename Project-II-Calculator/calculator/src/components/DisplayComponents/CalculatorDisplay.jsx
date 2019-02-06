import React, { useContext } from 'react';

import { CalculatorContext } from '../../providers/CalculatorProvider';

import './Display.css';

function CalculatorDisplay(props) {
  const { displayText } = useContext(CalculatorContext);

  return <div className='display-area'>{displayText}</div>;
}

export default CalculatorDisplay;
