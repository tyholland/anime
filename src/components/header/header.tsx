import React, { useEffect, useState } from 'react';
import * as Styles from './header.style';
import Image from 'next/image';
import { useUserContext } from 'Hooks/user';
import Button from 'Components/button/button';
import { useRouter } from 'next/router';
import MobileHeader from 'Components/mobile-header/mobile-header';

const Header = () => {
  const { currentUser } = useUserContext();
  const router = useRouter();
  const [btnText, setBtnText] = useState<string>('Login');
  const [btnlink, setBtnlink] = useState<string>('/login');

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
    <Styles.HeaderContainer>
      <Styles.HeaderTop>
        <Styles.HeaderTitle>
          <Image
            src="/assets/logo/afl-logo.webp"
            width={70}
            height={70}
            alt="Anime Fantasy League"
            onClick={handleHomeClick}
          />
        </Styles.HeaderTitle>
        <Styles.HeaderMenu>
          <Button
            btnText="League"
            redirect="/league/view"
            customBtnClass="small header text"
            isText
          />
          <Button
            btnText="Bracket"
            redirect="/bracket/view"
            customBtnClass="small header text"
            isText
          />
          <Button
            btnText={btnText}
            redirect={btnlink}
            customBtnClass="small header text"
            isText
          />
        </Styles.HeaderMenu>
        <MobileHeader acct={btnText} acctLink={btnlink} />
      </Styles.HeaderTop>
    </Styles.HeaderContainer>
  );
};

export default Header;
