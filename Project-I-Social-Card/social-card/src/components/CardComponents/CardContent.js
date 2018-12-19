import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div className="card__body__content">
      <h3 className="card__body__content__title">Get started with React</h3>
      <p className="card__body__content__preview">React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
      <p className="card__body__content__url">reactjs.org</p>
    </div>
  );
};

export default CardContent;