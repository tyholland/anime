import Header from 'Components/header';
import { $GlobalStyles } from 'Styles/global.style';
import { AppWrapper } from 'src/hooks/context';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppWrapper>
      <$GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </AppWrapper>
  );
};

export default MyApp;
