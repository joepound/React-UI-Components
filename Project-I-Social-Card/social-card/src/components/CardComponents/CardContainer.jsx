import React from 'react';

import './Card.css';

import CardBanner from './CardBanner.jsx';
import CardContent from './CardContent.jsx';

const CardContainer = () => {
  return (
    <a className='card__body' href='https://www.reactjs.org'>
      <CardBanner />
      <CardContent />
    </a>
  );
};

export default CardContainer;
