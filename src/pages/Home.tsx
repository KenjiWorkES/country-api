import React from 'react';
import SearchForm from '../components/filter/SearchForm';
import Filter from '../components/filter/Filter';

const Home: React.FC = () => {
  return (
    <section className="home">
      <section className="home__controls">
        <SearchForm />
        <Filter />
      </section>
    </section>
  );
};

export default Home;
