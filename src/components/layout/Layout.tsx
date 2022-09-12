import React, { useContext } from 'react';
import { MainHeader } from './MainHeader';
import { ChildrenProp, Theme } from '../../types';
import { ThemeContext } from '../../context/theme-context';

const Layout: React.FC<ChildrenProp> = ({ children }) => {
  const { theme } = useContext<Theme>(ThemeContext);

  return (
    <div className="layout" data-theme={theme}>
      <MainHeader />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
