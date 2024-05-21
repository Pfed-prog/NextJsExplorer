/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.coingecko.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/contracts/mainnet",
        destination:
          "/contracts/mainnet/0x22C1f6050E56d2876009903609a2cC3fEf83B415",
        permanent: true,
      },
    ];
  },
};
