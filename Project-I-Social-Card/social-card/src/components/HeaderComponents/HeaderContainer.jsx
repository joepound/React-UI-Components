import React from 'react';

import './Header.css';

import ImageThumbnail from './ImageThumbnail.jsx';
import HeaderTitle from './HeaderTitle.jsx';
import HeaderContent from './HeaderContent.jsx';

const HeaderContainer = () => {
  return (
    <header className='card__header'>
      <ImageThumbnail />
      <div className='card__header__text'>
        <HeaderTitle />
        <HeaderContent />
      </div>
    </header>
  );
};

export default HeaderContainer;
