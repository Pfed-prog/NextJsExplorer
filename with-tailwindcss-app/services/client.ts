import { http, createPublicClient } from "viem";
import {
  mainnet,
  zora,
  base,
  optimism,
  mode,
  polygon,
  arbitrum,
  redstone,
} from "viem/chains";

export const publicMainnetClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

export const publicOptimismClient = createPublicClient({
  chain: optimism,
  transport: http(),
});

export const publicBaseClient = createPublicClient({
  chain: base,
  transport: http(),
});

export const publicModeClient = createPublicClient({
  chain: mode,
  transport: http(),
});

export const publicZoraClient = createPublicClient({
  chain: zora,
  transport: http(),
});

export const publicRedstoneClient = createPublicClient({
  chain: redstone,
  transport: http(),
});

export const publicPolygonClient = createPublicClient({
  chain: polygon,
  transport: http(),
});

export const publicArbitrumClient = createPublicClient({
  chain: arbitrum,
  transport: http(),
});

export function getPublicClient(chain?: string) {
  if (chain === "mainnet") {
    return publicMainnetClient;
  }
  if (chain === "optimism") {
    return publicOptimismClient;
  }
  if (chain === "base") {
    return publicBaseClient;
  }
  if (chain === "mode") {
    return publicModeClient;
  }
  if (chain === "zora") {
    return publicZoraClient;
  }
  if (chain === "redstone") {
    return publicRedstoneClient;
  }
  if (chain === "polygon") {
    return publicPolygonClient;
  }
  if (chain === "arbitrum") {
    return publicArbitrumClient;
  }
  return publicMainnetClient;
}

export async function getBlock(bigIntBlock: bigint, chain?: string) {
  const client = getPublicClient(chain);
  return await client.getBlock({
    blockNumber: bigIntBlock,
    includeTransactions: true,
  });
}

export async function getTransaction(hash: `0x${string}`, chain?: string) {
  const client = getPublicClient(chain);
  return await client.getTransaction({
    hash: hash,
  });
}
