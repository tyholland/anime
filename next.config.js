/** @type {import('next').NextConfig} */

module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    minimumCacheTTL: 259200,
    unoptimized: true,
  },
};
