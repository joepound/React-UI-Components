import React, { useContext } from 'react';

import { CalculatorContext } from '../../providers/CalculatorProvider';

import './Button.css';

const ActionButton = props => {
  const { handleClick } = useContext(CalculatorContext);

  return (
    <div
      className={`${props.buttonSize} action-button`}
      data-button={props.buttonName}
      onClick={e => handleClick(e)}
    >
      {props.buttonName}
    </div>
  );
};

export default ActionButton;
