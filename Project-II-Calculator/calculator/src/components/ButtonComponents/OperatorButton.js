import React from 'react';

import './Button.css';

const OperatorButton = props => {
  return (
    <div className={`calculator__button calculator__operation-button ${props.className}`} onClick={props.onClick}>{props.buttonText}</div>
  );
};

export default OperatorButton;