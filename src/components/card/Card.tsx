import React from 'react';
import { CountryProps } from '../../types';
import { formatPopulation } from '../../utils';

import { useNavigate } from 'react-router-dom';

const Card: React.FC<CountryProps> = ({ country }) => {
  const population = formatPopulation(country!.population);

  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/' + country!.name);
  };

  return (
    <figure className="card" onClick={onClickHandler}>
      <div className="card__image">
        <div className="card__overlay"></div>
        <img className="card__flag" src={country!.flag} />
      </div>

      <figcaption className="card__caption">
        <h2 className="card__name">{country!.name}</h2>
        <div className="card__info">
          <p className="card__label">Population:</p>
          <p className="card__text">{population}</p>
        </div>
        <div className="card__info">
          <p className="card__label">Region:</p>
          <p className="card__text">{country!.region}</p>
        </div>
        <div className="card__info">
          <p className="card__label">Capital:</p>
          <p className="card__text">{country!.capital}</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default Card;
