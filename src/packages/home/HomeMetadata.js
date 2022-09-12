import Head from 'next/head';
import React from 'react';

const HomeMetadata = () => {
  return (
    <Head>
      <title>ABZ - Home</title>
      <meta name="description" content="Anime Brothaz Fantasy League"/>
      <meta name="image" content=""/>
      
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://animebrothaz.com"/>
      <meta property="og:title" content="ABZ - Home"/>
      <meta property="og:description" content="Anime Brothaz Fantasy League"/>
      <meta property="og:image" content=""/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://animebrothaz.com"/>
      <meta property="twitter:title" content="ABZ - Home"/>
      <meta property="twitter:description" content="Anime Brothaz Fantasy League"/>
      <meta property="twitter:image" content=""/>
      <meta property="twitter:image:alt" content="ABZ - Home"/>
      
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="short icon" href="/favicon.ico"/>
    </Head>
  );
};

export default HomeMetadata;
