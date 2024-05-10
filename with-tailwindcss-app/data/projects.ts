import {
  Compound_Governance_ABI,
  Compound_cDAI_ABI,
  Compound_cETH_ABI,
  ERC20_ABI,
  TokenSets_Core_ABI,
  ENS_Registry_ABI,
  Uniswap_Factory_ABI,
  Uniswap_Pair_ABI,
  Uniswap_Router01_ABI,
  TokenSets_Roboset_ABI,
  TokenSets_RebalancingSetIssuanceModule_ABI,
  TokenSets_TransferProxy_ABI,
  Aave_LendingPool_ABI,
  Aave_LendingPoolAddressesProvider_ABI,
  Aave_LendingPoolCore_ABI,
} from "../data/ABIs";

const ALL_PROJECT_DATA = [
  {
    name: "Aave",
    logoPath: "Logo_Aave.png",
    description:
      "Aave is a decentralized financial platform based on the Ethereum blockchain technology, which provides lending, depositing, and cryptocurrency exchange services. The platform is created for users to earn income, earn interest on their deposits and loans, as well as invest in cryptocurrencies. In Aave, users can perform operations with various cryptocurrencies such as Ethereum, USDC, Tether, and many more. All operations on the platform are automated thanks to the smart contracts. Aave is actively developing and improving, including new features such as providing online voting for decision-making and planning future platform enhancements.",
    contracts: [
      {
        name: "Lending Pool V1",
        abi: Aave_LendingPool_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0x398eC7346DcD622eDc5ae82352F02bE94C62d119",
          },
        ],
      },
      {
        name: "Lending Pool Addresses Provider V1",
        abi: Aave_LendingPoolAddressesProvider_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
          },
        ],
      },
      {
        name: "Lending Pool Core V1",
        abi: Aave_LendingPoolCore_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0x3dfd23A6c5E8BbcFc9581d2E864a68feb6a076d3",
          },
        ],
      },
    ],
  },
  {
    name: "Compound",
    logoPath: "Logo_Compound.png",
    description:
      "Compound is a decentralized finance (DeFi) platform that allows users to earn interest on their cryptocurrency holdings and borrow against their digital assets. It operates on the Ethereum blockchain, and its native token is called COMP. Compound enables users to lend and borrow various cryptocurrencies, including ETH, DAI, USDC, and others, and earn interest or pay interest rates on these loans. The platform uses an algorithmic system to manage interest rates, which are based on supply and demand. Compound is one of the most popular DeFi platforms in the industry.",
    contracts: [
      {
        name: "Governance",
        abi: Compound_Governance_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0xc0da01a04c3f3e0be433606045bb7017a7323e38",
          },
        ],
      },
      {
        name: "cDAI",
        abi: Compound_cDAI_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643",
          },
        ],
      },
      {
        name: "cETH",
        abi: Compound_cETH_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5",
          },
        ],
      },
    ],
  },
  {
    name: "ENS Domains",
    logoPath: "Logo_ENS.png",
    description:
      "ENS (Ethereum Name Service) is a decentralized domain name system on the Ethereum blockchain. It allows users to register human-readable domain names instead of complex wallet addresses, making it easier and more convenient to send and receive cryptocurrencies. ENS domains are NFTs that can be transferred, bought, and sold. They provide global, censorship-resistant, and portable domain names for various use cases, including hosting websites and decentralized apps.",
    contracts: [
      {
        name: "Registry",
        abi: ENS_Registry_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
        ],
      },
    ],
  },
  {
    name: "ERC20",
    logoPath: "Logo_ERC20.png",
    description:
      "ERC20 is a standard protocol on the Ethereum blockchain that ensures tokens are interoperable and have consistent functionality. Tokens created using the ERC20 standard can be stored in Ethereum wallets and traded on decentralized exchanges. Many popular cryptocurrencies, such as USDT, LINK, and UNI, are ERC20 tokens.",
    contracts: [
      {
        name: "BAT",
        abi: ERC20_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
          },
        ],
      },
      {
        name: "DAI",
        abi: ERC20_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          },
        ],
      },
      {
        name: "KNC",
        abi: ERC20_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0xdd974D5C2e2928deA5F71b9825b8b646686BD200",
          },
        ],
      },
      {
        name: "LINK",
        abi: ERC20_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
          },
        ],
      },
      {
        name: "MKR",
        abi: ERC20_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
          },
        ],
      },
      {
        name: "SNX",
        abi: ERC20_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
          },
        ],
      },
      {
        name: "REP",
        abi: ERC20_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0x1985365e9f78359a9B6AD760e32412f4a445E862",
          },
        ],
      },
      {
        name: "TUSD",
        abi: ERC20_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0x0000000000085d4780B73119b644AE5ecd22b376",
          },
        ],
      },
      {
        name: "USDC",
        abi: ERC20_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          },
        ],
      },
      {
        name: "USDT",
        abi: ERC20_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          },
        ],
      },
      {
        name: "WBTC",
        abi: ERC20_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          },
        ],
      },
      {
        name: "ZRX",
        abi: ERC20_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
          },
        ],
      },
    ],
  },
  {
    name: "Token Sets",
    logoPath: "Logo_Sets.png",
    description:
      "TokenSets is a DeFi platform that allows users to automate cryptocurrency trading strategies with Sets, which are portfolios of tokens representing specific strategies. Sets are managed by smart contracts that execute trading rules and are powered by Ethereum. TokenSets offers various Sets, including Crypto Index Sets and Trend Trading Sets. The platform has a governance token called SET, which is used for decision-making and fees. It enables more hands-off and efficient crypto investing.",
    contracts: [
      {
        name: "Core",
        abi: TokenSets_Core_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0xf55186CC537E7067EA616F2aaE007b4427a120C8",
          },
        ],
      },
      {
        name: "ETH20SMACO",
        abi: TokenSets_Roboset_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0x9ea463Ec4cE9E9E5bc9cFd0187C4Ac3a70DD951D",
          },
        ],
      },
      {
        name: "ETH50SMACO",
        abi: TokenSets_Roboset_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0xa360F2aF3F957906468c0FD7526391AeD08aE3DB",
          },
        ],
      },
      {
        name: "ETH12EMACO",
        abi: TokenSets_Roboset_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0x2c5a9980B41861D91D30d0E0271d1c093452DcA5",
          },
        ],
      },
      {
        name: "ETH26EMACO",
        abi: TokenSets_Roboset_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0x614857c755739354d68ae0abd53849cf45d6a41d",
          },
        ],
      },
      {
        name: "BTCETH5050",
        abi: TokenSets_Roboset_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0xc06aEc5191bE16b94FfC97B6Fc01393527367365",
          },
        ],
      },
      {
        name: "BTCETH7525",
        abi: TokenSets_Roboset_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0xA35Fc5019C4dc509394Bd4d74591a0bF8852c195",
          },
        ],
      },
      {
        name: "ETHBTC7525",
        abi: TokenSets_Roboset_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0xA6c040045d962e4B8eFa00954c7d23CCd0a2b8AD",
          },
        ],
      },
      {
        name: "ETHBTCRSI",
        abi: TokenSets_Roboset_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0xbf70A33A13fBe8D0106Df321Da0Cf654d2E9Ab50",
          },
        ],
      },
      {
        name: "RebalancingSetIssuanceModule",
        abi: TokenSets_RebalancingSetIssuanceModule_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0xceda8318522d348f1d1aca48b24629b8fbf09020",
          },
        ],
      },
      {
        name: "TransferProxy",
        abi: TokenSets_TransferProxy_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0x882d80d3a191859d64477eb78cca46599307ec1c",
          },
        ],
      },
    ],
  },
  {
    name: "Uniswap",
    logoPath: "Logo_Uniswap.png",
    description:
      "Uniswap is a DEX on Ethereum that allows users to trade cryptocurrencies without intermediaries. It upgraded the original Uniswap platform with an AMM mechanism that balances supply and demand in liquidity pools. Additionally, it introduced flash swaps and ERC20 to ERC20 token swaps. Uniswap is one of the most popular DEXs in DeFi and has its own native governance and reward token called UNI.",
    contracts: [
      {
        name: "Factory V2",
        abi: Uniswap_Factory_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
          },
        ],
      },
      {
        name: "ETH-USDT Pair V2",
        abi: Uniswap_Pair_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852",
          },
        ],
      },
      {
        name: "Router V2",
        abi: Uniswap_Router01_ABI,
        addresses: [
          {
            network: "mainnet",
            address: "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a",
          },
        ],
      },
    ],
  },
];

export default ALL_PROJECT_DATA;
