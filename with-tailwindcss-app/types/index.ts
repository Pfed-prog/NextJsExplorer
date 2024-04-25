import { providers, Signer, ethers } from "ethers";

export type Project = {
  name: string;
  logoPath: string;
  description?: string;
  contracts: Array<Contract>;
};

export type Contract = {
  name: string;
  abi: string;
  addresses: Array<Address>;
};

export type FullContractWrapper = {
  name: string;
  abi: string;
  address: string;
  availableAddresses: Array<Address>;
  provider: Signer | providers.Provider;
  ethersContract: ethers.Contract;
};

export type Address = {
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
