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
    case 690:
      return "explorer.redstone.xyz";
    case 137:
      return "polygon.blockscout.com";
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

export type TransactionAddressData = {
  ens_domain_name: string | null;
  hash: string;
  implementation_name: string | null;
  is_contract: boolean;
  is_verified: boolean;
  metadata: string;
  name: string | null;
};

export type Fee = {
  type: string;
  value: string;
};

export type TransactionParameter = {
  name: string;
  type: string;
  value: string;
};

type DecodedInput = {
  method_call: string;
  method_id: string;
  parameters: TransactionParameter[];
};

export type TokenTransfer = {
  block_hash: string;
  from: TransactionAddressData;
  to: TransactionAddressData;
  log_index: string;
  method: null;
  timestamp: null;
  token: Token;
  total: { token_id: string; decimals?: string | null; value?: string };
  tx_hash: string;
  type: string;
};

export type AddressTransaction = {
  base_fee_per_gas: string;
  block: number | null;
  confirmations: number;
  confirmation_duration: number[];
  decoded_input: DecodedInput;
  exchange_rate: string;
  fee: Fee;
  hash: string;
  timestamp: string;
  from: TransactionAddressData;
  to: TransactionAddressData | null;
  value: string;
  gas_limit: string;
  gas_price: string;
  gas_used: string;
  method: string;
  token_transfers: null | TokenTransfer[];
  tx_types: string[];
  status: "ok" | "error";
  result: string;
};

export type AddressTransactions = {
  items: AddressTransaction[];
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
  items: AddressTransaction[];
  next_page_params: {
    block_number: number;
    index: number;
    items_count: number;
  };
};

export async function fetchAddressTransactions(
  address: string,
  chainId?: number
): Promise<AddressTransaction[]> {
  const chainProvider: string = getChainProvider(chainId);
  const query: string = `https://${chainProvider}/api/v2/addresses/${address}/transactions`;

  const response: Response = await fetch(query);
  const body: AddressTransactions = await response.json();
  return body.items;
}

export type Token = {
  address: string;
  circulating_market_cap: string | null;
  decimals: string | null;
  exchange_rate: string | null;
  holders: string;
  icon_url: string;
  name: string;
  symbol: string;
  total_supply: string | null;
  type: string;
  volume_24h: string | null;
};

export type AddressInfo = {
  block_number_balance_updated_at: number;
  coin_balance: string;
  creation_tx_hash: string | null;
  creator_address_hash: string | null;
  ens_domain_name: string | null;
  exchange_rate: string;
  has_beacon_chain_withdrawals: boolean;
  has_custom_methods_read: boolean;
  has_custom_methods_write: boolean;
  has_decompiled_code: boolean;
  has_logs: boolean;
  has_methods_read: boolean;
  has_methods_read_proxy: boolean;
  has_methods_write: boolean;
  has_methods_write_proxy: boolean;
  has_token_transfers: boolean;
  has_tokens: boolean;
  has_validated_blocks: boolean;
  hash: string;
  implementation_address: string | null;
  implementation_name: string | null;
  is_contract: boolean;
  is_verified: boolean | null;
  metadata: null;
  name: string;
  private_tags: [];
  public_tags: [];
  token: Token | null;
  watchlist_address_id: null;
  watchlist_names: [];
};

export async function fetchAddressInfo(
  address: string,
  chainId?: number
): Promise<AddressInfo> {
  const chainProvider: string = getChainProvider(chainId);
  const query: string = `https://${chainProvider}/api/v2/addresses/${address}`;

  const response: Response = await fetch(query);
  const body: AddressInfo = await response.json();
  return body;
}

export async function fetchTokenInfo(
  address: string,
  chainId?: number
): Promise<Token> {
  const chainProvider: string = getChainProvider(chainId);
  const query: string = `https://${chainProvider}/api/v2/tokens/${address}`;

  const response: Response = await fetch(query);
  const body: Token = await response.json();
  return body;
}

export async function fetchTransactionBlockscout(
  hash: string,
  chainId?: number
): Promise<AddressTransaction> {
  const chainProvider: string = getChainProvider(chainId);
  const query: string = `https://${chainProvider}/api/v2/transactions/${hash}`;

  const response: Response = await fetch(query);
  const body: AddressTransaction = await response.json();
  return body;
}

export async function fetchTransactionBlockscoutConditional(
  hash: string | undefined,
  chainId?: number
): Promise<AddressTransaction> {
  if (hash) {
    const chainProvider: string = getChainProvider(chainId);
    const query: string = `https://${chainProvider}/api/v2/transactions/${hash}`;

    const response: Response = await fetch(query);
    const body: AddressTransaction = await response.json();
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
): Promise<AddressTransaction> {
  const hash = transactions[pageParam].hash;
  if (hash) {
    const chainProvider: string = getChainProvider(chainId);
    const query: string = `https://${chainProvider}/api/v2/transactions/${hash}`;

    const response: Response = await fetch(query);
    const body: AddressTransaction = await response.json();
    return body;
  }
  throw new Error("no hash");
}

export type BlockInfo = {
  base_fee_per_gas: string;
  blob_gas_price: null;
  blob_gas_used: string;
  blob_tx_count: number;
  burnt_blob_fees: string;
  burnt_fees: string;
  burnt_fees_percentage: number;
  difficulty: string;
  excess_blob_gas: string;
  gas_limit: string;
  gas_target_percentage: number;
  gas_used: string;
  gas_used_percentage: number;
  hash: string;
  height: number;
  miner: TransactionAddressData;
  nonce: string;
  parent_hash: string;
  priority_fee: string;
  rewards: Array<object>;
  size: number;
  timestamp: string;
  total_difficulty: string;
  tx_count: number;
  tx_fees: string;
  type: string;
  uncles_hashes: Array<any>;
  withdrawals_count: number;
};

export async function fetchBlockInfoBlockscout(
  block: number | null,
  chainId?: number
) {
  if (block) {
    const chainProvider: string = getChainProvider(chainId);
    const query: string = `https://${chainProvider}/api/v2/blocks/${block}`;

    const response: Response = await fetch(query);
    const body: BlockInfo = await response.json();
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
