import React, { useContext } from 'react';

import { ShowCommentContext } from '../../providers/ShowCommentProvider';

import './Comment.css';

const fitCommentHeight = e => {
  const heightVal = +e.currentTarget.style.height.substring(
    0,
    e.currentTarget.style.height.length - 2
  );

  e.currentTarget.style.height = heightVal > 38 ? heightVal + 'px' : '38px';
  e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
};

const CommentContainer = props => {
  const { showComment } = useContext(ShowCommentContext);

  return (
    <div className={showComment ? 'card__comment' : 'card__comment--hidden'}>
      <textarea
        className='card__comment__textarea'
        placeholder='Write your comment here....'
        onChange={fitCommentHeight}
      />
    </div>
  );
};

export default CommentContainer;
