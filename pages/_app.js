import { $GlobalStyles } from "Styles/global.style";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <$GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
