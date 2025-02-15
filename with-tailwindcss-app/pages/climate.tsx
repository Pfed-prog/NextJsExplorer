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
  name: "EVM Explorer Climate Page",
  width: 100,
  height: 100,
  logoPath: "Logo_Aave.png",
  description: "",
  contracts: [
    {
      name: "1PLCO2",
      creationDate: 2019,
      protocol: "Climate Futures",
      addresses: [
        {
          network: "mainnet",
          address: "0x2E8891AA76743ee96547AcB764a69b87872423f8",
        },
      ],
    },
    {
      name: "BetaCarbon (BCAU)",
      creationDate: 2021,
      protocol: "BetaCarbon",
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
      protocol: "Toucan Protocol",
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
      protocol: "Toucan Protocol",
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
      name: "Retirement Certificates for Tokenized Carbon Offsets (TOUCAN-CERT)",
      protocol: "Toucan Protocol",
      website: "https://toucan.earth",
      category: "Tokenizing",
      addresses: [
        {
          network: "polygon",
          address: "0x5e377f16E4ec6001652befD737341a28889Af002",
        },
      ],
    },
    {
      name: "Brokoli (BRKL)",
      creationDate: 2021,
      protocol: "Brokoli Network",
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
      protocol: "Carbify",
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
      protocol: "Coorest",
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
      protocol: "Coorest",
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
      protocol: "Coorest",
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
      protocol: "Coorest",
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
      protocol: "Coorest",
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
      protocol: "DOVU",
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
      protocol: "Project-Ark",
      addresses: [
        {
          network: "mainnet",
          address: "0x6d019E5B4A50315684EBe38A2d30f95aE1EC35e5",
        },
      ],
    },
    {
      name: "CYCE",
      protocol: "Crypto Carbon Energy",
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
      protocol: "Just Carbon",
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
      protocol: "MetaVerse Green Exchange (MVGX)",
      addresses: [
        {
          network: "mainnet",
          address: "0x03042482d64577A7bdb282260e2eA4c8a89C064B",
        },
      ],
    },
    {
      name: "KlimaDAO (KLIMA)",
      protocol: "KlimaDAO",
      website: "https://docs.klimadao.finance/developers/contracts/tokens",
      addresses: [
        {
          network: "polygon",
          address: "0x4e78011Ce80ee02d2c3e649Fb657E45898257815",
        },
      ],
    },
    {
      name: "KlimaDAO (sKLIMA)",
      protocol: "KlimaDAO",
      website: "https://docs.klimadao.finance/developers/contracts/tokens",
      addresses: [
        {
          network: "polygon",
          address: "0xb0C22d8D350C67420f06F48936654f567C73E8C8",
        },
      ],
    },
    {
      name: "KlimaDAO (wsKLIMA)",
      protocol: "KlimaDAO",
      website: "https://docs.klimadao.finance/developers/contracts/tokens",
      addresses: [
        {
          network: "polygon",
          address: "0x6f370dba99e32a3cad959b341120db3c9e280ba6",
        },
      ],
    },
    {
      name: "KlimaDAO (aKLIMA)",
      protocol: "KlimaDAO",
      website: "https://docs.klimadao.finance/developers/contracts/tokens",
      addresses: [
        {
          network: "polygon",
          address: "0xeb935614447185eeea0abc756ff2ddc99fbb9047",
        },
      ],
    },
    {
      name: "KlimaDAO (alKLIMA)",
      protocol: "KlimaDAO",
      website: "https://docs.klimadao.finance/developers/contracts/tokens",
      addresses: [
        {
          network: "polygon",
          address: "0xd50EC6360f560a59926216Eafb98395AC430C9fD",
        },
      ],
    },
    {
      name: "KlimaDAO (pKLIMA)",
      protocol: "KlimaDAO",
      website: "https://docs.klimadao.finance/developers/contracts/tokens",
      addresses: [
        {
          network: "polygon",
          address: "0x0af5dee6678869201924930d924a435f6e4839c9",
        },
      ],
    },
    {
      name: "DAOWallet",
      protocol: "KlimaDAO",
      website: "https://docs.klimadao.finance/developers/contracts/dao-wallet",
      addresses: [
        {
          network: "polygon",
          address: "0x65A5076C0BA74e5f3e069995dc3DAB9D197d995c",
        },
      ],
    },
    {
      name: "Policy",
      protocol: "KlimaDAO",
      website: "https://docs.klimadao.finance/developers/contracts/policy",
      addresses: [
        {
          network: "polygon",
          address: "0xD2f4A710b7dB5C0A05f17b68Fd5dA3C4c6b63be1",
        },
      ],
    },
    {
      name: "Aggregator v1",
      protocol: "KlimaDAO",
      website: "https://docs.klimadao.finance/developers/contracts/retirement",
      addresses: [
        {
          network: "polygon",
          address: "0xEde3bd57a04960E6469B70B4863cE1c9d9363Cb8",
        },
      ],
    },
    {
      name: "Aggregator v2",
      protocol: "KlimaDAO",
      website: "https://docs.klimadao.finance/developers/contracts/retirement",
      addresses: [
        {
          network: "polygon",
          address: " 0x8cE54d9625371fb2a068986d32C85De8E6e995f8",
        },
      ],
    },
    {
      name: "Bridge-Specific Retirements C3",
      protocol: "KlimaDAO",
      website: "https://docs.klimadao.finance/developers/contracts/retirement",
      addresses: [
        {
          network: "polygon",
          address: "0x933AF8c652c696FB0969Eb85DDd111edb2b4E057",
        },
      ],
    },
    {
      name: "Bridge-Specific Retirements Moss",
      protocol: "KlimaDAO",
      website: "https://docs.klimadao.finance/developers/contracts/retirement",
      addresses: [
        {
          network: "polygon",
          address: "0xa35f62dbdb93e4B772784E89B7B35736A4aeaCc5",
        },
      ],
    },
    {
      name: "Bridge-Specific Retirements Toucan",
      protocol: "KlimaDAO",
      website: "https://docs.klimadao.finance/developers/contracts/retirement",
      addresses: [
        {
          network: "polygon",
          address: "0xCefb61aF5325C0c100cBd77eb4c9F51d17B189Ca",
        },
      ],
    },
    {
      name: "Retirement Storage",
      protocol: "KlimaDAO",
      website: "https://docs.klimadao.finance/developers/contracts/retirement",
      addresses: [
        {
          network: "polygon",
          address: "0xac298CD34559B9AcfaedeA8344a977eceff1C0Fd",
        },
      ],
    },
    {
      name: "Staking",
      protocol: "KlimaDAO",
      website: "https://docs.klimadao.finance/developers/contracts/staking",
      addresses: [
        {
          network: "polygon",
          address: "0x25d28a24Ceb6F81015bB0b2007D795ACAc411b4d",
        },
      ],
    },
    {
      name: "StakingHelper",
      protocol: "KlimaDAO",
      website: "https://docs.klimadao.finance/developers/contracts/staking",
      addresses: [
        {
          network: "polygon",
          address: "0x4D70a031Fc76DA6a9bC0C922101A05FA95c3A227",
        },
      ],
    },
    {
      name: "Distributor",
      protocol: "KlimaDAO",
      website: "https://docs.klimadao.finance/developers/contracts/staking",
      addresses: [
        {
          network: "polygon",
          address: "0x4cC7584C3f8FAABf734374ef129dF17c3517e9cB",
        },
      ],
    },
    {
      name: "Treasury",
      protocol: "KlimaDAO",
      website: "https://docs.klimadao.finance/developers/contracts/treasury",
      addresses: [
        {
          network: "polygon",
          address: "0x7Dd4f0B986F032A44F913BF92c9e8b7c17D77aD7",
        },
      ],
    },
    {
      name: "Moss Carbon Credit (MCO2)",
      creationDate: 2020,
      protocol: "Moss Earth MCO2",
      addresses: [
        {
          network: "mainnet",
          address: "0xfC98e825A2264D890F9a1e68ed50E1526abCcacD",
        },
        {
          network: "polygon",
          address: "0xAa7DbD1598251f856C12f63557A4C4397c253Cea",
        },
      ],
    },
    {
      name: "Nature Based Offset (NBO)",
      protocol: "C3",
      website: "https://www.c3.app",
      addresses: [
        {
          network: "polygon",
          address: "0x6bca3b77c1909ce1a4ba1a20d1103bde8d222e48",
        },
      ],
    },
    {
      name: "Universal Basic Offset (UBO)",
      protocol: "C3",
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
      protocol: "UPCO2",
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

  const contractListItems = filtered.map((contract: ClimateProject) => (
    <ContractClimateListItem key={contract.name} contract={contract} />
  ));

  const filteredByName = project.contracts.filter(
    (contract: ClimateProject) => {
      const searchContent = contract.name;
      return searchContent.toLowerCase().includes(searchValue.toLowerCase());
    }
  );

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
            {allContractListItems?.length > 0 && (
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
            )}
            <div className="mx-auto flex items-center justify-center text-gray-300 mt-2 md:mt-6">
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
            <div className="mx-auto text-gray-300 flex items-center justify-center mt-2 md:mt-6">
              {contractListItems?.length} {chain.name} contracts in total
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
