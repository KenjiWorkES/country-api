import React from 'react';

const Card: React.FC = () => {
  return (
    <figure className="card">
      <img className="card__image" />
      <figcaption className="card__caption">
        <h2 className="card__name">Germany</h2>
        <div className="card__info">
          <p className="card__label">Population:</p>
          <p className="card__text">80.855</p>
        </div>
        <div className="card__info">
          <p className="card__label">Region:</p>
          <p className="card__text">Europe</p>
        </div>
        <div className="card__info">
          <p className="card__label">Capital:</p>
          <p className="card__text">Berlin</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default Card;
