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
      {
        protocol: "https",
        hostname: "play.skystrife.xyz",
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
      {
        source: "/contracts/optimism",
        destination:
          "/contracts/optimism/0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
        permanent: true,
      },
      {
        source: "/contracts/base",
        destination:
          "/contracts/base/0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        permanent: true,
      },
      {
        source: "/contracts/mode",
        destination:
          "/contracts/mode/0xDfc7C877a950e49D2610114102175A06C2e3167a",
        permanent: true,
      },
      {
        source: "/contracts/zora",
        destination:
          "/contracts/zora/0x4200000000000000000000000000000000000006",
        permanent: true,
      },
      {
        source: "/contracts/redstone",
        destination:
          "/contracts/redstone/0x32444d4DEb1f8FA35A235FF997D5a22aC74b0e48",
        permanent: true,
      },
      {
        source: "/contracts/polygon",
        destination:
          "/contracts/polygon/0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
        permanent: true,
      },
      {
        source: "/contracts/arbitrum",
        destination:
          "/contracts/arbitrum/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
        permanent: true,
      },
      {
        source: "/contracts/filecoin",
        destination:
          "/contracts/filecoin/0x005E02A4A934142d8Dd476F192d0dD9c381b16b4",
        permanent: true,
      },
    ];
  },
};
