import React, { useEffect, useState } from 'react';
import { getAllCountries } from './service/api';

import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    const fetch = async () => {
      const countries = await getAllCountries();
      console.log(countries);
    };

    fetch();
  }, []);

  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
