import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ShowCommentProvider from './providers/ShowCommentProvider';
import HasHeartedProvider from './providers/HasHeartedProvider';
import App from './App.jsx';

ReactDOM.render(
  <ShowCommentProvider>
    <HasHeartedProvider>
      <App />
    </HasHeartedProvider>
  </ShowCommentProvider>,
  document.getElementById('root')
);
