export function getNetworkNameTitle(chainId?: number): string {
  switch (chainId) {
    case 1:
      return "Ethereum";
    case 10:
      return "Optimism";
    case 137:
      return "Polygon MATIC";
    case 690:
      return "Redstone";
    case 8453:
      return "Base";
    case 34443:
      return "Mode Network";
    case 42161:
      return "Arbitrum One Nitro";
    case 7777777:
      return "Zora";
  }
  return "Ethereum";
}

export function getNetworkName(chainId?: number): string {
  switch (chainId) {
    case 1:
      return "mainnet";
    case 10:
      return "optimism";
    case 137:
      return "polygon";
    case 690:
      return "redstone";
    case 8453:
      return "base";
    case 34443:
      return "mode";
    case 42161:
      return "arbitrum";
    case 7777777:
      return "zora";
  }
  return "mainnet";
}

export function getNetworkNameUniswap(chainId?: number): string {
  switch (chainId) {
    case 1:
      return "ethereum";
    case 10:
      return "optimism";
    case 137:
      return "polygon";
    case 8453:
      return "base";
    case 42161:
      return "arbitrum";
  }
  return "ethereum";
}

export function getNetworkId(chainId?: string): number {
  switch (chainId) {
    case "mainnet":
      return 1;
    case "optimism":
      return 10;
    case "polygon":
      return 137;
    case "redstone":
      return 690;
    case "base":
      return 8453;
    case "mode":
      return 34443;
    case "arbitrum":
      return 42161;
    case "zora":
      return 7777777;
  }
  return 1;
}
