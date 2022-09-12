import React, { useContext, useEffect, useState } from 'react';
import { getAllCountries } from './service/api';
import { CountryContextType } from './types';

import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Single from './pages/Single';

import { CountryContext } from './context/country-context';
import Loading from './components/ui/Loading';

function App() {
  const [loading, setLoading] = useState<boolean>(false);

  const { countryList, filteredList, setContryList } =
    useContext<CountryContextType>(CountryContext);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const countries = await getAllCountries();
      setLoading(false);
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
            !loading ? (
              <Home
                countries={
                  filteredList.length === 0 ? countryList : filteredList
                }
              />
            ) : (
              <Loading />
            )
          }
        />
        <Route path=":countryName" element={<Single />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
