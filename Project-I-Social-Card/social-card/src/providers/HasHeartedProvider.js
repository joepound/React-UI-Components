import React, { useState, createContext } from 'react';

export const HasHeartedContext = createContext();

const HasHeartedProvider = props => {
  const [hasHearted, setHasHearted] = useState(
    localStorage.getItem('hasHearted') || 'false'
  );
  const hasHeartedContext = {
    hasHearted,
    toggleHeart() {
      setHasHearted(hasHearted === 'false' ? 'true' : 'false');
    }
  };

  return (
    <HasHeartedContext.Provider value={hasHeartedContext}>
      {props.children}
    </HasHeartedContext.Provider>
  );
};

export default HasHeartedProvider;
