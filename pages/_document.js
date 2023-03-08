import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script
          id="Adsense-id"
          data-ad-client="ca-pub-6648399860832112"
          async
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
