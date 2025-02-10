import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

import { ContractClimateListItem } from "@/components/ContractClimateListItem";
import { PageSEO } from "@/components/SEO";
import { ClimateProject, ContractData } from "@/services/ProjectService";
import { useMarketDebt } from "@/hooks/climate";
import { parseNumber } from "@evmexplorer/utility";

const chains = [
  { name: "Ethereum", value: "mainnet" },
  { name: "Optimism", value: "optimism" },
  { name: "Base", value: "base" },
  { name: "Mode Network", value: "mode" },
  { name: "Zora", value: "zora" },
  { name: "Redstone", value: "redstone" },
  { name: "Polygon", value: "polygon" },
  { name: "Arbitrum One Nitro", value: "arbitrum" },
  { name: "Filecoin", value: "filecoin" },
];

// https://www.ecota.io/ecota-web3-carbon-database
const project = {
  name: "EVMExplorer Climate Page",
  width: 100,
  height: 100,
  logoPath: "Logo_Aave.png",
  description: "",
  contracts: [
    {
      name: "1PLCO2",
      creationDate: 2019,
      title: "Climate Futures",
      addresses: [
        {
          network: "mainnet",
          address: "0x2E8891AA76743ee96547AcB764a69b87872423f8",
        },
      ],
    },
    {
      name: "BCAU",
      creationDate: 2021,
      title: "BetaCarbon",
      website: "http://www.betacarbon.com",
      category: "Tokenizing",
      addresses: [
        {
          network: "mainnet",
          address: "0xa64EFD5Fe826f62E310a951332b519e1E3871489",
        },
      ],
    },
    {
      name: "Base Carbon Tonne (BCT)",
      creationDate: 2020,
      title: "Toucan Protocol",
      website: "https://toucan.earth",
      category: "Tokenizing",
      addresses: [
        {
          network: "base",
          address: "0x576bca23dcb6d94ff8e537d88b0d3e1bead444a2",
        },
        {
          network: "polygon",
          address: "0x2F800Db0fdb5223b3C3f354886d907A671414A7F",
        },
      ],
    },

    {
      name: "Toucan Protocol Nature Carbon Tonne (NCT)",
      creationDate: 2020,
      title: "Toucan Protocol",
      website: "https://toucan.earth",
      category: "Tokenizing",
      addresses: [
        {
          network: "polygon",
          address: "0xD838290e877E0188a4A44700463419ED96c16107",
        },
      ],
    },
    {
      name: "Brokoli (BRKL)",
      creationDate: 2021,
      title: "Brokoli Network",
      website: "https://www.brokoli.network",
      category: "Trading",
      addresses: [
        {
          network: "mainnet",
          address: "0x4674a4F24C5f63D53F22490Fb3A08eAAAD739ff8",
        },
      ],
    },
    {
      name: "Carbify (CBY)",
      title: "Carbify",
      website: "https://carbify.io",
      addresses: [
        {
          network: "polygon",
          address: "0xb6a5ae40e79891e4deadad06c8a7ca47396df21c",
        },
        {
          network: "mainnet",
          address: "0xb9d27bc093ed0a3b7c18366266704cfe5e7af77b",
        },
      ],
    },

    {
      name: "Coorest CO2 Token (CCO2)",
      title: "Coorest",
      website: "https://coorest.io",
      addresses: [
        {
          network: "polygon",
          address: "0x82b37070e43c1ba0ea9e2283285b674ef7f1d4e2",
        },
      ],
    },
    {
      name: "Coorest NFTree",
      title: "Coorest",
      website: "https://coorest.io",
      addresses: [
        {
          network: "polygon",
          address: "0xe83da54c9626f83c4073812c944657f1c1bbec14",
        },
      ],
    },
    {
      name: "Chainlink Proof of Reserve",
      title: "Coorest",
      website:
        "https://coorest.gitbook.io/coorest-dapp-manual/coorest-tokens/chainlink-proof-of-reserve",
      addresses: [
        {
          network: "polygon",
          address: "0xD1A55d21d0e75cd91da578e1e82994b61a73ddd2",
        },
      ],
    },
    {
      name: "Proof of carbon compensation (PoCC) certificate",
      title: "Coorest",
      website:
        "https://coorest.gitbook.io/coorest-dapp-manual/coorest-tokens/proof-of-carbon-compensation-pocc-certificate",
      addresses: [
        {
          network: "polygon",
          address: "0x51cf819352fc536ad8a84214922615c160bb497d",
        },
      ],
    },

    {
      name: "CRST",
      title: "Coorest",
      website:
        "https://coorest.gitbook.io/coorest-dapp-manual/coorest-tokens/usdcrst-token",
      addresses: [
        {
          network: "polygon",
          address: "0x91f0484f9b65dc5187e414dae5ed37ea7a4b8af4",
        },
        {
          network: "mainnet",
          address: "0x776aaca47ee579ff63f6c00a921377eb21359e59",
        },
      ],
    },
    {
      name: "DOVU",
      title: "DOVU",
      website: "https://dovu.earth/en/",
      addresses: [
        {
          network: "arbitrum",
          address: "0xe821C045f9149B44ef96f8054B9c6d94f4c89417",
        },
        {
          network: "base",
          address: "0xB38266e0e9D9681b77aEB0A280E98131b953F865",
        },
        {
          network: "optimism",
          address: "0xd91fF310DF12FBb9D4C77A55BeDa0367e2244Ca6",
        },
        {
          network: "mainnet",
          address: "0x2aeAbde1aB736c59E9A19BeD67681869eEF39526",
        },
      ],
    },

    {
      name: "CARBZ",
      creationDate: 2021,
      title: "Project-Ark",
      addresses: [
        {
          network: "mainnet",
          address: "0x6d019E5B4A50315684EBe38A2d30f95aE1EC35e5",
        },
      ],
    },
    {
      name: "CYCE",
      title: "Crypto Carbon Energy",
      website: "https://cycecoin.com",
      addresses: [
        {
          network: "mainnet",
          address: "0x9681ee0d91e737c3b60aceba7fbdae61b5462f42",
        },
        {
          network: "mainnet",
          address: "0xEaDD9B69F96140283F9fF75DA5FD33bcF54E6296",
        },
      ],
    },
    {
      name: "JCR",
      creationDate: 2022,
      title: "Just Carbon",
      website: "https://www.justcarbon.com",
      addresses: [
        {
          network: "mainnet",
          address: "0x84f20BF5bB4Be345D3ab37c565f732753435dBe3",
        },
      ],
    },
    {
      name: "CNT",
      creationDate: 2018,
      title: "MetaVerse Green Exchange (MVGX)",
      addresses: [
        {
          network: "mainnet",
          address: "0x03042482d64577A7bdb282260e2eA4c8a89C064B",
        },
      ],
    },
    {
      name: "Moss Carbon Credit (MCO2)",
      creationDate: 2020,
      title: "Moss Earth MCO2",
      addresses: [
        {
          network: "mainnet",
          address: "0xfC98e825A2264D890F9a1e68ed50E1526abCcacD",
        },
      ],
    },
    {
      name: "Nature Based Offset",
      title: "C3",
      website: "https://www.c3.app",
      addresses: [
        {
          network: "polygon",
          address: "0x6bca3b77c1909ce1a4ba1a20d1103bde8d222e48",
        },
      ],
    },
    {
      name: "Universal Basic Offset",
      title: "C3",
      website: "https://www.c3.app",
      addresses: [
        {
          network: "polygon",
          address: "0x2b3ecb0991af0498ece9135bcd04013d7993110c",
        },
      ],
    },
    {
      name: "UPCO2",
      creationDate: 2020,
      title: "UPCO2",
      category: "Trading",
      website: "https://www.universalprotocol.io",
      addresses: [
        {
          network: "mainnet",
          address: "0xaF9700FcA16276Cd69c4e35FEecC66D1116826cC",
        },
      ],
    },
  ],
};

export default function ClimatePage() {
  const path: string = "/climate";
  const defaultChain = { name: "default", value: "Select Chain" };
  const [chain, setChain] = useState(defaultChain);

  const { data: climateData, isFetched } = useMarketDebt();
  const [searchValue, setSearchValue] = useState("");

  const filtered = project.contracts.filter((contract: ClimateProject) => {
    const searchContent = contract.name;
    return (
      searchContent.toLowerCase().includes(searchValue.toLowerCase()) &&
      contract.addresses.some(
        (address: ContractData) => address.network.toLowerCase() === chain.value
      )
    );
  });

  const filteredByName = project.contracts.filter(
    (contract: ClimateProject) => {
      const searchContent = contract.name;
      return searchContent.toLowerCase().includes(searchValue.toLowerCase());
    }
  );

  const contractListItems = filtered.map((contract: ClimateProject) => (
    <ContractClimateListItem key={contract.name} contract={contract} />
  ));

  const allContractListItems = filteredByName.map(
    (contract: ClimateProject) => (
      <ContractClimateListItem key={contract.name} contract={contract} />
    )
  );

  return (
    <div>
      <PageSEO path={path} />

      <div className="p-2">
        <h1 className="text-3xl mt-5 font-semibold fade-in-text text-gray-300">
          {project?.name}
        </h1>
        {isFetched && climateData && (
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-6 sm:mt-8 md:mt-10 lg:mt-16">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-6 text-center lg:grid-cols-3">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <p className="text-base sm:text-lg font-semibold from-purple-500 via-violet-600 to-indigo-500 bg-linear-to-r bg-clip-text text-transparent">
                  Total Carbon Debt
                </p>
                <p className="order-first text-3xl sm:text-4xl font-extrabold from-purple-500 via-violet-600 to-indigo-500 bg-linear-to-r bg-clip-text text-transparent">
                  {parseNumber(climateData.total_carbon_debt)}
                </p>
              </div>

              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <p className="text-base sm:text-lg font-semibold from-emerald-500 to-emerald-600 bg-linear-to-r bg-clip-text text-transparent">
                  Cost To Offset
                </p>
                <p className="order-first text-3xl sm:text-4xl font-extrabold from-emerald-500 to-emerald-600 bg-linear-to-r bg-clip-text text-transparent">
                  {parseNumber(climateData.cost_to_offset)}
                </p>
              </div>

              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <p className="text-base sm:text-lg font-semibold from-pink-500 to-pink-600 bg-linear-to-r bg-clip-text text-transparent">
                  Gas Used
                </p>
                <p className="order-first text-3xl sm:text-4xl font-extrabold from-pink-500 to-pink-600 bg-linear-to-r bg-clip-text text-transparent">
                  {parseNumber(climateData.gas_used)}
                </p>
              </div>
            </dl>
          </div>
        )}

        <div className="items-center justify-center fade-in-1s mb-3">
          <div className="relative mt-6 md:mt-12 sm:ml-50 sm:mr-50 lg:ml-80 lg:mr-80">
            <input
              aria-label="Search Contract"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search Contract"
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 mr-2 sm:mr-4"
            />
            <Listbox value={chain} onChange={setChain}>
              <ListboxButton className="relative lg:col-span-2 cursor-default rounded-md bg-white py-1.5 pl-2 pr-8 text-left text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                <span className="inline-flex w-full truncate">
                  {chain.value}
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
                className="absolute z-10 mt-1 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm"
              >
                {chains.map((chain) => (
                  <ListboxOption
                    className="cursor-default select-none py-2 pl-3 pr-3 hover:bg-gray-200"
                    value={chain}
                    key={chain.value}
                  >
                    <span className="truncate">{chain.name}</span>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Listbox>
          </div>
        </div>
        {chain.name === "default" && (
          <div>
            <div className="mx-auto flex items-center justify-center">
              <table className="border-separate border-spacing-y-1 border-spacing-x-2 md:mt-2 fade-in-1s">
                <thead className="text-gray-300">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-sm font-semibold"
                    >
                      Protocol
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-sm font-semibold"
                    >
                      Contract
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 px-3 text-sm font-semibold"
                    >
                      Networks
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-300">{allContractListItems}</tbody>
              </table>
            </div>
            <div className="mx-auto flex items-center justify-center text-gray-300 mt-2">
              {allContractListItems?.length} contracts in total
            </div>
          </div>
        )}
        {contractListItems && contractListItems?.length > 0 && (
          <div>
            <div className="mx-auto flex items-center justify-center">
              <table className="border-separate border-spacing-y-1 border-spacing-x-2 md:mt-2 fade-in-1s">
                <thead className="text-gray-300">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-sm font-semibold"
                    >
                      Protocol
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-sm font-semibold"
                    >
                      Contract
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-sm font-semibold"
                    >
                      Networks
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-300">{contractListItems}</tbody>
              </table>
            </div>
            <div className="mx-auto text-gray-300 flex items-center justify-center mt-2">
              {contractListItems?.length} {chain.name} contracts in total
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
