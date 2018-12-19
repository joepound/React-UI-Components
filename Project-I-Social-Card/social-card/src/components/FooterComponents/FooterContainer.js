import React from 'react';

import './Footer.css';

import FooterSocialIcons from './FooterSocialIcons.js';

const FooterContainer = () => {
  return (
    <footer className="card__footer">
      <FooterSocialIcons />
    </footer>
  );
};

export default FooterContainer;