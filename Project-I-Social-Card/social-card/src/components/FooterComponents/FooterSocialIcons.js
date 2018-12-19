import React from 'react';

import './Footer.css';

import CommentsIcon from './../../images/comment.png';
import RetweetsIcon from './../../images/retweet.png';
import HeartsIcon from './../../images/heart.png';
import MessageIcon from './../../images/message.png';

const FooterSocialIcons = () => {
  return (
    <div className="card__footer__social-links">
      <img className="card__footer__social-links__icon" src={CommentsIcon}/>
      <img className="card__footer__social-links__icon" src={RetweetsIcon}/>
      <img className="card__footer__social-links__icon" src={HeartsIcon}/>
      <img className="card__footer__social-links__icon" src={MessageIcon}/>
    </div>
  );
};

export default FooterSocialIcons;