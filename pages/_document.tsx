import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async
        ></script>
        <script
          async
          src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
