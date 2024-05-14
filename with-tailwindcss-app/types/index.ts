import { Contract } from "ethers";

export type Project = {
  name: string;
  logoPath: string;
  description?: string;
  contracts: Array<Contract>;
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
  network: string;
};
