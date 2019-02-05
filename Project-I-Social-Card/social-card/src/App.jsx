import React from 'react';

import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer.jsx';
import CardContainer from './components/CardComponents/CardContainer.jsx';
import Footer from './components/FooterComponents/Footer.jsx';
import CommentContainer from './components/CommentComponents/CommentContainer.jsx';

function App() {
  return (
    <div className='card'>
      <HeaderContainer />
      <CardContainer />
      <Footer />
      <CommentContainer />
    </div>
  );
};

export default App;
