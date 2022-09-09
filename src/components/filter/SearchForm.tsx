import React from 'react';

const SearchForm: React.FC = () => {
  return (
    <form className="searchForm">
      <button className="searchForm__button">
        <img
          className="searchForm__icon"
          alt="search icon"
          src="/public/assets/icon-search-black.png"
        />
      </button>
      <input
        id="search"
        className="searchForm__input"
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default SearchForm;
