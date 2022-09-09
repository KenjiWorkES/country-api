import React, { useEffect, useState } from 'react';
import { getAllCountries } from './service/api';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import { Country } from './types';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const countries = await getAllCountries();
      setCountries(countries);
    };

    fetch();
  }, []);

  return (
    <Layout>
      <Home countries={countries} />
    </Layout>
  );
}

export default App;
