import {
  Compound_Governance_ABI,
  Compound_cDAI_ABI,
  Compound_cETH_ABI,
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
      {
        name: "Lending Pool V2",
        addresses: [
          {
            network: "mainnet",
            address: "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
          },
        ],
      },
      {
        name: "Lending Addresses Provider V2",
        addresses: [
          {
            network: "mainnet",
            address: "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5",
          },
        ],
      },
      {
        name: "GhoToken",
        addresses: [
          {
            network: "mainnet",
            address: "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f",
          },
        ],
      },
      {
        name: "GHOAToken (facilitator)",
        addresses: [
          {
            network: "mainnet",
            address: "0x00907f9921424583e7ffBfEdf84F92B7B2Be4977",
          },
        ],
      },
      {
        name: "GHOVariableDebtToken",
        addresses: [
          {
            network: "mainnet",
            address: "0x786dBff3f1292ae8F92ea68Cf93c30b34B1ed04B",
          },
        ],
      },
      {
        name: "GhoOracle",
        addresses: [
          {
            network: "mainnet",
            address: "0xD110cac5d8682A3b045D5524a9903E031d70FCCd",
          },
        ],
      },
      {
        name: "GhoInterestRateStrategy",
        addresses: [
          {
            network: "mainnet",
            address: "0x16E77D8a7192b65fEd49B3374417885Ff4421A74",
          },
        ],
      },
      {
        name: "GhoDiscountRateStrategy",
        addresses: [
          {
            network: "mainnet",
            address: "0x4C38Ec4D1D2068540DfC11DFa4de41F733DDF812",
          },
        ],
      },
      {
        name: "GhoFlashMinter",
        addresses: [
          {
            network: "mainnet",
            address: "0xb639D208Bcf0589D54FaC24E655C79EC529762B8",
          },
        ],
      },
      {
        name: "UiGhoDataProvider",
        addresses: [
          {
            network: "mainnet",
            address: "0x379c1EDD1A41218bdbFf960a9d5AD2818Bf61aE8",
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
      "ENS (Ethereum Name Service) is a decentralized domain name system on the Ethereum blockchain. It allows users to register human-readable domain names instead of complex wallet addresses, making it easier and more convenient to send and receive cryptocurrencies. ENS domains are NFTs that can be transferred, bought, and sold. They provide global, censorship-resistant, and portable domain names for various use cases, including hosting websites and decentralized apps. The Ethereum Name Service is made up of a set of smart contracts. These smart contracts are responsible for storing and managing information associated with names.",
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
      {
        name: "Base Registrar",
        addresses: [
          {
            network: "mainnet",
            address: "0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85",
          },
        ],
      },
      {
        name: "ETH Registrar Controller",
        addresses: [
          {
            network: "mainnet",
            address: "0x253553366Da8546fC250F225fe3d25d0C782303b",
          },
        ],
      },
      {
        name: "DNS Registrar",
        addresses: [
          {
            network: "mainnet",
            address: "0xB32cB5677a7C971689228EC835800432B339bA2B",
          },
        ],
      },
      {
        name: "Reverse Registrar",
        addresses: [
          {
            network: "mainnet",
            address: "0xa58E81fe9b61B5c3fE2AFD33CF304c454AbFc7Cb",
          },
        ],
      },
      {
        name: "Name Wrapper",
        addresses: [
          {
            network: "mainnet",
            address: "0xD4416b13d2b3a9aBae7AcD5D6C2BbDBE25686401",
          },
        ],
      },
      {
        name: "Public Resolver",
        addresses: [
          {
            network: "mainnet",
            address: "0x231b0Ee14048e9dCcD1d247744d114a4EB5E8E63",
          },
        ],
      },
    ],
  },
  {
    name: "ERC20",
    logoPath: "Logo_ERC20.png",
    width: 100,
    height: 200,
    description:
      "ERC20 is a standard protocol on the Ethereum blockchain that ensures tokens are interoperable and have consistent functionality. Tokens created using the ERC20 standard can be stored in Ethereum wallets and traded on decentralized exchanges. Many popular cryptocurrencies, such as USDT, LINK, and UNI, are ERC20 tokens.",
    contracts: [
      {
        name: "ARB",
        addresses: [
          {
            network: "mainnet",
            address: "0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1",
          },
          {
            network: "arbitrum",
            address: "0x912ce59144191c1204e64559fe8253a0e49e6548",
          },
        ],
      },
      {
        name: "BAT",
        addresses: [
          {
            network: "mainnet",
            address: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
          },
        ],
      },
      {
        name: "BNB",
        addresses: [
          {
            network: "mainnet",
            address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
          },
        ],
      },
      {
        name: "DAI",
        addresses: [
          {
            network: "mainnet",
            address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          },
          {
            network: "arbitrum",
            address: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
          },
          {
            network: "base",
            address: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
          },
        ],
      },
      {
        name: "DPI",
        addresses: [
          {
            network: "mainnet",
            address: "0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b",
          },
          {
            network: "arbitrum",
            address: "0x9737c658272e66faad39d7ad337789ee6d54f500",
          },
        ],
      },
      {
        name: "DYDX",
        addresses: [
          {
            network: "mainnet",
            address: "0x92d6c1e31e14520e676a687f0a93788b716beff5",
          },
        ],
      },
      {
        name: "ENS",
        addresses: [
          {
            network: "mainnet",
            address: "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
          },
        ],
      },
      {
        name: "GRT",
        addresses: [
          {
            network: "mainnet",
            address: "0xc944e90c64b2c07662a292be6244bdf05cda44a7",
          },
          {
            network: "arbitrum",
            address: "0x9623063377ad1b27544c965ccd7342f7ea7e88c7",
          },
        ],
      },
      {
        name: "GTC",
        addresses: [
          {
            network: "mainnet",
            address: "0xde30da39c46104798bb5aa3fe8b9e0e1f348163f",
          },
        ],
      },
      {
        name: "KNC",
        addresses: [
          {
            network: "mainnet",
            address: "0xdd974D5C2e2928deA5F71b9825b8b646686BD200",
          },
        ],
      },
      {
        name: "LDO",
        addresses: [
          {
            network: "mainnet",
            address: "0x5a98fcbea516cf06857215779fd812ca3bef1b32",
          },
          {
            network: "arbitrum",
            address: "0x13ad51ed4f1b7e9dc168d8a00cb3f4ddd85efa60",
          },
        ],
      },
      {
        name: "LINK",
        addresses: [
          {
            network: "mainnet",
            address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
          },
          {
            network: "arbitrum",
            address: "0xf97f4df75117a78c1a5a0dbb814af92458539fb4",
          },
        ],
      },
      {
        name: "MKR",
        addresses: [
          {
            network: "mainnet",
            address: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
          },
        ],
      },
      {
        name: "NEAR",
        addresses: [
          {
            network: "mainnet",
            address: "0x85F17Cf997934a597031b2E18a9aB6ebD4B9f6a4",
          },
        ],
      },
      {
        name: "OCEAN",
        addresses: [
          {
            network: "mainnet",
            address: "0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
          },
        ],
      },
      {
        name: "OP",
        addresses: [
          {
            network: "optimism",
            address: "0x4200000000000000000000000000000000000042",
          },
        ],
      },
      {
        name: "PEPE",
        addresses: [
          {
            network: "mainnet",
            address: "0x6982508145454ce325ddbe47a25d4ec3d2311933",
          },
          {
            network: "arbitrum",
            address: "0x25d887ce7a35172c62febfd67a1856f20faebb00",
          },
        ],
      },
      {
        name: "SHIB",
        addresses: [
          {
            network: "mainnet",
            address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
          },
        ],
      },
      {
        name: "SNX",
        addresses: [
          {
            network: "mainnet",
            address: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
          },
        ],
      },
      {
        name: "stETH",
        addresses: [
          {
            network: "mainnet",
            address: "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
          },
        ],
      },
      {
        name: "TONCOIN",
        addresses: [
          {
            network: "mainnet",
            address: "0x582d872A1B094FC48F5DE31D3B73F2D9bE47def1",
          },
        ],
      },
      {
        name: "TUSD",
        addresses: [
          {
            network: "mainnet",
            address: "0x0000000000085d4780B73119b644AE5ecd22b376",
          },
          {
            network: "arbitrum",
            address: "0x4d15a3a2286d883af0aa1b3f21367843fac63e07",
          },
        ],
      },
      {
        name: "UMA",
        addresses: [
          {
            network: "mainnet",
            address: "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
          },
          {
            network: "arbitrum",
            address: "0xd693ec944a85eeca4247ec1c3b130dca9b0c3b22",
          },
        ],
      },
      {
        name: "UNI",
        addresses: [
          {
            network: "mainnet",
            address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
          },
          {
            network: "arbitrum",
            address: "0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0",
          },
        ],
      },
      {
        name: "USDC",
        addresses: [
          {
            network: "mainnet",
            address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          },
          {
            network: "arbitrum",
            address: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
          },
          {
            network: "optimism",
            address: "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
          },
          {
            network: "base",
            address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
          },
        ],
      },
      {
        name: "USDC.e",
        addresses: [
          {
            network: "arbitrum",
            address: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
          },
        ],
      },
      {
        name: "USDT",
        addresses: [
          {
            network: "mainnet",
            address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          },
          {
            network: "arbitrum",
            address: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
          },
        ],
      },
      {
        name: "WBTC",
        addresses: [
          {
            network: "mainnet",
            address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
          },
          {
            network: "arbitrum",
            address: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
          },
        ],
      },
      {
        name: "weETH",
        addresses: [
          {
            network: "mainnet",
            address: "0xcd5fe23c85820f7b72d0926fc9b05b43e359b7ee",
          },
          {
            network: "arbitrum",
            address: "0x35751007a407ca6feffe80b3cb397736d2cf4dbe",
          },
        ],
      },
      {
        name: "WETH",
        addresses: [
          {
            network: "mainnet",
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          },
        ],
      },
      {
        name: "ZRX",
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
        addresses: [
          {
            network: "mainnet",
            address: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
          },
        ],
      },
      {
        name: "Factory V3",
        addresses: [
          {
            network: "mainnet",
            address: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
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
