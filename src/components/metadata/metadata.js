import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Metadata = ({ title, description, image = null }) => {
  const host = process.env.NEXT_PUBLIC_URL;
  const { pathname } = useRouter();
  const router = useRouter();
  const [img, setImg] = useState(`${host}/assets/logo/afl-logo.webp`);

  useEffect(() => {
    if (image) {
      setImg(`${host}${image}`);
    }
  }, [image]);

  return (
    <Head>
      <title>{`AFL - ${title}`}</title>
      <meta name="title" content={`AFL - ${title}`} />
      <meta name="description" content={description} />
      <meta name="image" content={img} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${host}${pathname}`} />
      <meta property="og:title" content={`AFL - ${title}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${host}${pathname}`} />
      <meta property="twitter:title" content={`AFL - ${title}`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={img} />
      <meta property="twitter:image:alt" content={`AFL - ${title}`} />

      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="short icon" href="/favicon.ico" />
      <link rel="canonical" href={`${host}${router.asPath}`} />
    </Head>
  );
};

export default Metadata;
