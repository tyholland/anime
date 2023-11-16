import Header from 'Components/header/header';
import * as GlobalStyles from 'Styles/global.style';
import { UserWrapper } from 'Hooks/user';
import { useEffect } from 'react';
import { addEvent } from 'Utils/amplitude';
import { firebaseApp } from 'Utils/firebase';
import Footer from 'Components/footer/footer';

const MyApp = ({ Component, pageProps, router }) => {
  firebaseApp();

  useEffect(() => {
    const handleRouteChange = () => {
      addEvent('PageView', {
        path: router.state.pathname,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <UserWrapper>
      <GlobalStyles.GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </UserWrapper>
  );
};

export default MyApp;
