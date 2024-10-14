import ALL_PROJECT_DATA from "@/data/projects";
import { LocalContract } from "@/services/ProjectService";

export async function getContracts(): Promise<LocalContract[]> {
  const contracts = new Array<LocalContract>();
  ALL_PROJECT_DATA.forEach((p) => {
    contracts.push(...(p.contracts as LocalContract[]));
  });
  return contracts;
}

export async function getContract(address: `0x${string}`, chainId?: number) {
  if (chainId === 1) {
    const contracts = await getContracts();
    const contract: LocalContract | undefined = contracts.find(
      (i: LocalContract) =>
        i.addresses
          .filter((i) => i.network === "mainnet")
          .find((x) => x.address === address)
    );
    return contract;
  }
}
