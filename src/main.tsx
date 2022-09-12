import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '/public/scss/main.scss';
import ThemeContextProvider from './context/theme-context';
import CountryContextProvider from './context/country-context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CountryContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </CountryContextProvider>
);
