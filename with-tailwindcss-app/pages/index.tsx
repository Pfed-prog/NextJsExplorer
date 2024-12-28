import type { SearchBlockscout } from "@evmexplorer/blockscout";
import type { NextPage } from "next";
import { fetchSearchBlockscout } from "@evmexplorer/blockscout";
import { getNetworkId } from "@evmexplorer/utility";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Button,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

import { PageSEO } from "@/components/SEO";

const chains = [
  { name: "Ethereum", value: "mainnet", symbol: "ETH" },
  { name: "Optimism", value: "optimism", symbol: "OP" },
  { name: "Base", value: "base", symbol: "Base" },
  { name: "Mode Network", value: "mode", symbol: "MODE" },
  { name: "Zora", value: "zora", symbol: "ZORA" },
  { name: "Redstone", value: "redstone", symbol: "Redstone" },
  { name: "Polygon", value: "polygon", symbol: "MATIC" },
  { name: "Arbitrum One Nitro", value: "arbitrum", symbol: "ARB" },
  { name: "Filecoin", value: "filecoin", symbol: "FIL" },
];

const Home: NextPage = () => {
  const [search, setSearch] = useState<string>("");
  const [chain, setChain] = useState(chains[0]);
  const router = useRouter();

  async function validatesSearch(input: string) {
    if (input.endsWith(".ens")) {
      const data: SearchBlockscout = await fetchSearchBlockscout(search);
      const address: string | undefined = data.items[0].ens_info?.address_hash;
      if (address) router.push(`/contracts/${chain.value}/${address}`);
    }
    if (input.length === 42) {
      router.push(`/contracts/${chain.value}/${search}`);
    }

    if (input.length === 66) {
      router.push(`/transactions/${chain.value}/${search}`);
    }

    if (input) {
      if (parseInt(input)) {
        router.push(`/blocks/${chain.value}/${search}`);
      } else {
        const data: SearchBlockscout = await fetchSearchBlockscout(
          search,
          getNetworkId(chain.value)
        );
        const address: string | undefined = data.items[0].address;
        if (address) router.push(`/contracts/${chain.value}/${address}`);
      }
    }
  }

  return (
    <div>
      <PageSEO />
      <div className="items-center justify-center sm:mt-2 md:mt-4">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h1 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              EVM Smart Contract Explorer
            </h1>
            <p className="mx-auto text-lg mt-4 max-w-xl text-center leading-8 text-gray-300">
              Discover and track EVM smart contract data.
            </p>
            <p className="mx-auto text-sm mt-1 max-w-xl text-center text-gray-300">
              Search by a token name, ENS name, a block number, a transaction or
              a contract address.
            </p>

            <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-10 gap-y-2 gap-x-5">
              <input
                className="flex-auto mb-2 sm:mb-0 col-span-2 lg:col-span-6 rounded-md border-0 bg-white/5 px-5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Enter data"
                value={search}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    validatesSearch(search);
                  }
                }}
                onChange={(e) => setSearch(e.target.value)}
              />

              <Listbox value={chain} onChange={setChain}>
                <ListboxButton className="relative block lg:col-span-2 cursor-default rounded-md bg-white py-1.5 pl-2 pr-8 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <span className="inline-flex w-full truncate">
                    {chain.symbol}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom"
                  className="absolute z-10 mt-1 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >
                  {chains.map((chain) => (
                    <ListboxOption
                      className="cursor-default select-none py-2 pl-3 pr-3 hover:bg-gray-200"
                      value={chain}
                      key={chain.symbol}
                    >
                      <span className="truncate">{chain.name}</span>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>

              <Button
                onClick={() => validatesSearch(search)}
                className="flex-none lg:col-span-2 -px-10 rounded-md bg-white py-3 md:py-3 md:px-2 text-xs sm:text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-400"
              >
                Submit
              </Button>
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
