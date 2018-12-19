import React, {Component} from 'react';

import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import OperatorButton from './components/ButtonComponents/OperatorButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';

const operatorKeys = ["÷", "×", "-", "+"];
const numKeys = [7, 8, 9, 4, 5, 6, 1, 2, 3];

class App extends Component {
  constructor() {
    super();
  }

  drawOperatorColumn() {
    return operatorKeys.map(operatorKey => <OperatorButton key={operatorKey} buttonText={operatorKey} />)
  }

  drawNumPad() {
    return numKeys.map(numKey => <NumberButton key={numKey.toString()} buttonText={numKey} />);
  }

  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay />
        <ActionButton className="calculator__large-button" buttonText="clear" />
        <div className="calculator__operator-button-column">
          {this.drawOperatorColumn()}
          <ActionButton className="calculator__operation-button" buttonText="=" />
        </div> 
        <div className="calculator__number-pad">
          {this.drawNumPad()}
        </div> 
        <NumberButton className="calculator__large-button" buttonText="0" />
      </div>
    );
  }
}



export default App;
