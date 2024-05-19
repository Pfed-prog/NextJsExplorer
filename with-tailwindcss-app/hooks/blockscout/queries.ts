export type CountersContract = {
  gas_usage_count: string;
  token_transfers_count: string;
  transactions_count: string;
  validations_count: string;
};

export function getBlockScoutPrefix(chainId?: number): string {
  if (chainId === 1) {
    return "eth";
  }
  if (chainId === 10) {
    return "optimism";
  }
  if (chainId === 8453) {
    return "base";
  }
  if (chainId === 7777777) {
    return "zora";
  }
  return "eth";
}

export async function fetchContractCounters(
  address: string,
  chainId?: number
): Promise<CountersContract> {
  const chainPrefix: string = getBlockScoutPrefix(chainId);
  const query: string = `https://${chainPrefix}.blockscout.com/api/v2/addresses/${address}/counters`;

  const response: Response = await fetch(query);
  const body: CountersContract = await response.json();
  if (body) return body;
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

export type AddressTransaction = {
  block: number;
  hash: string;
  confirmations: number;
  confirmation_duration: Array<number>;
  timestamp: string;
  from: TransactionAddressData;
  to: TransactionAddressData;
  value: string;
  exchange_rate: string;
  gas_limit: string;
  gas_price: string;
  gas_used: string;
  method: string;
  tx_types: Array<string>;
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

export async function fetchAddressTransactions(
  address: string,
  chainId?: number
): Promise<AddressTransaction[]> {
  const chainPrefix: string = getBlockScoutPrefix(chainId);
  const query: string = `https://${chainPrefix}.blockscout.com/api/v2/addresses/${address}/transactions`;

  const response: Response = await fetch(query);
  const body: AddressTransactions = await response.json();
  return body.items;
}

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
  token: null;
  watchlist_address_id: null;
  watchlist_names: [];
};

export async function fetchAddressInfo(
  address: string,
  chainId?: number
): Promise<AddressInfo> {
  const chainPrefix: string = getBlockScoutPrefix(chainId);
  const query: string = `https://${chainPrefix}.blockscout.com/api/v2/addresses/${address}`;

  const response: Response = await fetch(query);
  const body: AddressInfo = await response.json();
  console.log(body);
  return body;
}
