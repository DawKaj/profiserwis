import React from 'react';

import SEO from './seo';
import BurgerMenu from '../burger-menu/burger-menu';
import FooterMenu from '../footer-menu/footermenu';

const Layout = props => {
  return (
    <>
      <SEO />
      <BurgerMenu />
      <main>{props.children}</main>
      <FooterMenu />
    </>
  );
};

export default Layout;
