import React from 'react';
import SearchForm from '../components/filter/SearchForm';
import Filter from '../components/filter/Filter';
import Card from '../components/card/Card';
import { CountriesProps } from '../types';

const Home: React.FC<CountriesProps> = ({ countries }) => {
  return (
    <section className="home">
      <section className="home__controls">
        <SearchForm />
        <Filter />
      </section>
      <section className="home__content">
        {countries.map((country) => (
          <Card key={country.name} country={country} />
        ))}
      </section>
    </section>
  );
};

export default Home;
