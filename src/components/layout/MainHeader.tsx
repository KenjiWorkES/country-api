import React from 'react';
import ThemeButton from './ThemeButton';

export const MainHeader = () => {
  return (
    <header className="header">
      <div className="header__content">
        <h2 className="header__logo">Where in the world</h2>
        <ThemeButton />
      </div>
    </header>
  );
};
