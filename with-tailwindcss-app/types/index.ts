import { Contract } from "ethers";

export type Project = {
  name: string;
  logoPath: string;
  description?: string;
  contracts: Array<Contract>;
};

export type LocalContract = {
  name: string;
  abi: string;
  addresses: Array<ContractData>;
};

export type FullContractWrapper = {
  name: string;
  abi: string;
  address: `0x${string}`;
  availableAddresses: Array<ContractData>;
  ethersContract: Contract;
};

export type ContractData = {
  address: string;
  network: "mainnet" | "optimism";
};

export type Transaction = {
  blockHash: string;
  blockNumber: number;
  from: string;
  to: string;
  hash: string;
  timestamp: number;
  value: number;
};
