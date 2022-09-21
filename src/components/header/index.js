import React from 'react';
import { $HeaderContainer, $HeaderTitle, $HeaderTop, $HeaderBtn } from './header.style.js';
import Nav from 'Components/nav';

const Header = () => {
  return (
    <$HeaderContainer>
      <$HeaderTop>
        <$HeaderTitle>
          ABZ
        </$HeaderTitle>
        <$HeaderBtn
          btnColor="yellow"
          btnText="Login"
          btnTextColor="black"
          redirect="login"
          customBtnClass="small"
        />
      </$HeaderTop>
      <Nav />
    </$HeaderContainer>
  );
};

export default Header;
