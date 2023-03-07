import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const Metadata = ({ title, description }) => {
  const host = process.env.NEXT_PUBLIC_URL;
  const { pathname } = useRouter();
  const img = `${host}/assets/abz-logo.png`;
  const router = useRouter();

  return (
    <Head>
      <title>{`ABZ - ${title}`}</title>
      <meta name="title" content={`ABZ - ${title}`} />
      <meta name="description" content={description} />
      <meta name="image" content={img} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${host}${pathname}`} />
      <meta property="og:title" content={`ABZ - ${title}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${host}${pathname}`} />
      <meta property="twitter:title" content={`ABZ - ${title}`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={img} />
      <meta property="twitter:image:alt" content={`ABZ - ${title}`} />

      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="short icon" href="/favicon.ico" />
      <link rel="canonical" href={`${host}${router.asPath}`} />
    </Head>
  );
};

export default Metadata;
