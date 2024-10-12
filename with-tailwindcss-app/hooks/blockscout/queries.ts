import type {
  BlockInfoBlockscout,
  TokenBlockscout,
  TransactionBlockscout,
} from "@evmexplorer/blockscout";

export type CountersContract = {
  gas_usage_count: string;
  token_transfers_count: string;
  transactions_count: string;
  validations_count: string;
};

export function getChainProvider(chainId?: number): string {
  switch (chainId) {
    case 1:
      return "eth.blockscout.com";
    case 10:
      return "optimism.blockscout.com";
    case 137:
      return "polygon.blockscout.com";
    case 314:
      return "filecoin.blockscout.com";
    case 690:
      return "explorer.redstone.xyz";
    case 8453:
      return "base.blockscout.com";
    case 34443:
      return "explorer.mode.network";
    case 42161:
      return "arbitrum.blockscout.com";
    case 7777777:
      return "explorer.zora.energy";
  }
  return "eth.blockscout.com";
}

export async function fetchContractCounters(
  address: string,
  chainId?: number
): Promise<CountersContract> {
  const chainProvider: string = getChainProvider(chainId);
  const query: string = `https://${chainProvider}/api/v2/addresses/${address}/counters`;

  const response: Response = await fetch(query);
  if (response.status === 200) {
    const body: CountersContract = await response.json();
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

export type AddressTransactions = {
  items: TransactionBlockscout[];
  next_page_params: {
    block_number: number;
    fee: string;
    hash: string;
    index: number;
    inserted_at: string;
    items_count: number;
    value: string;
  };
};

export type BlockTransactions = {
  items: TransactionBlockscout[];
  next_page_params: {
    block_number: number;
    index: number;
    items_count: number;
  };
};

export async function fetchAddressTransactions(
  address: string,
  chainId?: number
): Promise<TransactionBlockscout[]> {
  const chainProvider: string = getChainProvider(chainId);
  const query: string = `https://${chainProvider}/api/v2/addresses/${address}/transactions`;

  const response: Response = await fetch(query);
  const body: AddressTransactions = await response.json();
  return body.items;
}

export type AddressInfo = {
  block_number_balance_updated_at?: number;
  coin_balance?: string;
  ens_domain_name?: string;
  exchange_rate?: string;
  hash: string;
  implementation_name?: string;
  is_contract?: boolean;
  name?: string;
  token?: TokenBlockscout;
};

export async function fetchAddressInfo(
  address: string,
  chainId?: number
): Promise<AddressInfo> {
  const chainProvider: string = getChainProvider(chainId);
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
  const chainProvider: string = getChainProvider(chainId);
  const query: string = `https://${chainProvider}/api/v2/tokens/${address}`;

  const response: Response = await fetch(query);
  const body: TokenBlockscout = await response.json();
  return body;
}

export async function fetchTransactionBlockscout(
  hash: string,
  chainId?: number
): Promise<TransactionBlockscout> {
  const chainProvider: string = getChainProvider(chainId);
  const query: string = `https://${chainProvider}/api/v2/transactions/${hash}`;

  const response: Response = await fetch(query);
  const body: TransactionBlockscout = await response.json();
  return body;
}

export async function fetchTransactionBlockscoutConditional(
  hash: string | undefined,
  chainId?: number
): Promise<TransactionBlockscout> {
  if (hash) {
    const chainProvider: string = getChainProvider(chainId);
    const query: string = `https://${chainProvider}/api/v2/transactions/${hash}`;

    const response: Response = await fetch(query);
    const body: TransactionBlockscout = await response.json();
    return body;
  }
  throw new Error("");
}

export async function fetchTransactionsBlockscoutConditional(
  transactions: any,
  {
    pageParam,
  }: {
    pageParam: number;
  },
  chainId?: number
): Promise<TransactionBlockscout> {
  const hash = transactions[pageParam].hash;
  if (hash) {
    const chainProvider: string = getChainProvider(chainId);
    const query: string = `https://${chainProvider}/api/v2/transactions/${hash}`;

    const response: Response = await fetch(query);
    const body: TransactionBlockscout = await response.json();
    return body;
  }
  throw new Error("no hash");
}

export async function fetchBlockInfoBlockscout(
  block: number | null,
  chainId?: number
) {
  if (block) {
    const chainProvider: string = getChainProvider(chainId);
    const query: string = `https://${chainProvider}/api/v2/blocks/${block}`;

    const response: Response = await fetch(query);
    const body: BlockInfoBlockscout = await response.json();
    return body;
  }
  throw new Error("no block");
}

export async function fetchBlockTransactionsBlockscout(
  block: number | null,
  chainId?: number
) {
  if (block) {
    const chainProvider: string = getChainProvider(chainId);
    const query: string = `https://${chainProvider}/api/v2/blocks/${block}/transactions`;

    const response: Response = await fetch(query);
    const body: BlockTransactions = await response.json();
    return body;
  }
  throw new Error("no block");
}
