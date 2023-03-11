/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "i.pinimg.com",
      "platform-lookaside.fbsbx.com",
    ],
  },
  experimental: {
    appDir: true,
  },
};
