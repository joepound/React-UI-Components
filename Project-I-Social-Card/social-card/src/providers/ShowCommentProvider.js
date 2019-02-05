import React, { useState, createContext } from 'react';

export const ShowCommentContext = createContext();

const ShowCommentProvider = props => {
  const [showComment, setShowComment] = useState(false);
  const showCommentContext = {
    showComment,
    toggleShowComment() {
      setShowComment(!showComment);
    }
  };

  return (
    <ShowCommentContext.Provider value={showCommentContext}>
      {props.children}
    </ShowCommentContext.Provider>
  );
};

export default ShowCommentProvider;
