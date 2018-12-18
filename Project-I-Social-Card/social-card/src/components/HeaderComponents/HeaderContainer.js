import React from 'react';

import './Header.css';

import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';

const HeaderContainer = () => {
  return (
    <React.Fragment>
      <ImageThumbnail />
      <section className="card__header">
        <HeaderTitle />
        <HeaderContent />
      </section>
    </React.Fragment>
  );
};

export default HeaderContainer;