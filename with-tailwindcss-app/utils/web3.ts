import { ethers, providers } from "ethers";

export async function isContractAddress(
  address: string,
  provider: providers.Provider
): Promise<boolean> {
  if (address?.length !== 42) {
    return false;
  }

  try {
    const getAddress = ethers.utils.getAddress(address);
    const baseProvider = provider;
    const code = await baseProvider.getCode(getAddress);

    if (code !== "0x") {
      return true;
    }
  } catch (ex) {
    console.log("Error: unable to parse address", address);
  }

  return false;
}

export function parseEther(wei: number): string {
  const ether = ethers.utils.formatEther(wei.toString());
  const formatted = (Math.round(Number(ether) * 100) / 100).toLocaleString();

  return formatted;
}

export function parseAddress(address: string): string {
  const begin = address.substring(0, 7);
  const end = address.substring(address.length - 3, address.length);
  const formatted = `${begin}...${end}`;

  return formatted;
}

export async function getEnsNameOrAddress(
  address: string,
  provider: providers.Provider,
  shorten?: boolean
): Promise<string> {
  const name = await provider.lookupAddress(address);
  if (name) return name;

  if (shorten) return parseAddress(address);

  return address;
}
