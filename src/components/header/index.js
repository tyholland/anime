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
          btnColor="blue"
          btnText="Login"
          btnTextColor="white"
          redirect=""
          customBtnClass="small"
        />
      </$HeaderTop>
      <Nav />
    </$HeaderContainer>
  );
};

export default Header;
