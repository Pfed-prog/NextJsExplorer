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

const project = {
  name: "Climate",
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

export default function Post() {
  const path: string = "/climate";
  const defaultChain = { name: "default", value: "Select Chain" };
  const [chain, setChain] = useState(defaultChain);

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

        <div className="items-center justify-center fade-in-1s">
          <div className="relative mt-8 sm:ml-50 sm:mr-50 lg:ml-80 lg:mr-80">
            <input
              aria-label="Search Contract"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search Contract"
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 mr-2 sm:mr-4"
            />
            <Listbox value={chain} onChange={setChain}>
              <ListboxButton className="relative lg:col-span-2 cursor-default rounded-md bg-white py-1.5 pl-2 pr-8 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
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
                className="absolute z-10 mt-1 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
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
              <table className="border-separate border-spacing-y-1 md:border-spacing-y-4 border-spacing-x-2 md:border-spacing-x-10 md:mt-2 fade-in-1s">
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
                <tbody>{allContractListItems}</tbody>
              </table>
            </div>
            <div className="mx-auto flex items-center justify-center text-gray-300">
              {allContractListItems?.length} contracts in total
            </div>
          </div>
        )}

        {contractListItems && contractListItems?.length > 0 && (
          <div>
            <div className="mx-auto flex items-center justify-center">
              <table className="border-separate border-spacing-y-1 md:border-spacing-y-4 border-spacing-x-2 md:border-spacing-x-10 md:mt-2 fade-in-1s">
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
                <tbody>{contractListItems}</tbody>
              </table>
            </div>
            <div className="mx-auto text-gray-300 flex items-center justify-center">
              {contractListItems?.length} {chain.name} contracts in total
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
