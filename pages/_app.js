import Header from 'Components/header';
import { $GlobalStyles } from 'Styles/global.style';
import { AppWrapper } from 'src/hooks/context';
import { useEffect } from 'react';
import { addEvent } from 'Utils/amplitude';

const MyApp = ({ Component, pageProps, router }) => {
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
    <AppWrapper>
      <$GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </AppWrapper>
  );
};

export default MyApp;
