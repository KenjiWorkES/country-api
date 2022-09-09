import React from 'react';
import { MainHeader } from './MainHeader';
import { ChildrenProp } from '../../types';

const Layout: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

export default Layout;
