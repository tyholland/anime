import React from 'react';
import { $HeaderContainer, $HeaderTitle, $HeaderTop, $HeaderBtn } from './header.style.js';
import Nav from 'Components/nav';

const Header = () => {
  return (
    <$HeaderContainer>
      <$HeaderTop>
        <$HeaderTitle>
          <img src="/assets/abz-logo.png" />
        </$HeaderTitle>
        <$HeaderBtn
          btnColor="yellow"
          btnText="Login"
          btnTextColor="black"
          redirect="login"
          customBtnClass="small header"
        />
      </$HeaderTop>
      <Nav />
    </$HeaderContainer>
  );
};

export default Header;
