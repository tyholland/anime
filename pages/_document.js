import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async=""
        ></script>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6648399860832112"
          crossorigin="anonymous"
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
