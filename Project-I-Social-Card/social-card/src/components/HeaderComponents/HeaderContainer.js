import React from 'react';

import './Header.css';

import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';

const HeaderContainer = () => {
  return (
    <header className="card__header">
      <ImageThumbnail />
      <section className="card__header__text">
        <HeaderTitle />
        <HeaderContent />
      </section>
    </header>
  );
};

export default HeaderContainer;