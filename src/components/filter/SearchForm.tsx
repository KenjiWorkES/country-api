import React, { useContext, useState, useRef } from 'react';
import { CountryContext } from '../../context/country-context';
import { ThemeContext } from '../../context/theme-context';
import { CountryContextType, Theme } from '../../types';

const SearchForm: React.FC = () => {
  const { theme } = useContext<Theme>(ThemeContext);
  const { searchCountry, filteredList } =
    useContext<CountryContextType>(CountryContext);
  const enteredTextRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    searchCountry(enteredTextRef.current!.value);
  };

  return (
    <form className="searchForm" onSubmit={submitHandler}>
      <button className="searchForm__button" type="submit">
        <img
          className="searchForm__icon"
          alt="search icon"
          src={`/assets/icon-search-${
            theme === 'light' ? 'black' : 'white'
          }.png`}
        />
      </button>
      <input
        id="search"
        className="searchForm__input"
        placeholder="Search for a country..."
        ref={enteredTextRef}
      />
    </form>
  );
};

export default SearchForm;
