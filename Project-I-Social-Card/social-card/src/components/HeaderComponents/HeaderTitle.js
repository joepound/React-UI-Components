import React from 'react';
import Moment from 'moment';

import './Header.css';

const HeaderTitle = () => {
  return (
    <div className="card__header__text__heading">
      <h2 className="card__header__text__heading__title">Lambda School</h2>
      <span className="card__header__text__heading__handle">@LambdaSchool • {Moment().format("Do MMM")}</span>
    </div>
  );
};

export default HeaderTitle;