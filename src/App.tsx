import React, { useContext, useEffect, useState } from 'react';
import { getAllCountries } from './service/api';
import { CountryContextType } from './types';

import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Single from './pages/Single';

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
      <Routes>
        <Route
          path="/"
          element={
            <Home
              countries={filteredList.length === 0 ? countryList : filteredList}
            />
          }
        />
        <Route path=":countryName" element={<Single />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
