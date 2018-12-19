import React from 'react';

import './Footer.css';

import CommentsIcon from './../../images/comment.png';
import RetweetsIcon from './../../images/retweet.png';
import HeartsIcon from './../../images/heart.png';
import MessageIcon from './../../images/message.png';

const FooterSocialIcons = () => {
  const socialIcons = [CommentsIcon, RetweetsIcon, HeartsIcon, MessageIcon]
                        .map(icon => <a className="card__footer__social-links__icon" href="https://twitter.com/login?lang=en"><img src={icon}/></a>);

  return (
    <div className="card__footer__social-links">{socialIcons}</div>
  );
};

export default FooterSocialIcons;