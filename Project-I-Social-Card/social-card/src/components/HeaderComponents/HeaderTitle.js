import React from 'react';

import './Header.css';

const HeaderTitle = () => {
  return (
    <React.Fragment>
      <h2 className="card__header__title">Lambda School</h2>
      <span className="card__header__handle">@LambdaSchool</span>
      <span className="card__header__date"></span>
    </React.Fragment>
  );
};

export default HeaderTitle;