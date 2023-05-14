import { Address } from "types";

export function getNetworkName(chainId: number): string {
  switch (chainId) {
    case 1:
      return "mainnet";
    case 3:
      return "ropsten";
    case 42:
      return "kovan";
    case 4:
      return "rinkeby";
    case 5:
      return "goerli";
    case 100:
      return "xdai";
  }

  return "mainnet";
}

export function getEtherscanLink(address: Address): string {
  switch (address.network) {
    case "goerli":
      return "https://goerli.etherscan.io/address/" + address.address;
    case "xdai":
      return "https://blockscout.com/poa/xdai/address/" + address.address;
  }

  return "https://www.etherscan.io/address/" + address.address;
}
