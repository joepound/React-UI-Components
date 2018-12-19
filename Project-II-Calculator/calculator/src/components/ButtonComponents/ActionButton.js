import React from 'react';

import './Button.css';

const ActionButton = props => {
  return (
    <div className={`calculator__button ${props.className}`}>{props.buttonText}</div>
  );
};

export default ActionButton;