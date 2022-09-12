import React, { useContext } from 'react';
import { ThemeContext } from '../../context/theme-context';
import { Theme } from '../../types';

const ThemeButton: React.FC = () => {
  const { theme, switchTheme } = useContext<Theme>(ThemeContext);

  return (
    <button className="themeButton" onClick={switchTheme}>
      <img
        className="themeButton__icon"
        alt="moon icon"
        src={`/assets/${
          theme === 'light' ? 'icon-moon-line.png' : 'icon-moon-light.png'
        }`}
      />
      <p className="themeButton__text">Dark Mode</p>
    </button>
  );
};

export default ThemeButton;
