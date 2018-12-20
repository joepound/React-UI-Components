import React from 'react';

import './Button.css';

const ActionButton = props => {
  return (
    <div className={`calculator__button ${props.buttonStyle}`} onClick={props.onClick}>{props.buttonText}</div>
  );
};

export default ActionButton;