import React from 'react';

const NumberButton = props => {
  return (
    <div className={props.buttonSize} data-button={props.buttonName} onClick={e => props.handleClick(e)}>{props.buttonName}</div>
  );
};

export default NumberButton;