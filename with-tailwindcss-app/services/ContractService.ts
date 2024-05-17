import {
  JsonRpcSigner,
  JsonRpcProvider,
  FallbackProvider,
  ethers,
} from "ethers";

import ALL_PROJECT_DATA from "@/data/projects";
import { LocalContract } from "@/services/ProjectService";

export async function getContracts(): Promise<LocalContract[]> {
  const contracts = new Array<LocalContract>();
  ALL_PROJECT_DATA.forEach((p) => {
    contracts.push(...(p.contracts as LocalContract[]));
  });
  return contracts;
}

export async function getContract(
  address: `0x${string}`,
  chainId?: number,
  signer?: JsonRpcSigner,
  provider?: JsonRpcProvider | FallbackProvider
) {
  let contract;

  if (chainId === 1) {
    const contracts = await getContracts();
    contract = contracts.find((i: LocalContract) =>
      i.addresses
        .filter((i) => i.network === "mainnet")
        .find((x) => x.address === address)
    );
  }

  if (!contract) {
    if (chainId === 10) {
      contract = await getContractFromEtherscanOptimism(address);
    }
    if (chainId === 1) {
      contract = await getContractFromEtherscan(address);
    }
  }

  if (!contract) {
    throw new Error("no contract found");
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
    availableAddresses: contract.addresses || [{ address: address }],
    ethersContract: ethersContract,
  };
}

export async function getContractFromEtherscanOptimism(
  address: string
): Promise<LocalContract | undefined> {
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
): Promise<LocalContract | undefined> {
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
