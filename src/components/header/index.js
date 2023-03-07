import React, { useEffect, useState } from 'react';
import {
  $HeaderContainer,
  $HeaderTitle,
  $HeaderTop,
  $HeaderMenu,
} from './header.style.js';
import Image from 'next/image.js';
import { useAppContext } from 'src/hooks/context.js';
import Button from 'Components/button';
import { useRouter } from 'next/router.js';
import MobileHeader from 'Components/mobile-header/index.js';

const Header = () => {
  const { currentUser } = useAppContext();
  const router = useRouter();
  const [btnText, setBtnText] = useState('Login');
  const [btnlink, setBtnlink] = useState('/login');

  const updateLoginStatus = () => {
    setBtnText(currentUser ? 'Account' : 'Login');
    setBtnlink(currentUser ? '/account' : '/login');
  };

  const handleHomeClick = () => {
    router.push('/');
  };

  useEffect(() => {
    updateLoginStatus();
  }, [currentUser]);

  return (
    <$HeaderContainer>
      <$HeaderTop>
        <$HeaderTitle>
          <Image
            src="/assets/abz-logo.webp"
            width={70}
            height={70}
            alt="Anime Brothaz"
            onClick={handleHomeClick}
          />
        </$HeaderTitle>
        <$HeaderMenu>
          <Button
            btnText="League"
            redirect="/league"
            customBtnClass="small header text"
          />
          <Button
            btnText="Bracket"
            redirect="/bracket/view"
            customBtnClass="small header text"
          />
          <Button
            btnText="Podcast"
            redirect="/podcast"
            customBtnClass="small header text"
          />
          <Button
            btnText={btnText}
            redirect={btnlink}
            customBtnClass="small header text"
          />
        </$HeaderMenu>
        <MobileHeader acct={btnText} acctLink={btnlink} />
      </$HeaderTop>
    </$HeaderContainer>
  );
};

export default Header;
