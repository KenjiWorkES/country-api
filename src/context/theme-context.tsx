import React, { useCallback, useEffect, useState } from 'react';
import { Theme, ChildrenProp } from '../types';

export const ThemeContext = React.createContext<Theme>({
  theme: '',
  setThemeHandler: () => {},
  switchTheme: () => {},
});

const ThemeProvider: React.FC<ChildrenProp> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');

  const switchTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  const setThemeHandler = (text: string) => {
    setTheme(text);
  };

  useEffect(() => {
    localStorage.setItem('countryApi_theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        switchTheme: switchTheme,
        setThemeHandler: setThemeHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
