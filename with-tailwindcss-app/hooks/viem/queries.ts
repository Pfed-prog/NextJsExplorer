import { getBlock } from "@/services/client";

export type Block = {
  number: bigint;
  gasUsed: bigint;
  timestamp: bigint;
  miner: string;
  nonce: `0x${string}`;
  hash: `0x${string}`;
  logsBloom: `0x${string}`;
  baseFeePerGas: bigint | null;
  blobGasUsed: bigint;
  difficulty: bigint;
  excessBlobGas: bigint;
  extraData: `0x${string}`;
  gasLimit: bigint;
  transactions: `0x${string}`[];
};

export async function fetchBlockTransactions(
  block: number,
  networkName: string
) {
  const numberBlock = Number(block);

  if (Number.isInteger(numberBlock)) {
    const bigIntBlock = BigInt(numberBlock);
    const blockData = await getBlock(networkName, bigIntBlock);
    if (blockData) return blockData as Block;
  }
}
