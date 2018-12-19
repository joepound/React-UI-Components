import React from 'react';

import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import OperatorButton from './components/ButtonComponents/OperatorButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';

const operators = ["÷", "×", "−", "+"];
const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3];

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay />
        <ActionButton className="calculator__large-button" buttonText="clear" />
        <div className="calculator__operator-button-column">
          {operators.map(operator => <OperatorButton key={operator} buttonText={operator} />)}
          <ActionButton className="calculator__operation-button" buttonText="=" />
        </div> 
        <div className="calculator__number-pad">
          {nums.map(num => <NumberButton key={num.toString()} buttonText={num} />)}
        </div> 
        <NumberButton className="calculator__large-button" buttonText="0" />
      </div>
    );
  }
}

export default App;