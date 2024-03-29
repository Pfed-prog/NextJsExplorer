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
    console.log("No valid contract address", address);
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
    contract = await getContractFromEtherscan(address);
  }

  if (!contract) return;

  return {
    name: contract.name,
    abi: contract.abi as any,
    address: address,
    availableAddresses: contract.addresses || [
      { address: address, network: networkName },
    ],
    provider: provider,
    ethersContract: new ethers.Contract(
      address,
      contract.abi,
      signer ?? provider
    ),
  };
}

export async function getContractFromEtherscan(
  address: string
): Promise<Contract | undefined> {
  const response = await fetch(
    `https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${address}&apikey=${process.env.NEXT_ETHERSCAN_API_KEY}`
  );
  const body = await response.json();

  if (
    body &&
    body.result &&
    body.result[0].ABI !== "Contract source code not verified"
  ) {
    return {
      name: body.result[0].ContractName,
      abi: body.result[0].ABI,
      addresses: [{ network: "mainnet", address: address }],
    } as Contract;
  }

  return undefined;
}
