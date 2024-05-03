import { Provider } from "ethers";

export function parseAddress(address: string): string {
  const begin = address.substring(0, 7);
  const end = address.substring(address.length - 3, address.length);
  const formatted = `${begin}...${end}`;
  return formatted;
}

export async function getEnsNameOrAddress(
  address: string,
  provider: Provider,
  shorten?: boolean
): Promise<string> {
  const name = await provider.lookupAddress(address);
  if (name) return name;

  if (shorten) return parseAddress(address);

  return address;
}

export async function getTransactions(provider: any) {
  const blockNumber = await provider.getBlockNumber();

  const transactionLogs = await provider.getLogs({
    fromBlock: blockNumber - 1,
    toBlock: blockNumber,
  });

  const transactions = await Promise.all(
    transactionLogs.slice(0, 10).map(async (log: any) => {
      const transaction = await provider.getTransaction(log.transactionHash);

      return {
        hash: transaction.hash,
        from: transaction.from,
        to: transaction.to,
        value: transaction.value,
        gasPrice: transaction.gasPrice,
      };
    })
  );
  return transactions;
}
