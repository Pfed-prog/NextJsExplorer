import type { ChainType } from "@evmexplorer/utility";
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
  filecoin,
} from "viem/chains";

const clients = {
  mainnet: createPublicClient({
    chain: mainnet,
    transport: http(process.env.NEXT_PUBLIC_ALCHEMY_ETH),
  }),
  optimism: createPublicClient({ chain: optimism, transport: http() }),
  base: createPublicClient({
    chain: base,
    transport: http(process.env.NEXT_PUBLIC_ALCHEMY_BASE),
  }),
  mode: createPublicClient({ chain: mode, transport: http() }),
  zora: createPublicClient({ chain: zora, transport: http() }),
  redstone: createPublicClient({ chain: redstone, transport: http() }),
  polygon: createPublicClient({ chain: polygon, transport: http() }),
  arbitrum: createPublicClient({ chain: arbitrum, transport: http() }),
  filecoin: createPublicClient({ chain: filecoin, transport: http() }),
};

export function getPublicClient(chain: ChainType = "mainnet") {
  return clients[chain as ChainType];
}

export async function getBlock(bigIntBlock: bigint, chain: ChainType) {
  const client = getPublicClient(chain);
  return await client.getBlock({
    blockNumber: bigIntBlock,
    includeTransactions: true,
  });
}

export async function getTransaction(hash: `0x${string}`, chain: ChainType) {
  const client = getPublicClient(chain);
  return await client.getTransaction({
    hash: hash,
  });
}

export async function getTransactionReceipt(
  hash: `0x${string}`,
  chain: ChainType
) {
  const client = getPublicClient(chain);
  return await client.getTransactionReceipt({
    hash: hash,
  });
}
