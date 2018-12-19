import React from 'react';

import './Display.css';

class CalculatorDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="calculator__display-area">0</div>
    );
  }
}

export default CalculatorDisplay;