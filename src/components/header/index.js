import React, { useEffect, useState } from 'react';
import * as Styles from './header.style.js';
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

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENV === 'prod') {
      window.OneSignal = window.OneSignal || [];
      // eslint-disable-next-line no-undef
      OneSignal.push(function () {
        // eslint-disable-next-line no-undef
        OneSignal.init({
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
            btnText="Podcast"
            redirect="/podcast"
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
