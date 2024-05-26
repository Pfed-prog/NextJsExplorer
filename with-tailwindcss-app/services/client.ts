import { http, createPublicClient, defineChain } from "viem";
import {
  mainnet,
  zora,
  base,
  optimism,
  mode,
  polygon,
  arbitrum,
} from "viem/chains";

export const redstone = defineChain({
  id: 690,
  name: "Redstone",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.redstonechain.com"],
      webSocket: ["wss://rpc.redstonechain.com"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "	https://explorer.redstone.xyz" },
  },
});

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

export async function getBlock(chain: string, bigIntBlock: bigint) {
  if (chain === "mainnet") {
    return await publicMainnetClient.getBlock({
      blockNumber: bigIntBlock,
    });
  }
  if (chain === "optimism") {
    return await publicOptimismClient.getBlock({
      blockNumber: bigIntBlock,
    });
  }
  if (chain === "base") {
    return await publicBaseClient.getBlock({
      blockNumber: bigIntBlock,
    });
  }
  if (chain === "mode") {
    return await publicModeClient.getBlock({
      blockNumber: bigIntBlock,
    });
  }
  if (chain === "zora") {
    return await publicZoraClient.getBlock({
      blockNumber: bigIntBlock,
    });
  }
  if (chain === "redstone") {
    return await publicRedstoneClient.getBlock({
      blockNumber: bigIntBlock,
    });
  }
  if (chain === "polygon") {
    return await publicPolygonClient.getBlock({
      blockNumber: bigIntBlock,
    });
  }
  if (chain === "arbitrum") {
    return await publicArbitrumClient.getBlock({
      blockNumber: bigIntBlock,
    });
  }
}
