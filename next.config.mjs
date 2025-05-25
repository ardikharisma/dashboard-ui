/** @type {import('next').NextConfig} */
const nextConfig = {

  images:{
    remotePatterns:
      [{hostname:"images.pexels.com"}]
  },

  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};



export default nextConfig
