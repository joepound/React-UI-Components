import React, { useContext } from 'react';

import { CalculatorContext } from './providers/CalculatorProvider';

import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import OperatorsColumn from './components/ButtonComponents/OperatorsColumn';
import DigitSquare from './components/ButtonComponents/DigitSquare';
import NumberButton from './components/ButtonComponents/NumberButton';

function App(props) {
  const { displayText, handleKeyPress } = useContext(CalculatorContext);

  return (
    <div className='calculator' tabIndex='0' onKeyDown={handleKeyPress}>
      <CalculatorDisplay displayText={displayText} />
      <ActionButton buttonSize='large-button' buttonName='clear' />
      <OperatorsColumn />
      <DigitSquare />
      <NumberButton buttonSize='large-button' buttonName={0} />
    </div>
  );
}

export default App;
