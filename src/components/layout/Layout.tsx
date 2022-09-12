import React, { useContext, useEffect } from 'react';
import { MainHeader } from './MainHeader';
import { ChildrenProp, Theme } from '../../types';
import { ThemeContext } from '../../context/theme-context';

const Layout: React.FC<ChildrenProp> = ({ children }) => {
  const { theme, setThemeHandler } = useContext<Theme>(ThemeContext);

  useEffect(() => {
    if (localStorage.getItem('countryApi_theme')) {
      const themeSaved = localStorage.getItem('countryApi_theme');
      setThemeHandler(themeSaved);
    }
  }, []);

  return (
    <div className="layout" data-theme={theme}>
      <MainHeader />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
