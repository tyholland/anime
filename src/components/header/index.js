import React from 'react';
import { $HeaderContainer, $HeaderTitle } from './header.style.js';
import Nav from 'Components/nav';

const Header = () => {
  return (
    <$HeaderContainer>
      <$HeaderTitle>
        ABZ
      </$HeaderTitle>
      <Nav />
    </$HeaderContainer>
  );
};

export default Header;
