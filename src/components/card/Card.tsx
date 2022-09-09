import React from 'react';
import { CountryProps } from '../../types';

const Card: React.FC<CountryProps> = ({ country }) => {
  console.log(country);

  return (
    <figure className="card">
      <img className="card__image" src={country.flag} />
      <figcaption className="card__caption">
        <h2 className="card__name">{country.name}</h2>
        <div className="card__info">
          <p className="card__label">Population:</p>
          <p className="card__text">{country.population}</p>
        </div>
        <div className="card__info">
          <p className="card__label">Region:</p>
          <p className="card__text">{country.region}</p>
        </div>
        <div className="card__info">
          <p className="card__label">Capital:</p>
          <p className="card__text">{country.capital}</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default Card;
