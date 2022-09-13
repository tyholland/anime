import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

const LeagueDetailsMetadata = () => {
  const router = useRouter();

  return (
    <Head>
      <title>ABZ - League Details</title>
      <meta name="title" content="ABZ - League Details"/>
      <meta name="description" content="ABZ league details"/>
      <meta name="image" content="/assets/abz-logo.png"/>
      
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={`https://animebrothaz.com${router.pathname}`}/>
      <meta property="og:title" content="ABZ - League Details"/>
      <meta property="og:description" content="ABZ league details"/>
      <meta property="og:image" content=""/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content={`https://animebrothaz.com${router.pathname}`}/>
      <meta property="twitter:title" content="ABZ - League Details"/>
      <meta property="twitter:description" content="ABZ league details"/>
      <meta property="twitter:image" content=""/>
      <meta property="twitter:image:alt" content="ABZ - League Details"/>
      
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="short icon" href="/favicon.ico"/>
    </Head>
  );
};

export default LeagueDetailsMetadata;
