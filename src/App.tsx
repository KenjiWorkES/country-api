import React, { useContext, useEffect, useState } from 'react';
import { getAllCountries } from './service/api';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import { Country, CountryContextType } from './types';
import { CountryContext } from './context/country-context';

function App() {
  const { countryList, filteredList, setContryList } =
    useContext<CountryContextType>(CountryContext);

  useEffect(() => {
    const fetch = async () => {
      const countries = await getAllCountries();
      setContryList(countries);
    };

    fetch();
  }, []);

  return (
    <Layout>
      <Home
        countries={filteredList.length === 0 ? countryList : filteredList}
      />
    </Layout>
  );
}

export default App;
