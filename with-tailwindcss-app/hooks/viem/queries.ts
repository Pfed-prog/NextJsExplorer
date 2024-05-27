import { getBlock, getTransaction } from "@/services/client";

export async function fetchBlockTransactions(
  block: number,
  networkName: string
) {
  const numberBlock = Number(block);

  if (Number.isInteger(numberBlock)) {
    const bigIntBlock = BigInt(numberBlock);
    const blockData = await getBlock(bigIntBlock, networkName);
    if (blockData) return blockData;
  }
}

export async function fetchTransaction(
  hash: `0x${string}`,
  networkName: string
) {
  const transactionData = await getTransaction(hash, networkName);
  return transactionData;
}
