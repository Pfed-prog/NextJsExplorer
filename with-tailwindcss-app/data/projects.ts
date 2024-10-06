const ALL_PROJECT_DATA = [
  {
    name: "Aave",
    logoPath: "Logo_Aave.png",
    description:
      "Aave is a decentralized financial platform based on the Ethereum blockchain technology, which provides lending, depositing, and cryptocurrency exchange services. The platform is created for users to earn income, earn interest on their deposits and loans, as well as invest in cryptocurrencies. In Aave, users can perform operations with various cryptocurrencies such as Ethereum, USDC, Tether, and many more. All operations on the platform are automated thanks to the smart contracts. Aave is actively developing and improving, including new features such as providing online voting for decision-making and planning future platform enhancements.",
    contracts: [
      {
        name: "Lending Pool V1",
        addresses: [
          {
            network: "mainnet",
            address: "0x398eC7346DcD622eDc5ae82352F02bE94C62d119",
          },
        ],
      },
      {
        name: "Lending Pool Addresses Provider V1",
        addresses: [
          {
            network: "mainnet",
            address: "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
          },
        ],
      },
      {
        name: "Lending Pool Core V1",
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
    name: "Aerodrome Finance",
    logoPath: "aerodromeSymbol.png",
    description: "",
    contracts: [
      {
        name: "CL100-WETH/USDC Pool",
        addresses: [
          {
            network: "base",
            address: "0xb2cc224c1c9feE385f8ad6a55b4d94E92359DC59",
          },
        ],
      },
      {
        name: "CL100-WETH/USDC Gauge",
        addresses: [
          {
            network: "base",
            address: "0xF33a96b5932D9E9B9A0eDA447AbD8C9d48d2e0c8",
          },
        ],
      },
      {
        name: "CL100-WETH/cbBTC Pool",
        addresses: [
          {
            network: "base",
            address: "0x70aCDF2Ad0bf2402C957154f944c19Ef4e1cbAE1",
          },
        ],
      },
      {
        name: "CL100-WETH/cbBTC Gauge",
        addresses: [
          {
            network: "base",
            address: "0x41b2126661C673C2beDd208cC72E85DC51a5320a",
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
        name: "cDAI",
        addresses: [
          {
            network: "mainnet",
            address: "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643",
          },
        ],
      },
      {
        name: "cETH",
        addresses: [
          {
            network: "mainnet",
            address: "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5",
          },
        ],
      },
      {
        name: "cUSDC",
        addresses: [
          {
            network: "mainnet",
            address: "0xc3d688B66703497DAA19211EEdff47f25384cdc3",
          },
          {
            network: "optimism",
            address: "0x2e44e174f7D53F0212823acC11C01A11d58c5bCB",
          },
          {
            network: "base",
            address: "0xb125E6687d4313864e53df431d5425969c15Eb2F",
          },
        ],
      },
      {
        name: "cUSDT",
        addresses: [
          {
            network: "mainnet",
            address: "0x3Afdc9BCA9213A35503b077a6072F3D0d5AB0840",
          },
          {
            network: "optimism",
            address: "0x995E394b8B2437aC8Ce61Ee0bC610D617962B214",
          },
        ],
      },
      {
        name: "cWETH",
        addresses: [
          {
            network: "mainnet",
            address: "0xA17581A9E3356d9A858b789D68B4d866e593aE94",
          },
          {
            network: "optimism",
            address: "0xE36A30D249f7761327fd973001A32010b521b6Fd",
          },
          {
            network: "base",
            address: "0x46e6b214b524310239732D51387075E0e70970bf",
          },
        ],
      },
      {
        name: "Governance",
        addresses: [
          {
            network: "mainnet",
            address: "0xc0da01a04c3f3e0be433606045bb7017a7323e38",
          },
        ],
      },
      {
        name: "USDbC",
        addresses: [
          {
            network: "base",
            address: "0x9c4ec768c28520B50860ea7a15bd7213a9fF58bf",
          },
        ],
      },
      {
        name: "wstETH",
        addresses: [
          {
            network: "mainnet",
            address: "0x3D0bb1ccaB520A66e607822fC55BC921738fAFE3",
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
        name: "AERO",
        addresses: [
          {
            network: "base",
            address: "0x940181a94a35a4569e4529a3cdfb74e38fd98631",
          },
        ],
      },
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
        name: "ANT",
        addresses: [
          {
            network: "mainnet",
            address: "0xa117000000f279d81a1d3cc75430faa017fa5a2e",
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
        name: "BRETT",
        addresses: [
          {
            network: "base",
            address: "0x532f27101965dd16442e59d40670faf5ebb142e4",
          },
        ],
      },
      {
        name: "BCT",
        addresses: [
          {
            network: "base",
            address: "0x576bca23dcb6d94ff8e537d88b0d3e1bead444a2",
          },
          {
            network: "polygon",
            address: "0x2f800db0fdb5223b3c3f354886d907a671414a7f",
          },
        ],
      },
      {
        name: "cbBTC",
        addresses: [
          {
            network: "base",
            address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
          },
        ],
      },
      {
        name: "CVC",
        addresses: [
          {
            network: "mainnet",
            address: "0x41e5560054824ea6b0732e656e3ad64e20e94e45",
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
        name: "DAI+",
        addresses: [
          {
            network: "base",
            address: "0x65a2508C429a6078a7BC2f7dF81aB575BD9D9275",
          },
        ],
      },
      {
        name: "DEGEN",
        addresses: [
          {
            network: "base",
            address: "0x4ed4e862860bed51a9570b96d89af5e1b0efefed",
          },
        ],
      },
      {
        name: "DOLA",
        addresses: [
          {
            network: "base",
            address: "0x4621b7A9c75199271F773Ebd9A499dbd165c3191",
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
        name: "EIGEN",
        addresses: [
          {
            network: "mainnet",
            address: "0xec53bF9167f50cDEB3Ae105f56099aaaB9061F83",
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
        name: "EURC",
        addresses: [
          {
            network: "base",
            address: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
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
        name: "MOG",
        addresses: [
          {
            network: "mainnet",
            address: "0xaaeE1A9723aaDB7afA2810263653A34bA2C21C7a",
          },
          {
            network: "base",
            address: "0x2Da56AcB9Ea78330f947bD57C54119Debda7AF71",
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
        name: "OVN",
        addresses: [
          {
            network: "base",
            address: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
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
        name: "superOETHb",
        addresses: [
          {
            network: "base",
            address: "0xDBFeFD2e8460a6Ee4955A68582F85708BAEA60A3",
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
        name: "USDC+",
        addresses: [
          {
            network: "base",
            address: "0x85483696Cc9970Ad9EdD786b2C5ef735F38D156f",
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
          {
            network: "base",
            address: "0xfde4c96c8593536e31f229ea8f37b2ada2699bb2",
          },
        ],
      },
      {
        name: "USD+",
        addresses: [
          {
            network: "base",
            address: "0xB79DD08EA68A908A97220C76d19A6aA9cBDE4376",
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
          {
            network: "base",
            address: "0x4200000000000000000000000000000000000006",
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
        addresses: [
          {
            network: "mainnet",
            address: "0xf55186CC537E7067EA616F2aaE007b4427a120C8",
          },
        ],
      },
      {
        name: "ETH20SMACO",
        addresses: [
          {
            network: "mainnet",
            address: "0x9ea463Ec4cE9E9E5bc9cFd0187C4Ac3a70DD951D",
          },
        ],
      },
      {
        name: "ETH50SMACO",
        addresses: [
          {
            network: "mainnet",
            address: "0xa360F2aF3F957906468c0FD7526391AeD08aE3DB",
          },
        ],
      },
      {
        name: "ETH12EMACO",
        addresses: [
          {
            network: "mainnet",
            address: "0x2c5a9980B41861D91D30d0E0271d1c093452DcA5",
          },
        ],
      },
      {
        name: "ETH26EMACO",
        addresses: [
          {
            network: "mainnet",
            address: "0x614857c755739354d68ae0abd53849cf45d6a41d",
          },
        ],
      },
      {
        name: "BTCETH5050",
        addresses: [
          {
            network: "mainnet",
            address: "0xc06aEc5191bE16b94FfC97B6Fc01393527367365",
          },
        ],
      },
      {
        name: "BTCETH7525",
        addresses: [
          {
            network: "mainnet",
            address: "0xA35Fc5019C4dc509394Bd4d74591a0bF8852c195",
          },
        ],
      },
      {
        name: "ETHBTC7525",
        addresses: [
          {
            network: "mainnet",
            address: "0xA6c040045d962e4B8eFa00954c7d23CCd0a2b8AD",
          },
        ],
      },
      {
        name: "ETHBTCRSI",
        addresses: [
          {
            network: "mainnet",
            address: "0xbf70A33A13fBe8D0106Df321Da0Cf654d2E9Ab50",
          },
        ],
      },
      {
        name: "RebalancingSetIssuanceModule",
        addresses: [
          {
            network: "mainnet",
            address: "0xceda8318522d348f1d1aca48b24629b8fbf09020",
          },
        ],
      },
      {
        name: "TransferProxy",
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
        name: "ETH-USDT Pair V2",
        addresses: [
          {
            network: "mainnet",
            address: "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852",
          },
        ],
      },
      {
        name: "Router V2",
        addresses: [
          {
            network: "mainnet",
            address: "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a",
          },
        ],
      },
      {
        name: "UniswapV3Factory",
        addresses: [
          {
            network: "mainnet",
            address: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
          },
          {
            network: "optimism",
            address: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
          },
          {
            network: "base",
            address: "0x33128a8fC17869897dcE68Ed026d694621f6FDfD",
          },
          {
            network: "zora",
            address: "0x7145F8aeef1f6510E92164038E1B6F8cB2c42Cbb",
          },
        ],
      },
      {
        name: "Multicall",
        addresses: [
          {
            network: "optimism",
            address: "0x1F98415757620B543A52E61c46B32eB19261F984",
          },
          {
            network: "base",
            address: "0x091e99cb1C49331a94dD62755D168E941AbD0693",
          },
        ],
      },
      {
        name: "ProxyAdmin",
        addresses: [
          {
            network: "optimism",
            address: "0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2",
          },
          {
            network: "base",
            address: "0x3334d83e224aF5ef9C2E7DDA7c7C98Efd9621fA9",
          },
        ],
      },
      {
        name: "TickLens",
        addresses: [
          {
            network: "optimism",
            address: "0xbfd8137f7d1516D3ea5cA83523914859ec47F573",
          },
          {
            network: "base",
            address: "0x0CdeE061c75D43c82520eD998C23ac2991c9ac6d",
          },
        ],
      },
      {
        name: "Quoter",
        addresses: [
          {
            network: "optimism",
            address: "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6",
          },
        ],
      },
      {
        name: "SwapRouter",
        addresses: [
          {
            network: "optimism",
            address: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
          },
        ],
      },
      {
        name: "NFTDescriptor",
        addresses: [
          {
            network: "optimism",
            address: "0x42B24A95702b9986e82d421cC3568932790A48Ec",
          },
          {
            network: "base",
            address: "0xF9d1077fd35670d4ACbD27af82652a8d84577d9F",
          },
        ],
      },
      {
        name: "NonfungibleTokenPositionDescriptor",
        addresses: [
          {
            network: "optimism",
            address: "0x91ae842A5Ffd8d12023116943e72A606179294f3",
          },
          {
            network: "base",
            address: "0x4f225937EDc33EFD6109c4ceF7b560B2D6401009",
          },
        ],
      },
      {
        name: "TransparentUpgradeableProxy",
        addresses: [
          {
            network: "optimism",
            address: "0xEe6A57eC80ea46401049E92587E52f5Ec1c24785",
          },
          {
            network: "base",
            address: "0x4615C383F85D0a2BbED973d83ccecf5CB7121463",
          },
        ],
      },
      {
        name: "NonfungiblePositionManager",
        addresses: [
          {
            network: "optimism",
            address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
          },
          {
            network: "base",
            address: "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1",
          },
        ],
      },
      {
        name: "V3Migrator",
        addresses: [
          {
            network: "base",
            address: "0x23cF10b1ee3AdfCA73B0eF17C07F7577e7ACd2d7",
          },
        ],
      },
      {
        name: "QuoterV2",
        addresses: [
          {
            network: "optimism",
            address: "0x61fFE014bA17989E743c5F6cB21bF9697530B21e",
          },
          {
            network: "base",
            address: "0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a",
          },
        ],
      },
      {
        name: "SwapRouter02",
        addresses: [
          {
            network: "optimism",
            address: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
          },
          {
            network: "base",
            address: "0x2626664c2603336E57B271c5C0b26F421741e481",
          },
        ],
      },
      {
        name: "Permit2",
        addresses: [
          {
            network: "optimism",
            address: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
          },
          {
            network: "base",
            address: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
          },
        ],
      },
      {
        name: "UniversalRouter",
        addresses: [
          {
            network: "optimism",
            address: "0xCb1355ff08Ab38bBCE60111F1bb2B784bE25D7e8",
          },
          {
            network: "base",
            address: "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD",
          },
        ],
      },
      {
        name: "v3StakerAddress",
        addresses: [
          {
            network: "optimism",
            address: "0xe34139463bA50bD61336E0c446Bd8C0867c6fE65",
          },
          {
            network: "base",
            address: "0x42bE4D6527829FeFA1493e1fb9F3676d2425C3C1",
          },
        ],
      },
    ],
  },
  {
    name: "Overnight Finance",
    logoPath: "OVN.avif",
    description: "",
    contracts: [
      {
        name: "USD+",
        addresses: [
          {
            network: "base",
            address: "0xB79DD08EA68A908A97220C76d19A6aA9cBDE4376",
          },
        ],
      },
      {
        name: "USD+: Exchange",
        addresses: [
          {
            network: "base",
            address: "0x7cb1B38591021309C64f451859d79312d8Ca2789",
          },
        ],
      },
      {
        name: "USD+: Mark2Market",
        addresses: [
          {
            network: "base",
            address: "0x1F4947Cd5A5c058DD5EA6Fd1CCd5c311aDa9E6Fb",
          },
        ],
      },
      {
        name: "USD+: PortfolioManager",
        addresses: [
          {
            network: "base",
            address: "0x27B12F3282F1d02682D7D1AD30E45e818B78f7B8",
          },
        ],
      },
      {
        name: "USD+: wUSD+",
        addresses: [
          {
            network: "base",
            address: "0xd95ca61CE9aAF2143E81Ef5462C0c2325172E028",
          },
        ],
      },
      {
        name: "USD+: Oracle by RedStone",
        addresses: [
          {
            network: "base",
            address: "0xd9a66Ff1D660aD943F48e9c606D09eA672f312E8",
          },
        ],
      },
      {
        name: "DAI+",
        addresses: [
          {
            network: "base",
            address: "0x65a2508C429a6078a7BC2f7dF81aB575BD9D9275",
          },
        ],
      },
      {
        name: "DAI+: Exchange",
        addresses: [
          {
            network: "base",
            address: "0xF7d693CE960e70721F0353F967360046Ba7d4eFA",
          },
        ],
      },
      {
        name: "DAI+: Mark2Market",
        addresses: [
          {
            network: "base",
            address: "0x7a62315519A39d562c1E49EB35b300d2E6742f86",
          },
        ],
      },
      {
        name: "DAI+: PortfolioManager",
        addresses: [
          {
            network: "base",
            address: "0xb9619DB586972CC0754a22e1697a72Bacf30aca9",
          },
        ],
      },
      {
        name: "USDC+",
        addresses: [
          {
            network: "base",
            address: "0x85483696Cc9970Ad9EdD786b2C5ef735F38D156f",
          },
        ],
      },
      {
        name: "USDC+: Exchange",
        addresses: [
          {
            network: "base",
            address: "0x868D69875BF274E7Bd3d8b97b1Acd89dbdeb67af",
          },
        ],
      },
      {
        name: "USDC+: Mark2Market",
        addresses: [
          {
            network: "base",
            address: "0x96aa0bBe4D0dea7C4AF4739c53dBFA0300262253",
          },
        ],
      },
      {
        name: "USDC+: PortfolioManager",
        addresses: [
          {
            network: "base",
            address: "0x619A500F1Ae543823B1c33dB63De99F83aC057e4",
          },
        ],
      },
    ],
  },
  {
    name: "PancakeSwap",
    logoPath: "PancakeSwapLogo.png",
    description: "",
    contracts: [
      {
        name: "PancakeV3Factory",
        addresses: [
          {
            network: "mainnet",
            address: "0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865",
          },
          {
            network: "base",
            address: "0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865",
          },
        ],
      },
      {
        name: "PancakeV3PoolDeployer",
        addresses: [
          {
            network: "mainnet",
            address: "0x41ff9AA7e16B8B1a8a8dc4f0eFacd93D02d071c9",
          },
          {
            network: "base",
            address: "0x41ff9AA7e16B8B1a8a8dc4f0eFacd93D02d071c9",
          },
        ],
      },
      {
        name: "SwapRouter (v3)",
        addresses: [
          {
            network: "mainnet",
            address: "0x1b81D678ffb9C0263b24A97847620C99d213eB14",
          },
          {
            network: "base",
            address: "0x1b81D678ffb9C0263b24A97847620C99d213eB14",
          },
        ],
      },
      {
        name: "V3Migrator",
        addresses: [
          {
            network: "mainnet",
            address: "0xbC203d7f83677c7ed3F7acEc959963E7F4ECC5C2",
          },
          {
            network: "base",
            address: "0xbC203d7f83677c7ed3F7acEc959963E7F4ECC5C2",
          },
        ],
      },
      {
        name: "NonfungiblePositionManager",
        addresses: [
          {
            network: "mainnet",
            address: "0x46A15B0b27311cedF172AB29E4f4766fbE7F4364",
          },
          {
            network: "base",
            address: "0x46A15B0b27311cedF172AB29E4f4766fbE7F4364",
          },
        ],
      },
      {
        name: "QuoterV2",
        addresses: [
          {
            network: "mainnet",
            address: "0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997",
          },
          {
            network: "base",
            address: "0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997",
          },
        ],
      },
      {
        name: "TickLens",
        addresses: [
          {
            network: "mainnet",
            address: "0x9a489505a00cE272eAa5e07Dba6491314CaE3796",
          },
          {
            network: "base",
            address: "0x9a489505a00cE272eAa5e07Dba6491314CaE3796",
          },
        ],
      },
      {
        name: "PancakeInterfaceMulticall",
        addresses: [
          {
            network: "mainnet",
            address: "0xac1cE734566f390A94b00eb9bf561c2625BF44ea",
          },
          {
            network: "base",
            address: "0xac1cE734566f390A94b00eb9bf561c2625BF44ea",
          },
        ],
      },
      {
        name: "MixedRouteQuoterV1",
        addresses: [
          {
            network: "mainnet",
            address: "0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86",
          },
          {
            network: "base",
            address: "0x4c650FB471fe4e0f476fD3437C3411B1122c4e3B",
          },
        ],
      },
      {
        name: "TokenValidator",
        addresses: [
          {
            network: "mainnet",
            address: "0x864ED564875BdDD6F421e226494a0E7c071C06f8",
          },
          {
            network: "base",
            address: "0x556B9306565093C855AEA9AE92A594704c2Cd59e",
          },
        ],
      },
      {
        name: "Smart Router (v3, v2, stable)",
        addresses: [
          {
            network: "mainnet",
            address: "0x13f4EA83D0bd40E75C8222255bc855a974568Dd4",
          },
          {
            network: "base",
            address: "0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86",
          },
        ],
      },
      {
        name: "MasterchefV3",
        addresses: [
          {
            network: "mainnet",
            address: "0x556B9306565093C855AEA9AE92A594704c2Cd59e",
          },
          {
            network: "base",
            address: "0xC6A2Db661D5a5690172d8eB0a7DEA2d3008665A3",
          },
        ],
      },
    ],
  },
  {
    name: "ERC721",
    logoPath: "erc721.png",
    description: "",
    contracts: [
      {
        name: "BoredApeYachtClub",
        addresses: [
          {
            network: "mainnet",
            address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
          },
        ],
      },
      {
        name: "Dryads",
        addresses: [
          {
            network: "base",
            address: "0x6d65115def07d25841891d0679189f2c42032f48",
          },
        ],
      },
      {
        name: "Pudgy Penguins",
        addresses: [
          {
            network: "mainnet",
            address: "0xbd3531da5cf5857e7cfaa92426877b022e612cf8",
          },
        ],
      },
    ],
  },
  {
    name: "ERC1155",
    logoPath: "erc1155.png",
    description: "",
    contracts: [
      {
        name: "Fruit",
        addresses: [
          {
            network: "base",
            address: "0x2b848882ec6a302e029dfb87ba000fbb6c80eda8",
          },
        ],
      },
      {
        name: "Skies",
        addresses: [
          {
            network: "base",
            address: "0xdcb7bca1cd8ed7ac1119bf2eb883826bdf0e0ffc",
          },
          {
            network: "polygon",
            address: "0x4ca83f011e2fe5a8b09131d002e10abcf2e44980",
          },
        ],
      },
      {
        name: "Lil Penguins",
        addresses: [
          {
            network: "base",
            address: "0xb855a154e16f257fa392695512a7890dc70f5589",
          },
          {
            network: "polygon",
            address: "0xceef1e7aafe1578c08faf49f432f894ed4a9328f",
          },
        ],
      },
      {
        name: "NameWrapper",
        addresses: [
          {
            network: "mainnet",
            address: "0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401",
          },
        ],
      },
    ],
  },
];

export default ALL_PROJECT_DATA;
