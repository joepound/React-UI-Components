import React from 'react';

import './Button.css';

const NumberButton = props => {
  return (
    <div className={`calculator__button calculator__number-button ${props.className}`} onClick={props.onClick}>{props.buttonText}</div>
  );
};

export default NumberButton;