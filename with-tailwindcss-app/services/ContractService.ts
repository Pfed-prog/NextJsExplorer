import { providers, ethers, Signer } from "ethers";

import ALL_PROJECT_DATA from "data/projects";
import { Contract, FullContractWrapper } from "types";
import { isContractAddress } from "utils/web3";

export async function getContracts(): Promise<Contract[]> {
  const contracts = new Array<Contract>();
  ALL_PROJECT_DATA.forEach((p) => {
    contracts.push(...(p.contracts as Contract[]));
  });

  return contracts;
}

export async function getContract(
  address: string,
  provider: providers.BaseProvider,
  signer?: Signer
): Promise<FullContractWrapper | undefined> {
  const isValidAddress = await isContractAddress(address, provider);
  if (!isValidAddress) {
    console.log("No valid contract address. Address: ", address);
    return;
  }

  const contracts = await getContracts();
  let networkName = "mainnet";
  if (provider) {
    const name = (await provider.getNetwork()).name;
    if (name !== "homestead") networkName = name;
  }

  let contract = contracts.find((i: Contract) =>
    i.addresses
      .filter((i) => i.network === networkName)
      .find((x) => x.address === address)
  );

  if (!contract) {
    if (networkName === "optimism") {
      contract = await getContractFromEtherscanOptimism(address);
    }
    if (networkName === "mainnet") {
      contract = await getContractFromEtherscan(address);
    }
    if (!contract) {
      throw new Error("no contract found");
    }
  }

  if (!contract.abi) {
    throw new Error("no contract abi");
  }

  const ethersContract = new ethers.Contract(
    address,
    contract.abi,
    signer ?? provider
  );

  return {
    name: contract.name,
    abi: contract.abi,
    address: address,
    availableAddresses: contract.addresses || [
      { address: address, network: networkName },
    ],
    provider: provider,
    ethersContract: ethersContract,
  };
}

export async function getContractFromEtherscanOptimism(
  address: string
): Promise<Contract | undefined> {
  const response = await fetch(
    `https://api-optimistic.etherscan.io/api?module=contract&action=getsourcecode&address=${address}&apikey=${process.env.NEXT_ETHERSCAN_OP_API_KEY}`
  );
  const body = await response.json();
  if (
    body?.result &&
    body.result[0].ABI !== "Contract source code not verified"
  ) {
    return {
      name: body.result[0].ContractName,
      abi: body.result[0].ABI,
      addresses: [{ network: "optimism", address: address }],
    };
  }

  return undefined;
}

export async function getContractFromEtherscan(
  address: string
): Promise<Contract | undefined> {
  const response = await fetch(
    `https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${address}&apikey=${process.env.NEXT_ETHERSCAN_API_KEY}`
  );
  const body = await response.json();

  if (
    body?.result &&
    body.result[0].ABI !== "Contract source code not verified"
  ) {
    return {
      name: body.result[0].ContractName,
      abi: body.result[0].ABI,
      addresses: [{ network: "mainnet", address: address }],
    };
  }

  return undefined;
}

export type CountersContract = {
  gas_usage_count: string;
  token_transfers_count: string;
  transactions_count: string;
  validations_count: string;
};

export async function getContractCountersOptimism(address: string) {
  const query = `https://optimism.blockscout.com/api/v2/addresses/${address}/counters`;
  const response: Response = await fetch(query);
  const body: CountersContract = await response.json();
  return body;
}

export async function getContractCountersEthereum(address: string) {
  const query = `https://eth.blockscout.com/api/v2/addresses/${address}/counters`;
  const response: Response = await fetch(query);
  const body: CountersContract = await response.json();
  return body;
}
