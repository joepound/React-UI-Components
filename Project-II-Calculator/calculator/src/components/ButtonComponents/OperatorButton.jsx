import React from 'react';

const OperatorButton = props => {
  return (
    <div className="small-button operator-button" data-button={props.buttonName} onClick={e => props.handleClick(e)}>{props.buttonName}</div>
  );
};

export default OperatorButton;