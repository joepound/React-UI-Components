import React from 'react';
import Moment from 'moment';

import './Header.css';

const HeaderTitle = () => {
  return (
    <div className="card__header__text__heading">
      <h2 className="card__header__text__heading__profile-name">Lambda School</h2>
      <span className="card__header__text__heading__date-and-handle">@LambdaSchool • {Moment().format("DD MMM").toLowerCase()}</span>
    </div>
  );
};

export default HeaderTitle;