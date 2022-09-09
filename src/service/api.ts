const baseUrl = 'https://restcountries.com/v3.1';
import { CountryElement, Country } from '../types';

export const getAllCountries = async () => {
  const url = baseUrl + '/all';

  const response = await fetch(url);
  const data = await response.json();

  const formatedCountries: Country[] = [];

  data.forEach((country: CountryElement) => {
    const formatedCountry: Country = {
      name: country.name.common,
      officialName: country.name.official,
      population: country.population,
      region: country.region,
      subRegion: country.subregion,
      capital: country.capital,
      topLevel: country.tld,
      currencie: country.currencies,
      languages: country.languages,
      flag: country.flags.svg,
    };

    formatedCountries.push(formatedCountry);
  });

  return formatedCountries;
};
