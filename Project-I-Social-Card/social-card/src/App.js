import React from 'react';

import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer.js';

const App = () => {
  return (
    <div className="card">
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;