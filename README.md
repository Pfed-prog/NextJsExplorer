# NextJs EVM Explorer

![Welcome Page](https://github.com/Pfed-prog/NextJsExplorer/blob/main/assets/evmexplorer.png)

## Features

- Address Search: the application allows users to search for Ethereum contracts by their address on 9 evm chains: ethereum mainnet, optimism, base, mode network, zora, redstone, polygon, arbitrum and filecoin.

- Address Page Balance Data: token logo, native token balance in USD, token name, contract implementation name, ENS associated name or address hash.

  - Token Data: value of 1 token in USD, holders number, 24h volume in USD, 24h volume % of market cap, market cap in USD.

- Address Page Smart Contract Statistics: aggregate data for total `Gas usage`, `Token transfers` count, `Transactions` count, `Average Gas per Transaction` and `Validations` count.

- Address Page Transactions: users can view 50 latest transactions associated with an address, including their receiver, sender, contract method called, eth or matic value, fees and gas used.

  - Fees: display gas fee cost in USD.
  - Transaction Method and Type: colored to reflect the mix of coin transfer, token transfer and contract call.

- Blocks page: block miner and date. Aggregate data for total `Gas usage`, `Transactions` count and `Average Gas per Transaction`. Display all the transactions in the block with their receiver, sender, gas used and value in USD.

  - Token Transfers

- Transaction page: block number, transaction type, receiver, contract method call details, sender, gas used in USD and token transfers details.

Overall, EVM Explorer simplifies the process of exploring Ethereum contracts and their associated data. It provides a user-friendly interface that allows users to quickly and easily access important information about contracts.

## Development

`yarn`

`yarn dev`

## Features in Progress

- Current state: The application displays all the current states for a contract.

This can only work for verified contracts. `Smart-contracts` endpoint in blockscout.

[Smart contract state](https://ethereum.stackexchange.com/questions/159456/extract-read-write-set-of-state-variables-from-a-smart-contract)

[Machine translation-based fine-grained comments generation for solidity smart contracts](https://www.sciencedirect.com/science/article/abs/pii/S0950584922001744)

- Display tokens on contracts page

## Further Information

[Blockscout being open-source and having a token balances sdk](https://stackoverflow.com/a/79314977/13943679)

[BlockScout Chains](https://www.blockscout.com/chains-and-projects)

### BlockScout Bugs and Feature Requests

- [BlockScout Tx API Feedback request](https://blockscout.canny.io/feedback/p/what-is-the-meaning-behind-tx-api-outputs)

- [BlockScout Contract Counters Bugs](https://blockscout.canny.io/feedback/p/contract-counters-bugs)

- [Add Explicit Pagination in get requests](https://blockscout.canny.io/feature-requests/p/add-explicit-pagination-in-get-requests)

#### Rest API Bugs

[Duplciate transactions](https://blockscout.canny.io/feedback/p/duplicate-variables-when-fetching-transactions) and linked [rest api issue in docs](https://github.com/blockscout/docs/issues/366)

### Etherscan

- [Etherscan is considered the notary for validating contract source-code matches bytecode](https://x.com/dmihal/status/1791622407653904880)

- [Etherscan goes down & Blockscout steps up](https://www.blog.blockscout.com/blockscout-news-april-2024/)

### TrueBlocks

- [Getting started with TrueBlocks](https://github.com/TrueBlocks/trueblocks-core/issues/3700)

- [Exporting detailed data from indexer: 429 too many requests](https://github.com/TrueBlocks/trueblocks-core/issues/3703)

### Viem

- [Added new Chain Configuration: Redstone](https://github.com/wevm/viem/pull/2315)

- [Found bug: useEthersProvider Example TS error](https://github.com/wevm/wagmi/issues/3923)

### Other Useful Resources

- [ENS Deployments](https://docs.ens.domains/learn/deployments)

- [ChainList is a list of EVM networks](https://chainlist.org/)

- [Bitcoin and Ethereum Lack Data Range Search Functionality?](https://ingeun92.medium.com/bitcoin-and-ethereum-lack-data-range-search-functionality-41acfa1f5279)

- [DeFi Llama API](https://defillama.com/docs/api)
