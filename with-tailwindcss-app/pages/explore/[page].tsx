import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

import { ContractListItem } from "@/components/ContractListItem";
import { PageSEO } from "@/components/SEO";
import { getProject, LocalContract, Project } from "@/services/ProjectService";

const chains = [
  { name: "Ethereum", value: "mainnet" },
  { name: "Optimism", value: "optimism" },
  { name: "Base", value: "base" },
  { name: "Mode Network", value: "mode" },
  { name: "Zora", value: "zora" },
  { name: "Redstone", value: "redstone" },
  { name: "Polygon", value: "polygon" },
  { name: "Arbitrum One Nitro", value: "arbitrum" },
];

const Explorer: NextPage = () => {
  const router = useRouter();
  const { page } = router.query;

  const [chain, setChain] = useState(chains[0]);

  let project: Project | undefined;
  if (page) {
    project = getProject(page as string);
  }

  const [searchValue, setSearchValue] = useState("");

  const filtered = project?.contracts.filter((contract) => {
    const searchContent = contract.name + contract.addresses.join(" ");
    return (
      searchContent.toLowerCase().includes(searchValue.toLowerCase()) &&
      contract.addresses.some(
        (address) => address.network.toLowerCase() === chain.value
      )
    );
  });

  const contractListItems = filtered?.map((contract: LocalContract) => (
    <ContractListItem key={contract.name} contract={contract} />
  ));

  return (
    <div>
      <PageSEO />

      <div className="p-2">
        <h2 className="text-3xl mt-5 font-semibold fade-in-text">
          {project?.name}
        </h2>

        <div className="mx-auto flex items-center justify-center mt-10 fade-in-1s">
          <Image
            src={"/" + project?.logoPath}
            alt={project?.name ?? ""}
            width={project?.width ?? 160}
            height={project?.height ?? 300}
            priority
          />
        </div>

        <div className="items-center justify-center fade-in-3s">
          <div className="relative mt-6 sm:ml-50 sm:mr-50 lg:ml-80 lg:mr-80">
            <input
              aria-label="Search Contract"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search Contract"
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 mr-2"
            />
            <Listbox value={chain} onChange={setChain}>
              <ListboxButton className="relative lg:col-span-2 cursor-default rounded-md bg-white py-1.5 pl-2 pr-8 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
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

        <div className="mx-auto flex items-center justify-center">
          <table className="border-separate border-spacing-y-1 md:border-spacing-y-4 border-spacing-x-2 md:border-spacing-x-10 md:mt-2 fade-in-1s">
            <thead className="text-gray-800">
              <tr>
                <th scope="col" className="py-3.5 px-3 text-sm font-semibold">
                  Contract
                </th>
                <th scope="col" className="py-3.5 px-3 text-sm font-semibold">
                  Networks
                </th>
              </tr>
            </thead>
            <tbody>{contractListItems}</tbody>
          </table>
        </div>

        <div className="mx-auto max-w-2xl mt-6 flex flex-auto flex-col justify-between fade-in-text">
          <div className="text-lg leading-8 text-center text-gray-900">
            {project?.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
