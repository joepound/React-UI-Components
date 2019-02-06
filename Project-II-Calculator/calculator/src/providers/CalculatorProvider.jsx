import React, { useState, createContext } from 'react';

export const CalculatorContext = createContext();

function CalculatorProvider(props) {
  const [displayText, setDisplayText] = useState('0');
  const [a, setA] = useState(null);
  const [operator, setOperator] = useState(null);
  const [nextNum, setNextNum] = useState(false);
  const [b, setB] = useState(null);
  const [newOperation, setNewOperation] = useState(true);

  const calculatorContext = {
    displayText,
    a,
    operator,
    nextNum,
    b,
    newOperation,

    clear() {
      setDisplayText('0');
      setA(null);
      setOperator(null);
      setNextNum(false);
      setB(null);
      setNewOperation(true);
    },

    operatorPressed(pressed) {
      if (a !== null) {
        if (pressed === '=') {
          calculatorContext.evaluate();
        } else if (b !== null) {
          calculatorContext.evaluate(pressed);
        } else {
          const newDisplay = operator
            ? displayText.substring(0, displayText.length - 1) + pressed
            : displayText + pressed;
          setDisplayText(newDisplay);
          setOperator(pressed);
          setNextNum(true);
        }
      }
    },

    evaluate(newOperator) {
      if (a !== null) {
        let currentA = a;
        let currentB = b !== null ? b : a;
        let currentOperator = newOperator || operator;
        let result;

        switch (currentOperator) {
          case '+':
            result = currentA + currentB;
            break;
          case '−':
            result = currentA - currentB;
            break;
          case '×':
            result = currentA * currentB;
            break;
          case '÷':
            result = currentB !== 0 ? currentA / currentB : 'Error';
            break;
          default:
            result = 'Error';
        }

        setDisplayText(
          `=${String(result).length > 9 ? result.toExponential(2) : result}`
        );
        setOperator(null);
        setNextNum(false);
        setB(null);
      } else {
        setDisplayText(`=${a}`);
      }
      setA(null);
      setNewOperation(true);
    },

    numberPressed(pressed) {
      const newDisplay =
        displayText === '0' || newOperation || nextNum
          ? pressed
          : displayText + pressed;

      setDisplayText(newDisplay);
      setNextNum(false);
      setNewOperation(false);

      if (operator) {
        setB(Number(newDisplay));
      } else {
        setA(Number(newDisplay));
      }
    },

    handleBackspace() {
      if (displayText !== '0') {
        if (isNaN(displayText) && nextNum) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
          setOperator(null);
          setNextNum(false);
        } else if (displayText < 10) {
          setDisplayText('0');

          if (b === null) {
            setA(0);
          } else {
            setB(0);
          }
        } else {
          if (b === null) {
            const newVal = Math.floor(a / 10);
            setDisplayText(String(newVal));
            setA(newVal);
          } else {
            const newVal = Math.floor(b / 10);
            setDisplayText(String(newVal));
            setB(newVal);
          }
        }
      }
    },

    handleClick(e) {
      const button = e.currentTarget.dataset.button;

      if (isNaN(button)) {
        if ('+−×÷'.includes(button)) {
          calculatorContext.operatorPressed(button);
        } else if (button === 'clear') {
          calculatorContext.clear();
        }
      } else {
        calculatorContext.numberPressed(button);
      }
    },

    handleKeyPress(e) {
      const keyPressed = e.keyCode || e.which;

      if (keyPressed >= 48 && keyPressed <= 57) {
        calculatorContext.numberPressed(String.fromCharCode(keyPressed));
      } else if (keyPressed >= 96 && keyPressed <= 105) {
        calculatorContext.numberPressed(String(keyPressed - 96));
      } else {
        const operatorKeyValues = {
          '106': '×',
          '107': '+',
          '109': '−',
          '111': '÷',
          '189': '−',
          '191': '÷'
        };

        if (Object.keys(operatorKeyValues).includes(String(keyPressed))) {
          calculatorContext.operatorPressed(
            operatorKeyValues[String(keyPressed)]
          );
        } else if (keyPressed === 13 || keyPressed === 187) {
          calculatorContext.operatorPressed('=');
        } else if (keyPressed === 27 || keyPressed === 46) {
          calculatorContext.clear();
        } else if (keyPressed === 8) {
          calculatorContext.handleBackspace();
        }
      }
    }
  };

  return (
    <CalculatorContext.Provider value={calculatorContext}>
      {props.children}
    </CalculatorContext.Provider>
  );
}

export default CalculatorProvider;
