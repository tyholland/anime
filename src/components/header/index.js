import React, { useEffect, useState } from 'react';
import { $HeaderContainer, $HeaderTitle, $HeaderTop } from './header.style.js';
import Image from 'next/image.js';
import { useAppContext } from 'src/hooks/context.js';
import Button from 'Components/button';
import { useRouter } from 'next/router.js';

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
            src="/assets/abz-logo.png"
            width={70}
            height={70}
            alt="Anime Brothaz"
            onClick={handleHomeClick}
          />
        </$HeaderTitle>
        <div>
          <Button
            btnText="League"
            redirect="/league"
            customBtnClass="small header text"
          />
          <Button
            btnText="Gameplay"
            redirect="/gameplay"
            customBtnClass="small header text"
          />
          <Button
            btnText="Resources"
            redirect="/resources"
            customBtnClass="small header text"
          />
          <Button
            btnText={btnText}
            redirect={btnlink}
            customBtnClass="small header text"
          />
        </div>
      </$HeaderTop>
    </$HeaderContainer>
  );
};

export default Header;
