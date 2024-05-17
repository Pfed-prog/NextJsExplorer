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
  return body;
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
