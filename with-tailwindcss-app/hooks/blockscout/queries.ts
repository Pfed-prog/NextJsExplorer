import type {
  AddressInfo,
  AddressTransactionsBlockscout,
  BlockInfoBlockscout,
  BlockTransactionsBlockscout,
  CountersContractBlockscout,
  TokenBlockscout,
  TransactionBlockscout,
} from "@evmexplorer/blockscout";

import { getChainProviderBlockscout } from "@evmexplorer/blockscout";

export async function fetchContractCounters(
  address: string,
  chainId?: number
): Promise<CountersContractBlockscout> {
  const chainProvider: string = getChainProviderBlockscout(chainId);
  const query: string = `https://${chainProvider}/api/v2/addresses/${address}/counters`;

  const response: Response = await fetch(query);
  if (response.status === 200) {
    const body: CountersContractBlockscout = await response.json();
    if (
      body.gas_usage_count === "0" &&
      body.token_transfers_count === "0" &&
      body.transactions_count === "0" &&
      body.validations_count === "0"
    ) {
      throw new Error("BlockScout Contract Counters response empty");
    }
    if (body.transactions_count !== "0" && body.gas_usage_count === "0") {
      throw new Error("BlockScout Contract Counters response faulty");
    }
    if (body.gas_usage_count === "0" && body.token_transfers_count !== "0") {
      throw new Error("BlockScout Contract Counters response faulty");
    }
    return body;
  }
  throw new Error("BlockScout Contract Counters response undefined");
}

export async function fetchAddressTransactions(
  address: string,
  chainId?: number
): Promise<TransactionBlockscout[]> {
  const chainProvider: string = getChainProviderBlockscout(chainId);
  const query: string = `https://${chainProvider}/api/v2/addresses/${address}/transactions`;

  const response: Response = await fetch(query);
  const body: AddressTransactionsBlockscout = await response.json();
  return body.items;
}

export async function fetchAddressInfo(
  address: string,
  chainId?: number
): Promise<AddressInfo> {
  const chainProvider: string = getChainProviderBlockscout(chainId);
  const query: string = `https://${chainProvider}/api/v2/addresses/${address}`;

  const response: Response = await fetch(query);
  const body: AddressInfo = await response.json();
  if (!body.hash)
    return {
      hash: address,
    };

  return body;
}

export async function fetchTokenInfo(
  address: string,
  chainId?: number
): Promise<TokenBlockscout> {
  const chainProvider: string = getChainProviderBlockscout(chainId);
  const query: string = `https://${chainProvider}/api/v2/tokens/${address}`;

  const response: Response = await fetch(query);
  const body: TokenBlockscout = await response.json();
  return body;
}

export async function fetchTransactionBlockscout(
  hash: string,
  chainId?: number
): Promise<TransactionBlockscout> {
  const chainProvider: string = getChainProviderBlockscout(chainId);
  const query: string = `https://${chainProvider}/api/v2/transactions/${hash}`;

  const response: Response = await fetch(query);
  const body: TransactionBlockscout = await response.json();
  return body;
}

export async function fetchTransactionBlockscoutConditional(
  hash?: string,
  chainId?: number
): Promise<TransactionBlockscout> {
  if (hash) {
    const chainProvider: string = getChainProviderBlockscout(chainId);
    const query: string = `https://${chainProvider}/api/v2/transactions/${hash}`;

    const response: Response = await fetch(query);
    const body: TransactionBlockscout = await response.json();
    return body;
  }
  throw new Error("");
}

export async function fetchBlockInfoBlockscout(
  chainId: number,
  block?: number
) {
  if (block) {
    const chainProvider: string = getChainProviderBlockscout(chainId);
    const query: string = `https://${chainProvider}/api/v2/blocks/${block}`;

    const response: Response = await fetch(query);
    const body: BlockInfoBlockscout = await response.json();
    return body;
  }
  throw new Error("no block");
}

export async function fetchBlockTransactionsBlockscout(
  chainId: number,
  block?: number
) {
  if (block) {
    const chainProvider: string = getChainProviderBlockscout(chainId);
    const query: string = `https://${chainProvider}/api/v2/blocks/${block}/transactions`;

    const response: Response = await fetch(query);
    const body: BlockTransactionsBlockscout = await response.json();
    return body;
  }
  throw new Error("no block");
}
