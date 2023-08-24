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

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENV === 'prod') {
      (window as any).OneSignal = (window as any).OneSignal || [];
      // eslint-disable-next-line no-undef
      (window as any).OneSignal.push(function () {
        // eslint-disable-next-line no-undef
        (window as any).OneSignal.init({
          appId: process.env.NEXT_PUBLIC_ONESIGNAL,
          safari_web_id:
            'web.onesignal.auto.597eddd1-7088-4460-8312-f4c61675b8f7',
          notifyButton: {
            enable: true,
          },
          allowLocalhostAsSecureOrigin: true,
        });
      });
    }
  }, []);

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
          />
          <Button
            btnText="Bracket"
            redirect="/bracket/view"
            customBtnClass="small header text"
          />
          <Button
            btnText={btnText}
            redirect={btnlink}
            customBtnClass="small header text"
          />
        </Styles.HeaderMenu>
        <MobileHeader acct={btnText} acctLink={btnlink} />
      </Styles.HeaderTop>
    </Styles.HeaderContainer>
  );
};

export default Header;
