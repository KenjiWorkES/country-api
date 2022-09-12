import React from 'react';
import { CountryProps, CurrencieType, LanguagesType } from '../../types';
import { formatPopulation } from '../../utils';

import BordersInfo from './BordersInfo';

const SingleInfo: React.FC<CountryProps> = ({ country }) => {
  const population = formatPopulation(country!.population);

  let currenciesText = '';
  const currencies: CurrencieType = Object.values(country!.currencie);

  currencies.map((currencie) => {
    currenciesText += currencie!.name + ', ';
  });

  const formatCurrenciesText = currenciesText.substring(
    0,
    currenciesText.length - 2
  );

  let languagesText = '';
  const languages: LanguagesType = Object.values(country!.languages);

  languages.map((lang) => {
    languagesText += lang + ', ';
  });

  const formatLanguagesText = languagesText.substring(
    0,
    languagesText.length - 2
  );
  console.log(country);

  return (
    <>
      <div className="single__container">
        <img className="single__flag" src={country!.flag} alt="" />
      </div>
      <div className="single__container">
        <h1 className="single__name">{country!.name}</h1>
        <div className="single__column">
          <div className="single__info">
            <p className="single__label">Oficial Name:</p>
            <p className="single__text">{country!.officialName}</p>
          </div>
          <div className="single__info">
            <p className="single__label">Population:</p>
            <p className="single__text">{population}</p>
          </div>
          <div className="single__info">
            <p className="single__label">Region:</p>
            <p className="single__text">{country!.region}</p>
          </div>
          <div className="single__info">
            <p className="single__label">Sub Region:</p>
            <p className="single__text">{country!.subRegion}</p>
          </div>
          <div className="single__info">
            <p className="single__label">Capital:</p>
            <p className="single__text">{country!.capital}</p>
          </div>
        </div>
        <div className="single__column">
          <div className="single__info">
            <p className="single__label">Top Level:</p>
            <p className="single__text">{country!.topLevel}</p>
          </div>
          <div className="single__info">
            <p className="single__label">Currencies:</p>
            <p className="single__text">{formatCurrenciesText}</p>
          </div>
          <div className="single__info">
            <p className="single__label">Languages:</p>
            <p className="single__text">{formatLanguagesText}</p>
          </div>
        </div>
        <BordersInfo borders={country!.borders} />
      </div>
    </>
  );
};

export default SingleInfo;
