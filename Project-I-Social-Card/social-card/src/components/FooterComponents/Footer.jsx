import React, { useContext, useEffect } from 'react';

import { ShowCommentContext } from '../../providers/ShowCommentProvider';
import { HasHeartedContext } from '../../providers/HasHeartedProvider';

import './Footer.css';

import SocialIcon from './SocialIcon.jsx';

const retweet = () =>
  (window.location.href = 'https://twitter.com/login?lang=en');
const message = () =>
  (window.location.href = 'https://twitter.com/login?lang=en');

const Footer = props => {
  const { toggleShowComment } = useContext(ShowCommentContext);

  const { hasHearted, toggleHeart } = useContext(HasHeartedContext);
  useEffect(() => localStorage.setItem('hasHearted', hasHearted));

  return (
    <div className='card__footer'>
      <SocialIcon
        src='/images/comment.png'
        alt='Comment'
        action={toggleShowComment}
      />
      <SocialIcon src='/images/retweet.png' alt='Retweet' action={retweet} />
      <SocialIcon
        src={
          hasHearted === 'true' ? '/images/hearted.png' : '/images/heart.png'
        }
        alt='Heart'
        action={toggleHeart}
        hasHearted={hasHearted === 'true'}
      />
      <SocialIcon src='/images/message.png' alt='Message' action={message} />
    </div>
  );
};

export default Footer;
