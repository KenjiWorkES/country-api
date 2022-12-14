import React, { useState } from 'react';

import { Country, CountryContextType, ChildrenProp } from '../types';

export const CountryContext = React.createContext<CountryContextType>({
  countryList: [],
  filteredList: [],
  getSingleCountry: () => {},
  filterByRegion: () => {},
  setContryList: () => {},
  searchCountry: () => {},
});

const CountryContextProvider: React.FC<ChildrenProp> = ({ children }) => {
  const [countryList, setContryList] = useState<Country[]>([]);
  const [filteredList, setFilteredList] = useState<Country[]>([]);

  const setContryListHandler = (list: Country[]) => {
    setContryList(list);
  };

  const searchCountry = (text: string) => {
    console.log(countryList);
    if (text.trim() !== '') {
      const listFiltered = countryList.filter((country) =>
        country.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredList(listFiltered);
    } else {
      setFilteredList(countryList);
    }
  };

  const filterByRegion = (value: string) => {
    const listFiltered = countryList.filter((country) =>
      country.region.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredList(listFiltered);
  };

  const getSingleCountry = (text: string | undefined) => {
    const singleCountry = countryList.filter(
      (country) => country.name.toLowerCase() === text?.toLowerCase()
    );
    const country = singleCountry[0];
    return country;
  };

  return (
    <CountryContext.Provider
      value={{
        countryList: countryList,
        filteredList: filteredList,
        getSingleCountry: getSingleCountry,
        filterByRegion: filterByRegion,
        setContryList: setContryListHandler,
        searchCountry: searchCountry,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContextProvider;
