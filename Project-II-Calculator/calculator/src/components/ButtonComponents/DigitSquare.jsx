import React from 'react';

import './Button.css';

import NumberButton from './NumberButton';

function DigitSquare(props) {
  const digits = [7, 8, 9, 4, 5, 6, 1, 2, 3];

  return (
    <div className='digit-square'>
      {digits.map(digit => (
        <NumberButton
          key={digit}
          buttonSize='small-button'
          buttonName={digit}
        />
      ))}
    </div>
  );
}

export default DigitSquare;
