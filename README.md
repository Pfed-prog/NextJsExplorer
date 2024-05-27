# NextJs EVM Explorer

Here are some of the key features of EVM Smart Contract Explorer:

- Address Search: The application allows users to search for Ethereum contracts by their address on 8 evm chains: ethereum mainnet, optimism, base, mode network, zora, redstone, polygon and arbitrum.

- Address Page Balance Data: Native token balance in USD, token name, contract implementation name, ENS associated name and token logo.

- Address Page Smart Contract Statistics: aggregate data for total `Gas usage`, `Token transfers` count, `Transactions` count and `Average Gas per Transaction`.

- Address Page Transactions: Users can view 50 latest transactions associated with an address, including their receiver, sender, contract method called, eth or matic value, fees and gas used.

  - Fees: Display Gas fee cost in USD.
  - Transaction Method and Type: colored to reflect the mix of coin transfer, token transfer and contract call.

- Blocks page: Gas Usage, miner, total transactions and date. Display all the transactions in the block with their receiver, sender, gas used and value.

- Transaction page: BlockNumber, transaction type, receiver, sender, gas and gas price.

Overall, the Ethereum Contract Explorer simplifies the process of exploring Ethereum contracts and their associated data. It provides a user-friendly interface that allows users to quickly and easily access important information about contracts.

## Development

`yarn`

`yarn dev`

## Features in Progress

- Current state: The application displays all the current states for a contract.

This can only work for verified contracts. `Smart-contracts` endpoint in blockscout.

[Smart contract state](https://ethereum.stackexchange.com/questions/159456/extract-read-write-set-of-state-variables-from-a-smart-contract)

[Machine translation-based fine-grained comments generation for solidity smart contracts](https://www.sciencedirect.com/science/article/abs/pii/S0950584922001744)

- Display tokens on contracts page

- Improve Blocks page with transaction queried via blockscout

- Improve Transactions page with transaction queried via blockscout

## Further Information

### BlockScout

- [BlockScout Tx API Feedback request](https://blockscout.canny.io/feedback/p/what-is-the-meaning-behind-tx-api-outputs)

- [BlockScout Contract Counters Bugs](https://blockscout.canny.io/feedback/p/contract-counters-bugs)

- [Add Explicit Pagination in get requests](https://blockscout.canny.io/feature-requests/p/add-explicit-pagination-in-get-requests)

- [BlockScout Chains](https://www.blockscout.com/chains-and-projects)

### Etherscan

- [Etherscan is considered the notary for validating contract source-code matches bytecode.](https://x.com/dmihal/status/1791622407653904880)

- [Etherscan goes down & Blockscout steps up](https://www.blog.blockscout.com/blockscout-news-april-2024/)

### TrueBlocks

- [Getting started with TrueBlocks](https://github.com/TrueBlocks/trueblocks-core/issues/3700)

- [Exporting detailed data from indexer: 429 too many requests](https://github.com/TrueBlocks/trueblocks-core/issues/3703)

### Viem

- [Added new Chain Configuration: Redstone](https://github.com/wevm/viem/pull/2312)

### Other Useful Resources

- [ENS Deployments](https://docs.ens.domains/learn/deployments)

- [ChainList is a list of EVM networks](https://chainlist.org/)

- [Bitcoin and Ethereum Lack Data Range Search Functionality?](https://ingeun92.medium.com/bitcoin-and-ethereum-lack-data-range-search-functionality-41acfa1f5279)
