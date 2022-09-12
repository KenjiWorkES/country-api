import React, { useCallback, useEffect, useState } from 'react';
import { Theme, ChildrenProp } from '../types';

export const ThemeContext = React.createContext<Theme>({
  theme: '',
  switchTheme: () => {},
});

const ThemeProvider: React.FC<ChildrenProp> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');

  const switchTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('countryApi_theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, switchTheme: switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
