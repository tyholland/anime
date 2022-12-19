import React from 'react';
import { $HeaderContainer, $HeaderTitle, $HeaderTop, $HeaderBtn } from './header.style.js';
import Nav from 'Components/nav';
import Image from 'next/image.js';

const Header = () => {
  return (
    <$HeaderContainer>
      <$HeaderTop>
        <$HeaderTitle>
          <Image src="/assets/abz-logo.png" width={70} height={70} alt="Anime Brothaz" />
        </$HeaderTitle>
        <$HeaderBtn
          btnColor="yellow"
          btnText="Login"
          btnTextColor="black"
          redirect="/login"
          customBtnClass="small header"
        />
      </$HeaderTop>
      <Nav />
    </$HeaderContainer>
  );
};

export default Header;
