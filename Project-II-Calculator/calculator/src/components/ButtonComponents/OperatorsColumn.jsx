import React from 'react';

import './Button.css';

import OperatorButton from './OperatorButton';

function OperatorsColumn(props) {
  const operators = ['÷', '×', '−', '+', '='];

  return (
    <div className='operators-column'>
      {operators.map(operator => (
        <OperatorButton key={operator} buttonName={operator} />
      ))}
    </div>
  );
}

export default OperatorsColumn;
