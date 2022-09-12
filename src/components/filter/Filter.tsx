import React, { useState, useContext } from 'react';
import { CountryContext } from '../../context/country-context';
import { CountryContextType } from '../../types';

const Filter: React.FC = () => {
  const [selected, setSelected] = useState<string>('');

  const { filterByRegion } = useContext<CountryContextType>(CountryContext);

  const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
    filterByRegion(event.target.value);
  };

  return (
    <select value={selected} className="filter" onChange={changeHandler}>
      <option value="" disabled={true}>
        Filter by Region
      </option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default Filter;
