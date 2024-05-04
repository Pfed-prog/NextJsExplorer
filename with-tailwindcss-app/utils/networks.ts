import { Address } from "types";

export function getNetworkName(chainId: number): string {
  switch (chainId) {
    case 1:
      return "mainnet";
    case 10:
      return "optimism";
  }

  return "mainnet";
}

export function getEtherscanLink(address: Address): string {
  switch (address.network) {
    case "goerli":
      return "https://goerli.etherscan.io/address/" + address.address;
    case "optimism":
      return "https://optimistic.etherscan.io/address/" + address.address;
  }
  return "https://www.etherscan.io/address/" + address.address;
}
