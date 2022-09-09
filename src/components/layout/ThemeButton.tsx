import React from 'react';

const ThemeButton = () => {
  return (
    <button className="themeButton">
      <img
        className="themeButton__icon"
        alt="moon icon"
        src="/assets/icon-moon-line.png"
      />
      <p className="themeButton__text">Dark Mode</p>
    </button>
  );
};

export default ThemeButton;
