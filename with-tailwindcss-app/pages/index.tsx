import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getProvider } from "@wagmi/core";
import { providers } from "ethers";

const activityItems = [
  {
    user: {
      token: "Aave",
      imageUrl:
        "https://s2.coinmarketcap.com/static/img/coins/200x200/7278.png",
    },
    operations: "243356",
    day: "243356",
    sevenday: "243356",
    month: "243356",
  },
  {
    user: {
      token: "Compound",
      imageUrl:
        "https://s2.coinmarketcap.com/static/img/coins/200x200/5692.png",
    },

    operations: "243356",
    day: "243356",
    sevenday: "243356",
    month: "243356",
  },
  {
    user: {
      token: "ENS",
      imageUrl:
        "https://464911102-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/collections%2F2TjMAeHSzwlQgcOdL48E%2Ficon%2FKWP0gk2C6bdRPliWIA6o%2Fens%20transparent%20background.png?alt=media&token=bd28b063-5a75-4971-890c-97becea09076",
    },
    operations: "243356",
    day: "243356",
    sevenday: "243356",
    month: "243356",
  },
  {
    user: {
      token: "ERC20",
      imageUrl:
        "https://f1.ca.lpcdn.site/d3d591315e90751dab06ebbc70adfc38/b07feb7649a38a684a95c374ea2ca2e6.png",
    },
    operations: "243356",
    day: "243356",
    sevenday: "243356",
    month: "243356",
  },
  {
    user: {
      token: "Kyber Network",
      imageUrl:
        "https://s2.coinmarketcap.com/static/img/coins/200x200/9444.png",
    },
    operations: "243356",
    day: "243356",
    sevenday: "243356",
    month: "243356",
  },
  {
    user: {
      token: "MakerDAO",
      imageUrl:
        "https://assets.bitdegree.org/crypto-tracker/dapp-logos/ethereum/makerdao-logo.png?1",
    },
    operations: "243356",
    day: "243356",
    sevenday: "243356",
    month: "243356",
  },
  {
    user: {
      token: "TokenSets",
      imageUrl:
        "https://assets.coingecko.com/markets/images/509/large/set-logo-icon-color-10x.png?1580876124",
    },
    operations: "243356",
    day: "243356",
    sevenday: "243356",
    month: "243356",
  },
  {
    user: {
      token: "Uniswap v2",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Uniswap_Logo.svg/2051px-Uniswap_Logo.svg.png",
    },
    operations: "243356",
    day: "243356",
    sevenday: "243356",
    month: "243356",
  },
];

const Home: NextPage = () => {
  const provider = getProvider({
    chainId: 1,
  });
  const [contractAddress, setContractAddress] = useState<string>("");
  const [block, setBlock] = useState<number>();

  useEffect(() => {
    async function getLatestBlock(provider: providers.Provider) {
      const currentBlock = await provider.getBlockNumber();
      setBlock(currentBlock);
    }

    getLatestBlock(provider).catch(console.error);

    const interval = setInterval(() => {
      getLatestBlock(provider);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen min-w-full items-center justify-center bg-sky-100">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ethereum Contract Explorer
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            Discover and track all the transactions on the Ethereum blockchain.
          </p>
          <form className="mx-auto mt-10 flex max-w-md gap-x-4">
            <input
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Enter contract address.."
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
            />
            <Link href={`/contracts/${contractAddress}`}>
              <button className="flex-none rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Submit
              </button>
            </Link>
          </form>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <h2 className="mx-auto mt-10 max-w-2xl text-center text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Latest Block : {block}
        </h2>
        <iframe
          src="https://dune.com/embeds/419316/801346"
          height="500px"
          width="100%"
          title="chart 1"
        />
      </div>
    </div>
  );
};

export default Home;
