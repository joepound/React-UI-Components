import React, { useContext } from 'react';

import { CalculatorContext } from '../../providers/CalculatorProvider';

function OperatorButton(props) {
  const { handleClick } = useContext(CalculatorContext);

  return (
    <div
      className='small-button operator-button'
      data-button={props.buttonName}
      onClick={handleClick}
    >
      {props.buttonName}
    </div>
  );
}

export default OperatorButton;
