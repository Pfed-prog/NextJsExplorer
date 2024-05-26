import { http, createPublicClient, Chain } from "viem";
import { mainnet, zora, base, optimism } from "viem/chains";

export const publicMainnetClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

export const publicZoraClient = createPublicClient({
  chain: zora,
  transport: http(),
});

export const publicBaseClient = createPublicClient({
  chain: base,
  transport: http(),
});

export const publicOptimismClient = createPublicClient({
  chain: optimism,
  transport: http(),
});

export async function getBlock(chain: string, bigIntBlock: bigint) {
  if (chain === "mainnet") {
    return await publicMainnetClient.getBlock({
      blockNumber: bigIntBlock,
    });
  }
  if (chain === "zora") {
    return await publicZoraClient.getBlock({
      blockNumber: bigIntBlock,
    });
  }
  if (chain === "base") {
    return await publicBaseClient.getBlock({
      blockNumber: bigIntBlock,
    });
  }
  if (chain === "optimism") {
    return await publicOptimismClient.getBlock({
      blockNumber: bigIntBlock,
    });
  }
}
