/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
               {
                   source: '/reg',
                   destination: 'https://docs.google.com/forms/d/e/1FAIpQLSeKlgXL_zNLO3B7aHv2YMwfkMp-UEbVp4JfyHDtLCD4hAGq3Q/viewform',
                   permanent: true,
                },
           ]
   },
}

module.exports = nextConfig
