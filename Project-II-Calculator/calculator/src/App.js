import React from 'react';

import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import OperatorButton from './components/ButtonComponents/OperatorButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';

const operators = ["÷", "×", "−", "+"];
const nums = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isNewNum: true,
      hasTwoTerms: false,
      expression: "",
      display: "0"
    };
  }

  buttonClick = button => {
    const operatorButtonClick = button => {
      if (this.state.display === "ERROR_MAX") {
        return;
      } 
      if (operators.includes(this.state.expression.slice(-1))) {
        this.setState({expression: this.state.expression.substring(0, this.state.expression.length - 2) + ` ${button}`});
        this.setState({display: this.state.display.substring(0, this.state.display.length - 1) + button});
      } else {
        if (!this.state.isNewNum || this.state.hasTwoTerms) {
          this.setState({isNewNum: true});
          this.setState({hasTwoTerms: true});

          if (this.state.hasTwoTerms) {
            let result = evaluateExpression().toString();
            this.setState({expression: result + ` ${button}`});
            this.setState({display: result + button});
          } else {
            this.setState({expression: this.state.expression + ` ${button}`});
            this.setState({display: this.state.display + button});
          }
        } else if (!this.state.expression) {
          this.setState({expression: "0 " + button});
          this.setState({display: this.state.display + button});
          this.setState({hasTwoTerms: true});
        }
      }
    };

    const evaluateExpression = () => {
      if (!this.state.expression) {
        return "0";
      }

      console.log(operators.includes(this.state.expression[0]) + " " + String(this.state.expression[0]) + " " + operators.includes(this.state.expression[0]));

      if (this.state.hasTwoTerms) {
        const expressionArray = this.state.expression.trim().split(" ");
        console.log(expressionArray)

        if(!expressionArray[2]) {
          return expressionArray[0];
        }

        switch (expressionArray[1]) {
          case "÷" :
            return Number(expressionArray[0]) / Number (expressionArray[2]);

          case "×" :
            return Number(expressionArray[0]) * Number (expressionArray[2]);

          case "−" :
            return Number(expressionArray[0]) - Number (expressionArray[2]);

          case "+" :
            return Number(expressionArray[0]) + Number (expressionArray[2]);
        } 
      }

      return this.state.expression;
    };

    switch (button) {
      case "clear" :
        this.setState({isNewNum: true});
        this.setState({hasTwoTerms: false});
        this.setState({expression: ""});
        this.setState({display: "0"});
        break;

      case "=" :
        if (this.state.display === "ERROR_MAX") {
          break;
        } 

        let result = evaluateExpression().toString().trim();
        this.setState({isNewNum: true});

        if (result.length < 10) {
          this.setState({expression: result});
          this.setState({display: result});  
        } else {
          this.setState({expression: ""});
          this.setState({display: "ERROR_MAX"});
        }
        
        break;

      case "÷" : case "×" : case "−" : case "+" :
        operatorButtonClick(button);
        break;

      case "0" :
        if (this.state.display === "0" && this.state.expression) {
          break;
        }

      default:
        if (this.state.display.length >= 9 && !operators.includes(this.state.expression.slice(-1))) {
          break;
        }
        if (this.state.isNewNum) {
          this.setState({isNewNum: false});
          this.setState({expression: operators.includes(this.state.display.slice(-1)) ? 
                                      this.state.expression + ` ${button}` :
                                      button});
          this.setState({display: button});
        } else {
          this.setState({expression: this.state.expression + button});
          this.setState({display: this.state.display === "0" ? button : this.state.display + button});
        }
    }
  }

  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay display={this.state.display} />
        <ActionButton buttonStyle="calculator__large-button" buttonText="clear" onClick={() => this.buttonClick("clear")} />
        <div className="calculator__operator-button-column">
          {operators.map(operator => <OperatorButton key={operator} buttonText={operator} onClick={() => this.buttonClick(operator)} />)}
          <ActionButton buttonStyle="calculator__operation-button" buttonText="=" onClick={() => this.buttonClick("=")} />
        </div> 
        <div className="calculator__number-pad">
          {nums.map(num => <NumberButton key={num.toString()} buttonText={num} onClick={() => this.buttonClick(num)} />)}
        </div> 
        <NumberButton buttonStyle="calculator__large-button" buttonText="0" onClick={() => this.buttonClick("0")} />
      </div>
    );
  }
}

export default App;