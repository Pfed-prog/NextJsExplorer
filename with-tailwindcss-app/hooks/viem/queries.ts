import type { ChainType } from "@evmexplorer/utility";

import { getBlock, getTransaction } from "@/services/client";

export async function fetchBlockTransactions(
  networkName: ChainType,
  block?: number
) {
  if (block) {
    const numberBlock = Number(block);

    if (Number.isInteger(numberBlock)) {
      const bigIntBlock = BigInt(numberBlock);
      const blockData = await getBlock(bigIntBlock, networkName);
      if (blockData) return blockData;
    }
  }
  throw new Error("no block");
}

export async function fetchTransaction(
  hash: `0x${string}`,
  networkName: ChainType
) {
  const transactionData = await getTransaction(hash, networkName);
  return transactionData;
}
