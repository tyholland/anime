import React, { useEffect, useState } from 'react';
import { $HeaderContainer, $HeaderTitle, $HeaderTop } from './header.style.js';
import Nav from 'Components/nav';
import Image from 'next/image.js';
import { useAppContext } from 'src/hooks/context.js';
import Button from 'Components/button';

const Header = () => {
  const { currentUser } = useAppContext();
  const [btnText, setBtnText] = useState('Login');
  const [btnlink, setBtnlink] = useState('/login');

  const updateLoginStatus = () => {
    if (currentUser) {
      setBtnText('Account');
      setBtnlink('/account');
    }
  };

  useEffect(() => {
    updateLoginStatus();
  }, [currentUser]);

  return (
    <$HeaderContainer>
      <$HeaderTop>
        <$HeaderTitle>
          <Image
            src="/assets/abz-logo.png"
            width={70}
            height={70}
            alt="Anime Brothaz"
          />
        </$HeaderTitle>
        <Button
          btnText={btnText}
          btnTextColor="black"
          redirect={btnlink}
          customBtnClass="small header text"
        />
      </$HeaderTop>
      <Nav />
    </$HeaderContainer>
  );
};

export default Header;
