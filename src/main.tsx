import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '/public/scss/main.scss';
import ThemeContextProvider from './context/theme-context';
import CountryContextProvider from './context/country-context';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <CountryContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </CountryContextProvider>
  </BrowserRouter>
);
