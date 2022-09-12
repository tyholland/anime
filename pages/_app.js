import Header from "Components/header";
import { $GlobalStyles } from "Styles/global.style";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <$GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
