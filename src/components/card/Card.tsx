import React from 'react';
import { CountryProps } from '../../types';
import { formatPopulation } from '../../utils';

const Card: React.FC<CountryProps> = ({ country }) => {
  const population = formatPopulation(country.population);

  return (
    <figure className="card">
      <div className="card__image">
        <div className="card__overlay"></div>
        <img className="card__flag" src={country.flag} />
      </div>

      <figcaption className="card__caption">
        <h2 className="card__name">{country.name}</h2>
        <div className="card__info">
          <p className="card__label">Population:</p>
          <p className="card__text">{population}</p>
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
