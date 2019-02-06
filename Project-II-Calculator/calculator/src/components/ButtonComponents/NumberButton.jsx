import React, { useContext } from 'react';

import { CalculatorContext } from '../../providers/CalculatorProvider';

const NumberButton = props => {
  const { handleClick } = useContext(CalculatorContext);

  return (
    <div
      className={props.buttonSize}
      data-button={props.buttonName}
      onClick={handleClick}
    >
      {props.buttonName}
    </div>
  );
};

export default NumberButton;
