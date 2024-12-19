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
        name: "ACLManager V3",
        addresses: [
          {
            network: "mainnet",
            address: "0xc2aaCf6553D20d1e9d78E365AAba8032af9c85b0",
          },
          {
            network: "optimism",
            address: "0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B",
          },
          {
            network: "base",
            address: "0x43955b0899Ab7232E3a454cf84AedD22Ad46FD33",
          },
        ],
      },
      {
        name: "ACLManager Lido V3",
        addresses: [
          {
            network: "mainnet",
            address: "0x013E2C7567b6231e865BB9273F8c7656103611c0",
          },
        ],
      },
      {
        name: "ACLManager EtherFi V3",
        addresses: [
          {
            network: "mainnet",
            address: "0x3cE8E2eb6501d4705477643E96881B1bef6A2DB3",
          },
        ],
      },
      {
        name: "Pool V3",
        addresses: [
          {
            network: "mainnet",
            address: "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2",
          },
          {
            network: "optimism",
            address: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
          },
          {
            network: "base",
            address: "0xA238Dd80C259a72e81d7e4664a9801593F98d1c5",
          },
        ],
      },
      {
        name: "Pool Lido V3",
        addresses: [
          {
            network: "mainnet",
            address: "​​0x4e033931ad43597d96D6bcc25c280717730B58B1",
          },
        ],
      },
      {
        name: "Pool EtherFi V3",
        addresses: [
          {
            network: "mainnet",
            address: "​​0x0AA97c284e98396202b6A04024F5E2c65026F3c0",
          },
        ],
      },
      {
        name: "PoolConfigurator V3",
        addresses: [
          {
            network: "mainnet",
            address: "0x64b761D848206f447Fe2dd461b0c635Ec39EbB27",
          },
          {
            network: "optimism",
            address: "0x8145eddDf43f50276641b55bd3AD95944510021E",
          },
          {
            network: "base",
            address: "0x5731a04B1E775f0fdd454Bf70f3335886e9A96be",
          },
        ],
      },
      {
        name: "PoolConfigurator Lido V3",
        addresses: [
          {
            network: "mainnet",
            address: "​​0x342631c6CeFC9cfbf97b2fe4aa242a236e1fd517",
          },
        ],
      },
      {
        name: "PoolConfigurator EtherFi V3",
        addresses: [
          {
            network: "mainnet",
            address: "0x8438F4D29D895d75C86BDC25360c25eF0607E65d",
          },
        ],
      },
      {
        name: "​Incentives V3",
        addresses: [
          {
            network: "mainnet",
            address: "0x8164Cc65827dcFe994AB23944CBC90e0aa80bFcb",
          },
          {
            network: "optimism",
            address: "0x929EC64c34a17401F460460D4B9390518E5B473e",
          },
          {
            network: "base",
            address: "0xf9cc4F0D883F1a1eb2c253bdb46c254Ca51E1F44",
          },
        ],
      },
      {
        name: "PullRewardsTransferStrategy V3",
        addresses: [
          {
            network: "optimism",
            address: "0x9aE6d130Fa8a44C8f1487dD767Ab6bA33ca2b498",
          },
        ],
      },
      {
        name: "PoolAddressesProvider V3",
        addresses: [
          {
            network: "mainnet",
            address: "0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e",
          },
          {
            network: "optimism",
            address: "0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb",
          },
          {
            network: "base",
            address: "0xe20fCBdBfFC4Dd138cE8b2E6FBb6CB49777ad64D",
          },
        ],
      },
      {
        name: "PoolAddressesProvider Lido V3",
        addresses: [
          {
            network: "mainnet",
            address: "​​0xcfBf336fe147D643B9Cb705648500e101504B16d",
          },
        ],
      },
      {
        name: "PoolAddressesProvider EtherFi V3",
        addresses: [
          {
            network: "mainnet",
            address: "0xeBa440B438Ad808101d1c451C1C5322c90BEFCdA",
          },
        ],
      },
      {
        name: "PoolAddressesProviderRegistry V3",
        addresses: [
          {
            network: "mainnet",
            address: "0xbaA999AC55EAce41CcAE355c77809e68Bb345170",
          },
          {
            network: "optimism",
            address: "0x770ef9f4fe897e59daCc474EF11238303F9552b6",
          },
          {
            network: "base",
            address: "0x2f6571d3Eb9a4e350C68C36bCD2afe39530078E2",
          },
        ],
      },
      {
        name: "PoolAddressesProviderRegistry Lido V3",
        addresses: [
          {
            network: "mainnet",
            address: "0xC6cAB8D39D93DC0Bd5986E7Ce5Bb956E30103A43",
          },
        ],
      },
      {
        name: "PoolAddressesProviderRegistry EtherFi V3",
        addresses: [
          {
            network: "mainnet",
            address: "0xbaA999AC55EAce41CcAE355c77809e68Bb345170",
          },
        ],
      },
      {
        name: "PoolDataProvider​  V3",
        addresses: [
          {
            network: "mainnet",
            address: "0x41393e5e337606dc3821075Af65AeE84D7688CBD",
          },
          {
            network: "optimism",
            address: "0x7F23D86Ee20D869112572136221e173428DD740B",
          },
          {
            network: "base",
            address: "0xd82a47fdebB5bf5329b09441C3DaB4b5df2153Ad",
          },
        ],
      },
      {
        name: "PoolDataProvider​ Lido V3",
        addresses: [
          {
            network: "mainnet",
            address: "0x08795CFE08C7a81dCDFf482BbAAF474B240f31cD",
          },
        ],
      },
      {
        name: "PoolDataProvider​ EtherFi V3",
        addresses: [
          {
            network: "mainnet",
            address: "0x8Cb4b66f7B13F2Ae4D3c91338fC007dbF8C14208",
          },
        ],
      },
      {
        name: "L2Encoder",
        addresses: [
          {
            network: "optimism",
            address: "0x9abADECD08572e0eA5aF4d47A9C7984a5AA503dC",
          },
          {
            network: "base",
            address: "0x39e97c588B2907Fb67F44fea256Ae3BA064207C5",
          },
        ],
      },
      {
        name: "​UiIncentiveDataProviderV3",
        addresses: [
          {
            network: "mainnet",
            address: "0x5a40cDe2b76Da2beD545efB3ae15708eE56aAF9c",
          },
          {
            network: "optimism",
            address: "0xc0179321f0825c3e0F59Fe7Ca4E40557b97797a3",
          },
          {
            network: "base",
            address: "0x5c5228aC8BC1528482514aF3e27E692495148717",
          },
        ],
      },
      {
        name: "UiPoolDataProviderV3",
        addresses: [
          {
            network: "mainnet",
            address: "0x194324C9Af7f56E22F1614dD82E18621cb9238E7",
          },
          {
            network: "optimism",
            address: "0x86b0521f92a554057e54B93098BA2A6Aaa2F4ACB",
          },
          {
            network: "base",
            address: "0xE92cd6164CE7DC68e740765BC1f2a091B6CBc3e4",
          },
        ],
      },
      {
        name: "WrappedTokenGateway V3",
        addresses: [
          {
            network: "mainnet",
            address: "0xA434D495249abE33E031Fe71a969B81f3c07950D",
          },
          {
            network: "optimism",
            address: "0x729b3EA8C005AbC58c9150fb57Ec161296F06766",
          },
          {
            network: "base",
            address: "0x60eE8b61a13c67d0191c851BEC8F0bc850160710",
          },
        ],
      },
      {
        name: "WrappedTokenGateway Lido V3",
        addresses: [
          {
            network: "mainnet",
            address: "0x0B8C700917a6991FEa7198dDFC80bc8962b5055D",
          },
        ],
      },
      {
        name: "WrappedTokenGateway EtherFi V3",
        addresses: [
          {
            network: "mainnet",
            address: "​0xAB911dFB2bB9e264EE836F30D3367618f8Aef965",
          },
        ],
      },
      {
        name: "WalletBalanceProvider V3",
        addresses: [
          {
            network: "mainnet",
            address: "0xC7be5307ba715ce89b152f3Df0658295b3dbA8E2",
          },
          {
            network: "optimism",
            address: "0xBc790382B3686abffE4be14A030A96aC6154023a",
          },
          {
            network: "base",
            address: "0x5779b29B0a34577d927E8D511B595ef9abbFAE82",
          },
        ],
      },
      {
        name: "AaveOracle V3",
        addresses: [
          {
            network: "mainnet",
            address: "0x54586bE62E3c3580375aE3723C145253060Ca0C2",
          },
          {
            network: "optimism",
            address: "0xD81eb3728a631871a7eBBaD631b5f424909f0c77",
          },
          {
            network: "base",
            address: "0x2Cc0Fc26eD4563A5ce5e8bdcfe1A2878676Ae156",
          },
        ],
      },
      {
        name: "AaveOracle Lido V3",
        addresses: [
          {
            network: "mainnet",
            address: "​​0xE3C061981870C0C7b1f3C4F4bB36B95f1F260BE6",
          },
        ],
      },
      {
        name: "AaveOracle EtherFi V3",
        addresses: [
          {
            network: "mainnet",
            address: "​​0x43b64f28A678944E0655404B0B98E443851cC34F",
          },
        ],
      },
      {
        name: "Treasury V3",
        addresses: [
          {
            network: "mainnet",
            address: "0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c",
          },
          {
            network: "optimism",
            address: "0xB2289E329D2F85F1eD31Adbb30eA345278F21bcf",
          },
          {
            network: "base",
            address: "0xBA9424d650A4F5c80a0dA641254d1AcCE2A37057",
          },
        ],
      },
      {
        name: "TreasuryController V3",
        addresses: [
          {
            network: "mainnet",
            address: "0x3d569673dAa0575c936c7c67c4E6AedA69CC630C",
          },
          {
            network: "optimism",
            address: "0xA77E4A084d7d4f064E326C0F6c0aCefd47A5Cb21",
          },
        ],
      },
      {
        name: "LiquiditySwitchAdapter V3",
        addresses: [
          {
            network: "mainnet",
            address: "0xADC0A53095A0af87F3aa29FE0715B5c28016364e",
          },
          {
            network: "optimism",
            address: "0x830C5A67a0C95D69dA5fb7801Ac1773c6fB53857",
          },
          {
            network: "base",
            address: "0x2E549104c516b8657A7D888494DfbAbD7C70b464",
          },
        ],
      },
      {
        name: "LiquiditySwitchAdapter Lido V3",
        addresses: [
          {
            network: "mainnet",
            address: "​0xD0887AA7fEBC8962c622493646195e7c76D94fCE",
          },
        ],
      },
      {
        name: "LiquiditySwitchAdapter EtherFi V3",
        addresses: [
          {
            network: "mainnet",
            address: "​0xB04427eFdd15b0EC233400d2F7f7E4fd0291C285",
          },
        ],
      },
      {
        name: "RepayWithCollateralAdapter V3",
        addresses: [
          {
            network: "mainnet",
            address: "0x35bb522b102326ea3F1141661dF4626C87000e3E",
          },
          {
            network: "optimism",
            address: "0x5d4D4007A4c6336550DdAa2a7c0d5e7972eebd16",
          },
          {
            network: "base",
            address: "0x63dfa7c09Dc2Ff4030d6B8Dc2ce6262BF898C8A4",
          },
        ],
      },
      {
        name: "RepayWithCollateralAdapter Lido V3",
        addresses: [
          {
            network: "mainnet",
            address: "​0x66E1aBdb06e7363a618D65a910c540dfED23754f",
          },
        ],
      },
      {
        name: "RepayWithCollateralAdapter EtherFi V3",
        addresses: [
          {
            network: "mainnet",
            address: "0x23b282c49C88d9161aae14b5eD777B976A5Ae65D",
          },
        ],
      },
      {
        name: "DebtSwitchAdapter V3",
        addresses: [
          {
            network: "mainnet",
            address: "0xd7852E139a7097E119623de0751AE53a61efb442",
          },
          {
            network: "optimism",
            address: "0xE28E2c8d240dd5eBd0adcab86fbD79df7a052034",
          },
          {
            network: "base",
            address: "0xb12e82DF057BF16ecFa89D7D089dc7E5C1Dc057B",
          },
        ],
      },
      {
        name: "WithdrawSwitchAdapter V3",
        addresses: [
          {
            network: "mainnet",
            address: "0x78F8Bd884C3D738B74B420540659c82f392820e0",
          },
          {
            network: "optimism",
            address: "0x78F8Bd884C3D738B74B420540659c82f392820e0",
          },
          {
            network: "base",
            address: "0x5598BbFA2f4fE8151f45bBA0a3edE1b54B51a0a9",
          },
        ],
      },
      {
        name: "WithdrawSwitchAdapter Lido V3",
        addresses: [
          {
            network: "mainnet",
            address: "0x43eDB797834151D041619EEF833Edc784B509dAE",
          },
        ],
      },
      {
        name: "WithdrawSwitchAdapter EtherFi V3",
        addresses: [
          {
            network: "mainnet",
            address: "0x850347E0cF64fd342A3404c1c5DA21Aa0A46c5c6",
          },
        ],
      },
      {
        name: "Migration Contract V3",
        addresses: [
          {
            network: "mainnet",
            address: "0xb748952c7bc638f31775245964707bcc5ddfabfc",
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
    height: 100,
    width: 100,
    contracts: [
      {
        name: "ArtProxy",
        addresses: [
          {
            network: "base",
            address: "0xE9992487b2EE03b7a91241695A58E0ef3654643E",
          },
        ],
      },
      {
        name: "RewardsDistributor",
        addresses: [
          {
            network: "base",
            address: "0x227f65131A261548b057215bB1D5Ab2997964C7d",
          },
        ],
      },
      {
        name: "FactoryRegistry",
        addresses: [
          {
            network: "base",
            address: "0x5C3F18F06CC09CA1910767A34a20F771039E37C0",
          },
        ],
      },
      {
        name: "Forwarder",
        addresses: [
          {
            network: "base",
            address: "0x15e62707FCA7352fbE35F51a8D6b0F8066A05DCc",
          },
        ],
      },
      {
        name: "GaugeFactory",
        addresses: [
          {
            network: "base",
            address: "0x35f35cA5B132CaDf2916BaB57639128eAC5bbcb5",
          },
        ],
      },
      {
        name: "ManagedRewardsFactory",
        addresses: [
          {
            network: "base",
            address: "0xFdA1fb5A2a5B23638C7017950506a36dcFD2bDC3",
          },
        ],
      },
      {
        name: "Minter",
        addresses: [
          {
            network: "base",
            address: "0xeB018363F0a9Af8f91F06FEe6613a751b2A33FE5",
          },
        ],
      },
      {
        name: "PoolFactory",
        addresses: [
          {
            network: "base",
            address: "0x420DD381b31aEf6683db6B902084cB0FFECe40Da",
          },
        ],
      },
      {
        name: "Router",
        addresses: [
          {
            network: "base",
            address: "0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43",
          },
        ],
      },
      {
        name: "AERO",
        addresses: [
          {
            network: "base",
            address: "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
          },
        ],
      },
      {
        name: "Voter",
        addresses: [
          {
            network: "base",
            address: "0x16613524e02ad97eDfeF371bC883F2F5d6C480A5",
          },
        ],
      },
      {
        name: "VotingEscrow",
        addresses: [
          {
            network: "base",
            address: "0xeBf418Fe2512e7E6bd9b87a8F0f294aCDC67e6B4",
          },
        ],
      },
      {
        name: "VotingRewardsFactory",
        addresses: [
          {
            network: "base",
            address: "0x45cA74858C579E717ee29A86042E0d53B252B504",
          },
        ],
      },
      {
        name: "Pool",
        addresses: [
          {
            network: "base",
            address: "0xA4e46b4f701c62e14DF11B48dCe76A7d793CD6d7",
          },
        ],
      },
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
        name: "cBAT V2",
        addresses: [
          {
            network: "mainnet",
            address: "0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e",
          },
        ],
      },
      {
        name: "cDAI V2",
        addresses: [
          {
            network: "mainnet",
            address: "0xf5dce57282a584d2746faf1593d3121fcac444dc",
          },
          {
            network: "mainnet",
            address: "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643",
          },
        ],
      },
      {
        name: "cETH V2",
        addresses: [
          {
            network: "mainnet",
            address: "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5",
          },
        ],
      },
      {
        name: "cREP V2",
        addresses: [
          {
            network: "mainnet",
            address: "0x158079ee67fce2f58472a96584a73c7ab9ac95c1",
          },
        ],
      },
      {
        name: "cUSDC V2",
        addresses: [
          {
            network: "mainnet",
            address: "0x39aa39c021dfbae8fac545936693ac917d5e7563",
          },
        ],
      },
      {
        name: "cZRX V2",
        addresses: [
          {
            network: "mainnet",
            address: "0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407",
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
        name: "Price Oracle V2",
        addresses: [
          {
            network: "mainnet",
            address: "0x02557a5e05defeffd4cae6d83ea3d173b272c904",
          },
        ],
      },
      {
        name: "Comptroller V2",
        addresses: [
          {
            network: "mainnet",
            address: "0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b",
          },
        ],
      },
      {
        name: "WhitePaperInterestRateModel V2",
        addresses: [
          {
            network: "mainnet",
            address: "0xc64c4cba055efa614ce01f4bad8a9f519c4f8fab",
          },
          {
            network: "mainnet",
            address: "0xbae04cbf96391086dc643e842b517734e214d698",
          },
          {
            network: "mainnet",
            address: "0xa1046abfc2598f48c44fb320d281d3f3c0733c9a",
          },
        ],
      },
      {
        name: "cUSDCv3",
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
        name: "cUSDCv3 Implementation",
        addresses: [
          {
            network: "mainnet",
            address: "0x528c57A87706C31765001779168b42f24c694E1b",
          },
          {
            network: "optimism",
            address: "0xE1a85c066897eEd564F1167eE5F0e522A59d4a3F",
          },
          {
            network: "base",
            address: "0x23684254bc5077c79F166E77D22F516f86d8023a",
          },
        ],
      },
      {
        name: "cUSDCv3 Ext",
        addresses: [
          {
            network: "mainnet",
            address: "0x285617313887d43256F852cAE0Ee4de4b68D45B0",
          },
          {
            network: "optimism",
            address: "0xE802a0b833f6080FEB46DD54c75444c5dba0c873",
          },
          {
            network: "base",
            address: "0x3bac64185786922292266AA92a58cf870D694E2a",
          },
        ],
      },
      {
        name: "Configurator",
        addresses: [
          {
            network: "mainnet",
            address: "0x316f9708bB98af7dA9c68C1C3b5e79039cD336E3",
          },
          {
            network: "optimism",
            address: "0x84E93EC6170ED630f5ebD89A1AAE72d4F63f2713",
          },
          {
            network: "base",
            address: "0x45939657d1CA34A8FA39A924B71D28Fe8431e581",
          },
        ],
      },
      {
        name: "Configurator Implementation",
        addresses: [
          {
            network: "mainnet",
            address: "0xcFC1fA6b7ca982176529899D99af6473aD80DF4F",
          },
          {
            network: "optimism",
            address: "0x3870FAc3De911c12A57E5a2532D15aD8Ca275A60",
          },
          {
            network: "base",
            address: "0x83E0F742cAcBE66349E3701B171eE2487a26e738",
          },
        ],
      },
      {
        name: "Proxy Admin",
        addresses: [
          {
            network: "mainnet",
            address: "0x1EC63B5883C3481134FD50D5DAebc83Ecd2E8779",
          },
          {
            network: "optimism",
            address: "0x3C30B5a5A04656565686f800481580Ac4E7ed178",
          },
          {
            network: "base",
            address: "0xbdE8F31D2DdDA895264e27DD990faB3DC87b372d",
          },
        ],
      },
      {
        name: "Comet Factory USDC WETH",
        addresses: [
          {
            network: "mainnet",
            address: "0xa7F7De6cCad4D83d81676717053883337aC2c1b4",
          },
        ],
      },
      {
        name: "Comet Factory USDT wstETH",
        addresses: [
          {
            network: "mainnet",
            address: "0x698A949f3b4f7a5DdE236106F25Fa0eAcA0FcEF1",
          },
        ],
      },
      {
        name: "Comet Factory USDC USDbC WETH",
        addresses: [
          {
            network: "base",
            address: "0x27C348936400791b7350d80Fb81Bc61Ad68dF4AE",
          },
        ],
      },
      {
        name: "Comet Factory USDC USDT WETH",
        addresses: [
          {
            network: "optimism",
            address: "0xFa454dE61b317b6535A0C462267208E8FdB89f45",
          },
        ],
      },
      {
        name: "Bridge Receiver",
        addresses: [
          {
            network: "optimism",
            address: "0xC3a73A70d1577CD5B02da0bA91C0Afc8fA434DAF",
          },
          {
            network: "base",
            address: "0x18281dfC4d00905DA1aaA6731414EABa843c468A",
          },
        ],
      },
      {
        name: "Rewards",
        addresses: [
          {
            network: "mainnet",
            address: "0x1B0e765F6224C21223AeA2af16c1C46E38885a40",
          },
          {
            network: "optimism",
            address: "0x443EA0340cb75a160F31A440722dec7b5bc3C2E9",
          },
          {
            network: "base",
            address: "0x123964802e6ABabBE1Bc9547D72Ef1B69B00A6b1",
          },
        ],
      },
      {
        name: "Bulker USDC WETH USDbC",
        addresses: [
          {
            network: "mainnet",
            address: "0x74a81F84268744a40FEBc48f8b812a1f188D80C3",
          },
          {
            network: "base",
            address: "0x78D0677032A35c63D142a48A2037048871212a8C",
          },
        ],
      },
      {
        name: "Bulker WETH USDT wstETH",
        addresses: [
          {
            network: "mainnet",
            address: "0xa397a8C2086C554B531c02E29f3291c9704B00c7",
          },
        ],
      },
      {
        name: "Bulker USDC",
        addresses: [
          {
            network: "optimism",
            address: "0xa397a8C2086C554B531c02E29f3291c9704B00c7",
          },
        ],
      },
      {
        name: "Bulker USDT WETH",
        addresses: [
          {
            network: "optimism",
            address: "0xcb3643CC8294B23171272845473dEc49739d4Ba3",
          },
        ],
      },
      {
        name: "Governor",
        addresses: [
          {
            network: "mainnet",
            address: "0xc0Da02939E1441F497fd74F78cE7Decb17B66529",
          },
        ],
      },
      {
        name: "Timelock",
        addresses: [
          {
            network: "mainnet",
            address: "0x6d903f6003cca6255D85CcA4D3B5E5146dC33925",
          },
          {
            network: "optimism",
            address: "0xFa454dE61b317b6535A0C462267208E8FdB89f45",
          },
          {
            network: "base",
            address: "0xCC3E7c85Bb0EE4f09380e041fee95a0caeDD4a02",
          },
        ],
      },
      {
        name: "cUSDTv3",
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
        name: "cUSDTv3 Implementation",
        addresses: [
          {
            network: "mainnet",
            address: "0x0b4a278345DEAA4c7c61FdD2eB4AEC97e412a0d4",
          },
          {
            network: "optimism",
            address: "0xF7C866a35448f28397e35425B8E2DD655D1c00e0",
          },
        ],
      },
      {
        name: "cUSDTv3 Ext",
        addresses: [
          {
            network: "mainnet",
            address: "0x5C58d4479A1E9b2d19EE052143FA73F0ee79A36e",
          },
          {
            network: "optimism",
            address: "0xC49399814452B41dA8a7cd76a159f5515cb3e493",
          },
        ],
      },
      {
        name: "cWETHv3",
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
        name: "cWETHv3 Implementation",
        addresses: [
          {
            network: "mainnet",
            address: "0x1a7E64b593a9B8796e88a7489a2CEb6d079C850d",
          },
          {
            network: "optimism",
            address: "0x377Fc4efA52a0d7160a236D4A8CDDb105fd2C2F7",
          },
          {
            network: "base",
            address: "0x1f9d71Ef69f502188eC65ceBAc049fe646B74De4",
          },
        ],
      },
      {
        name: "cWETHv3 Ext",
        addresses: [
          {
            network: "mainnet",
            address: "0xe2C1F54aFF6b38fD9DF7a69F22cB5fd3ba09F030",
          },
          {
            network: "optimism",
            address: "0x82B8d9A06ccABC1e9B0c0A00f38B858E6925CF2f",
          },
          {
            network: "base",
            address: "0x88bB8C109640778D3fB1074bB10a66e31F2c9c17",
          },
        ],
      },
      {
        name: "cwstETHv3",
        addresses: [
          {
            network: "mainnet",
            address: "0x3D0bb1ccaB520A66e607822fC55BC921738fAFE3",
          },
        ],
      },
      {
        name: "cwstETHv3 Implementation",
        addresses: [
          {
            network: "mainnet",
            address: "0x1F0aa640e4871793AC10029365febe4e8e4b1441",
          },
        ],
      },
      {
        name: "cwstETHv3 Ext",
        addresses: [
          {
            network: "mainnet",
            address: "0x995E394b8B2437aC8Ce61Ee0bC610D617962B214",
          },
        ],
      },
      {
        name: "cUSDbCv3",
        addresses: [
          {
            network: "base",
            address: "0x9c4ec768c28520B50860ea7a15bd7213a9fF58bf",
          },
        ],
      },
      {
        name: "cUSDbCv3 Implementation",
        addresses: [
          {
            network: "base",
            address: "0x3Ab91391221204372DC9FE5E3D4516d03988E8B8",
          },
        ],
      },
      {
        name: "cUSDbCv3 Ext",
        addresses: [
          {
            network: "base",
            address: "0x2F9E3953b2Ef89fA265f2a32ed9F80D00229125B",
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
    height: 100,
    width: 100,
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
        name: "AAVE",
        addresses: [
          {
            network: "mainnet",
            address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
          },
          {
            network: "optimism",
            address: "0x76FB31fb4af56892A25e32cFC43De717950c9278",
          },
          {
            network: "polygon",
            address: "0xd6df932a45c0f255f85145f286ea0b292b21c90b",
          },
        ],
      },
      {
        name: "ACX",
        addresses: [
          {
            network: "mainnet",
            address: "0x44108f0223A3C3028F5Fe7AEC7f9bb2E66beF82F",
          },
          {
            network: "optimism",
            address: "0xFf733b2A3557a7ed6697007ab5D11B79FdD1b76B",
          },
        ],
      },
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
        name: "APE",
        addresses: [
          {
            network: "mainnet",
            address: "0x4d224452801aced8b2f0aebe155379bb5d594381",
          },
        ],
      },
      {
        name: "APU",
        addresses: [
          {
            network: "mainnet",
            address: "0x594DaaD7D77592a2b97b725A7AD59D7E188b5bFa",
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
        name: "AXS",
        addresses: [
          {
            network: "mainnet",
            address: "0xbb0e17ef65f82ab018d8edd776e8dd940327b28b",
          },
        ],
      },
      {
        name: "AXL",
        addresses: [
          {
            network: "mainnet",
            address: "0x467719aD09025FcC6cF6F8311755809d45a5E5f3",
          },
          {
            network: "arbitrum",
            address: "0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f",
          },
          {
            network: "optimism",
            address: "0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f",
          },
          {
            network: "base",
            address: "0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f",
          },
          {
            network: "polygon",
            address: "0x6e4E624106Cb12E168E6533F8ec7c82263358940",
          },
        ],
      },
      {
        name: "BAL",
        addresses: [
          {
            network: "mainnet",
            address: "0xba100000625a3754423978a60c9317c58a424e3D",
          },
          {
            network: "arbitrum",
            address: "0x040d1edc9569d4bab2d15287dc5a4f10f56a56b8",
          },
          {
            network: "optimism",
            address: "0xFE8B128bA8C78aabC59d4c64cEE7fF28e9379921",
          },
          {
            network: "base",
            address: "0x7c6b91D9Be155A6Db01f749217d76fF02A7227F2",
          },
          {
            network: "polygon",
            address: "0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3",
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
        name: "BEAM",
        addresses: [
          {
            network: "mainnet",
            address: "0x62D0A8458eD7719FDAF978fe5929C6D342B0bFcE",
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
        name: "cbETH",
        addresses: [
          {
            network: "optimism",
            address: "0xadDb6A0412DE1BA0F936DCaeb8Aaa24578dcF3B2",
          },
        ],
      },
      {
        name: "CRV",
        addresses: [
          {
            network: "optimism",
            address: "0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53",
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
            network: "optimism",
            address: "0x8aE125E8653821E851F12A49F7765db9a9ce7384",
          },
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
        name: "FET",
        addresses: [
          {
            network: "mainnet",
            address: "0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85",
          },
        ],
      },
      {
        name: "FLOKI",
        addresses: [
          {
            network: "mainnet",
            address: "0xcf0c122c6b73ff809c693db761e7baebe62b6a2e",
          },
        ],
      },
      {
        name: "FRAX",
        addresses: [
          {
            network: "optimism",
            address: "0x2E3D870790dC77A83DD1d18184Acc7439A53f475",
          },
        ],
      },
      {
        name: "GALA",
        addresses: [
          {
            network: "mainnet",
            address: "0xd1d2Eb1B1e90B638588728b4130137D262C87cae",
          },
        ],
      },
      {
        name: "GLM",
        addresses: [
          {
            network: "mainnet",
            address: "0x7DD9c5Cba05E151C895FDe1CF355C9A1D5DA6429",
          },
          {
            network: "polygon",
            address: "0x0B220b82F3eA3B7F6d9A1D8ab58930C064A2b5Bf",
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
          {
            network: "arbitrum",
            address: "0x7f9a7db853ca816b9a138aee3380ef34c437dee0",
          },
          {
            network: "optimism",
            address: "0x1EBA7a6a72c894026Cd654AC5CDCF83A46445B08",
          },
        ],
      },
      {
        name: "IMX",
        addresses: [
          {
            network: "mainnet",
            address: "0xf57e7e7c23978c3caec3c3548e3d615c346e79ff",
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
        name: "LEO",
        addresses: [
          {
            network: "mainnet",
            address: "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3",
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
          {
            network: "optimism",
            address: "0xFdb794692724153d1488CcdBE0C56c252596735F",
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
          {
            network: "optimism",
            address: "0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6",
          },
        ],
      },
      {
        name: "MASK",
        addresses: [
          {
            network: "mainnet",
            address: "0x69af81e73a73b40adf4f3d4223cd9b1ece623074",
          },
          {
            network: "polygon",
            address: "0x2b9e7ccdf0f4e5b24757c1e1a80e311e34cb10c7",
          },
        ],
      },
      {
        name: "MANA",
        addresses: [
          {
            network: "mainnet",
            address: "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
          },
        ],
      },
      {
        name: "MIGGLES",
        addresses: [
          {
            network: "base",
            address: "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
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
        name: "MODE",
        addresses: [
          {
            network: "mode",
            address: "0xDfc7C877a950e49D2610114102175A06C2e3167a",
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
        name: "MOODENG",
        addresses: [
          {
            network: "mainnet",
            address: "0x28561b8a2360f463011c16b6cc0b0cbef8dbbcad",
          },
        ],
      },
      {
        name: "NCT",
        addresses: [
          {
            network: "mainnet",
            address: "0x9e46a38f5daabe8683e10793b06749eef7d733d1",
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
        name: "NEIRO",
        addresses: [
          {
            network: "mainnet",
            address: "0x812ba41e071c7b7fa4ebcfb62df5f45f6fa853ee",
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
          {
            network: "optimism",
            address: "0x2561aa2bB1d2Eb6629EDd7b0938d7679B8b49f9E",
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
        name: "ORBS",
        addresses: [
          {
            network: "redstone",
            address: "0x32444d4DEb1f8FA35A235FF997D5a22aC74b0e48",
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
        name: "PENDLE",
        addresses: [
          {
            network: "optimism",
            address: "0xBC7B1Ff1c6989f006a1185318eD4E7b5796e66E1",
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
        name: "PIRATE",
        addresses: [
          {
            network: "mainnet",
            address: "0x7613c48e0cd50e42dd9bf0f6c235063145f6f8dc",
          },
        ],
      },
      {
        name: "PIXEL",
        addresses: [
          {
            network: "mainnet",
            address: "0x3429d03c6F7521AeC737a0BBF2E5ddcef2C3Ae31",
          },
        ],
      },
      {
        name: "RENDER",
        addresses: [
          {
            network: "mainnet",
            address: "0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24",
          },
        ],
      },
      {
        name: "rETH",
        addresses: [
          {
            network: "optimism",
            address: "0x9Bcef72be871e61ED4fBbc7630889beE758eb81D",
          },
        ],
      },
      {
        name: "SAND",
        addresses: [
          {
            network: "mainnet",
            address: "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
          },
          {
            network: "polygon",
            address: "0xbbba073c31bf03b8acf7c28ef0738decf3695683",
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
          {
            network: "optimism",
            address: "0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4",
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
        name: "SUPER",
        addresses: [
          {
            network: "mainnet",
            address: "0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55",
          },
          {
            network: "polygon",
            address: "0xa1428174f516f527fafdd146b883bb4428682737",
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
        name: "THS",
        addresses: [
          {
            network: "filecoin",
            address: "0x005E02A4A934142d8Dd476F192d0dD9c381b16b4",
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
          {
            network: "optimism",
            address: "0x6fd9d7AD17242c41f7131d257212c54A0e816691",
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
        name: "VELO",
        addresses: [
          {
            network: "optimism",
            address: "0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db",
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
          {
            network: "optimism",
            address: "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
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
            network: "optimism",
            address: "0x4200000000000000000000000000000000000006",
          },
          {
            network: "base",
            address: "0x4200000000000000000000000000000000000006",
          },
          {
            network: "zora",
            address: "0x4200000000000000000000000000000000000006",
          },
        ],
      },
      {
        name: "WLD",
        addresses: [
          {
            network: "optimism",
            address: "0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1",
          },
        ],
      },
      {
        name: "WOJAC",
        addresses: [
          {
            network: "mainnet",
            address: "0x5026F006B85729a8b14553FAE6af249aD16c9aaB",
          },
        ],
      },
      {
        name: "wstETH",
        addresses: [
          {
            network: "optimism",
            address: "0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb",
          },
        ],
      },
      {
        name: "ZRO",
        addresses: [
          {
            network: "optimism",
            address: "0x6985884C4392D348587B19cb9eAAf157F13271cd",
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
          {
            network: "arbitrum",
            address: "0xf1D7CC64Fb4452F05c498126312eBE29f30Fbcf9",
          },
          {
            network: "base",
            address: "0x8909Dc15e40173Ff4699343b6eB8132c65e18eC6",
          },
          {
            network: "optimism",
            address: "0x0c3c1c532F1e39EdF36BE9Fe0bE1410313E074Bf",
          },
          {
            network: "polygon",
            address: "0x9e5A52f57b3038F1B8EeE45F28b3C1967e22799C",
          },
          {
            network: "zora",
            address: "0x0F797dC7efaEA995bB916f268D919d0a1950eE3C",
          },
        ],
      },
      {
        name: "RV2Router02",
        addresses: [
          {
            network: "mainnet",
            address: "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a",
          },
          {
            network: "arbitrum",
            address: "0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24",
          },
          {
            network: "base",
            address: "0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24",
          },
          {
            network: "optimism",
            address: "0x4A7b5Da61326A6379179b40d00F57E5bbDC962c2",
          },
          {
            network: "polygon",
            address: "0xedf6066a2b290C185783862C7F4776A2C8077AD1",
          },
          {
            network: "zora",
            address: "0xa00F34A632630EFd15223B1968358bA4845bEEC7",
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
            network: "mainnet",
            address: "0x1F98415757620B543A52E61c46B32eB19261F984",
          },
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
        name: "Multicall2",
        addresses: [
          {
            network: "mainnet",
            address: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696",
          },
          {
            network: "zora",
            address: "0xA51c76bEE6746cB487a7e9312E43e2b8f4A37C15",
          },
        ],
      },
      {
        name: "ProxyAdmin",
        addresses: [
          {
            network: "mainnet",
            address: "0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2",
          },
          {
            network: "optimism",
            address: "0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2",
          },
          {
            network: "base",
            address: "0x3334d83e224aF5ef9C2E7DDA7c7C98Efd9621fA9",
          },
          {
            network: "zora",
            address: "0xd4109824FC80dD41ca6ee8D304ec74B8bEdEd03b",
          },
        ],
      },
      {
        name: "TickLens",
        addresses: [
          {
            network: "mainnet",
            address: "0xbfd8137f7d1516D3ea5cA83523914859ec47F573",
          },
          {
            network: "optimism",
            address: "0xbfd8137f7d1516D3ea5cA83523914859ec47F573",
          },
          {
            network: "base",
            address: "0x0CdeE061c75D43c82520eD998C23ac2991c9ac6d",
          },
          {
            network: "zora",
            address: "0x209AAda09D74Ad3B8D0E92910Eaf85D2357e3044",
          },
        ],
      },
      {
        name: "Quoter",
        addresses: [
          {
            network: "mainnet",
            address: "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6",
          },
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
            network: "mainnet",
            address: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
          },
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
            network: "mainnet",
            address: "0x42B24A95702b9986e82d421cC3568932790A48Ec",
          },
          {
            network: "optimism",
            address: "0x42B24A95702b9986e82d421cC3568932790A48Ec",
          },
          {
            network: "base",
            address: "0xF9d1077fd35670d4ACbD27af82652a8d84577d9F",
          },
          {
            network: "zora",
            address: "0xffF2BffC03474F361B7f92cCfF2fD01CFBBDCdd1",
          },
        ],
      },
      {
        name: "NonfungibleTokenPositionDescriptor",
        addresses: [
          {
            network: "mainnet",
            address: "0x91ae842A5Ffd8d12023116943e72A606179294f3",
          },
          {
            network: "optimism",
            address: "0x91ae842A5Ffd8d12023116943e72A606179294f3",
          },
          {
            network: "base",
            address: "0x4f225937EDc33EFD6109c4ceF7b560B2D6401009",
          },
          {
            network: "zora",
            address: "0xf15D9e794d39A3b4Ea9EfC2376b2Cd9562996422",
          },
        ],
      },
      {
        name: "TransparentUpgradeableProxy",
        addresses: [
          {
            network: "mainnet",
            address: "0xEe6A57eC80ea46401049E92587E52f5Ec1c24785",
          },
          {
            network: "optimism",
            address: "0xEe6A57eC80ea46401049E92587E52f5Ec1c24785",
          },
          {
            network: "base",
            address: "0x4615C383F85D0a2BbED973d83ccecf5CB7121463",
          },
          {
            network: "zora",
            address: "0x843b0b03c3B3B0434B9cb00AD9cD1D9218E7741b",
          },
        ],
      },
      {
        name: "NonfungiblePositionManager",
        addresses: [
          {
            network: "mainnet",
            address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
          },
          {
            network: "optimism",
            address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
          },
          {
            network: "base",
            address: "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1",
          },
          {
            network: "zora",
            address: "0xbC91e8DfA3fF18De43853372A3d7dfe585137D78",
          },
        ],
      },
      {
        name: "V3Migrator",
        addresses: [
          {
            network: "mainnet",
            address: "0xA5644E29708357803b5A882D272c41cC0dF92B34",
          },
          {
            network: "base",
            address: "0x23cF10b1ee3AdfCA73B0eF17C07F7577e7ACd2d7",
          },
          {
            network: "zora",
            address: "0x048352d8dCF13686982C799da63fA6426a9D0b60",
          },
        ],
      },
      {
        name: "QuoterV2",
        addresses: [
          {
            network: "mainnet",
            address: "0x61fFE014bA17989E743c5F6cB21bF9697530B21e",
          },
          {
            network: "optimism",
            address: "0x61fFE014bA17989E743c5F6cB21bF9697530B21e",
          },
          {
            network: "base",
            address: "0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a",
          },
          {
            network: "zora",
            address: "0x11867e1b3348F3ce4FcC170BC5af3d23E07E64Df",
          },
        ],
      },
      {
        name: "SwapRouter02",
        addresses: [
          {
            network: "mainnet",
            address: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
          },
          {
            network: "optimism",
            address: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
          },
          {
            network: "base",
            address: "0x2626664c2603336E57B271c5C0b26F421741e481",
          },
          {
            network: "zora",
            address: "0x7De04c96BE5159c3b5CeffC82aa176dc81281557",
          },
        ],
      },
      {
        name: "Permit2",
        addresses: [
          {
            network: "mainnet",
            address: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
          },
          {
            network: "optimism",
            address: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
          },
          {
            network: "base",
            address: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
          },
          {
            network: "zora",
            address: "0x000000000022d473030f116ddee9f6b43ac78ba3",
          },
        ],
      },
      {
        name: "UniversalRouter",
        addresses: [
          {
            network: "mainnet",
            address: "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD",
          },
          {
            network: "optimism",
            address: "0xCb1355ff08Ab38bBCE60111F1bb2B784bE25D7e8",
          },
          {
            network: "base",
            address: "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD",
          },
          {
            network: "zora",
            address: "0x2986d9721A49838ab4297b695858aF7F17f38014",
          },
        ],
      },
      {
        name: "v3StakerAddress",
        addresses: [
          {
            network: "mainnet",
            address: "0xe34139463bA50bD61336E0c446Bd8C0867c6fE65",
          },
          {
            network: "optimism",
            address: "0xe34139463bA50bD61336E0c446Bd8C0867c6fE65",
          },
          {
            network: "base",
            address: "0x42bE4D6527829FeFA1493e1fb9F3676d2425C3C1",
          },
          {
            network: "zora",
            address: "0x5eF5A6923d2f566F65f363b78EF7A88ab1E4206f",
          },
        ],
      },
    ],
  },
  {
    name: "Overnight Finance",
    logoPath: "OVN.avif",
    description: "",
    height: 100,
    width: 100,
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
        name: "Bored Ape Yacht Club",
        addresses: [
          {
            network: "mainnet",
            address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
          },
        ],
      },
      {
        name: "Crypto Dads",
        addresses: [
          {
            network: "base",
            address: "0xB2A0fD738D584B47Bee18DA0f3D7c140bf2d1476",
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
        name: "Farcaster OG",
        addresses: [
          {
            network: "zora",
            address: "0xe03Ef4B9db1A47464De84fb476f9bAf493B3E886",
          },
        ],
      },
      {
        name: "Mutant Ape Yacht Club",
        addresses: [
          {
            network: "mainnet",
            address: "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
          },
        ],
      },
      {
        name: "Optimism Ape Yacht Club",
        addresses: [
          {
            network: "optimism",
            address: "0x0deaAc29d8A3d4EbBAAa3eCd3cC97C9deF00f720",
          },
        ],
      },
      {
        name: "Optimism Name Service",
        addresses: [
          {
            network: "optimism",
            address: "0x4454Ee4F432f15e0D6479Cfe5954E08bf0a08B02",
          },
        ],
      },
      {
        name: "Optimism Quest",
        addresses: [
          {
            network: "optimism",
            address: "0xfA14e1157F35E1dAD95dC3F822A9d18c40e360E2",
          },
        ],
      },
      {
        name: "POAP",
        addresses: [
          {
            network: "mainnet",
            address: "0x22C1f6050E56d2876009903609a2cC3fEf83B415",
          },
        ],
      },
      {
        name: "Prime Ape Planet",
        addresses: [
          {
            network: "base",
            address: "0xa78E2E6f0AdD0E9b1A9C17Cc929270D9Ad89478c",
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
        name: "Farcaster: Fennec Fox",
        addresses: [
          {
            network: "zora",
            address: "0x1AC5c6EEADD3108BAF182f5FC55534014f53Bb5D",
          },
        ],
      },
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
        name: "Name Wrapper",
        addresses: [
          {
            network: "mainnet",
            address: "0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401",
          },
        ],
      },
    ],
  },
  {
    name: "OP Governance",
    logoPath: "op.png",
    description: "https://docs.optimism.io/chain/addresses",
    contracts: [
      {
        name: "ProtocolVersions",
        addresses: [
          {
            network: "mainnet",
            address: "0x8062AbC286f5e7D9428a0Ccb9AbD71e50d93b935",
          },
        ],
      },
      {
        name: "SuperchainConfig",
        addresses: [
          {
            network: "mainnet",
            address: "0x95703e0982140D16f8ebA6d158FccEde42f04a4C",
          },
        ],
      },
      {
        name: "AnchorStateRegistryProxy",
        addresses: [
          {
            network: "mainnet",
            address: "0x18DAc71c228D1C32c99489B7323d441E1175e443",
          },
        ],
      },
      {
        name: "BatchSubmitter",
        addresses: [
          {
            network: "mainnet",
            address: "0x6887246668a3b87F54DeB3b94Ba47a6f63F32985",
          },
        ],
      },
      {
        name: "Challenger",
        addresses: [
          {
            network: "mainnet",
            address: "0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A",
          },
        ],
      },
      {
        name: "DelayedWETHProxy",
        addresses: [
          {
            network: "mainnet",
            address: "0x82511d494B5C942BE57498a70Fdd7184Ee33B975",
          },
        ],
      },
      {
        name: "DisputeGameFactoryProxy",
        addresses: [
          {
            network: "mainnet",
            address: "0xe5965Ab5962eDc7477C8520243A95517CD252fA9",
          },
        ],
      },
      {
        name: "FaultDisputeGame",
        addresses: [
          {
            network: "mainnet",
            address: "0xA6f3DFdbf4855a43c529bc42EDE96797252879af",
          },
        ],
      },
      {
        name: "Guardian",
        addresses: [
          {
            network: "mainnet",
            address: "0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2",
          },
        ],
      },
      {
        name: "L1CrossDomainMessengerProxy",
        addresses: [
          {
            network: "mainnet",
            address: "0x25ace71c97B33Cc4729CF772ae268934F7ab5fA1",
          },
        ],
      },
      {
        name: "L1ERC721BridgeProxy",
        addresses: [
          {
            network: "mainnet",
            address: "0x5a7749f83b81B301cAb5f48EB8516B986DAef23D",
          },
        ],
      },
      {
        name: "L1StandardBridgeProxy",
        addresses: [
          {
            network: "mainnet",
            address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1",
          },
        ],
      },
      {
        name: "MIPS",
        addresses: [
          {
            network: "mainnet",
            address: "0x16e83cE5Ce29BF90AD9Da06D2fE6a15d5f344ce4",
          },
        ],
      },
      {
        name: "OptimismMintableERC20FactoryProxy",
        addresses: [
          {
            network: "mainnet",
            address: "0x75505a97BD334E7BD3C476893285569C4136Fa0F",
          },
        ],
      },
      {
        name: "OptimismPortalProxy",
        addresses: [
          {
            network: "mainnet",
            address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed",
          },
        ],
      },
      {
        name: "PermissionedDisputeGame",
        addresses: [
          {
            network: "mainnet",
            address: "0x050ed6F6273c7D836a111E42153BC00D0380b87d",
          },
        ],
      },
      {
        name: "PreimageOracle",
        addresses: [
          {
            network: "mainnet",
            address: "0x9c065e11870B891D214Bc2Da7EF1f9DDFA1BE277",
          },
        ],
      },
      {
        name: "Proposer",
        addresses: [
          {
            network: "mainnet",
            address: "0x473300df21D047806A082244b417f96b32f13A33",
          },
        ],
      },
      {
        name: "ProxyAdmin",
        addresses: [
          {
            network: "mainnet",
            address: "0x543bA4AADBAb8f9025686Bd03993043599c6fB04",
          },
        ],
      },
      {
        name: "ProxyAdminOwner",
        addresses: [
          {
            network: "mainnet",
            address: "0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A",
          },
        ],
      },
      {
        name: "SystemConfigOwner",
        addresses: [
          {
            network: "mainnet",
            address: "0x847B5c174615B1B7fDF770882256e2D3E95b9D92",
          },
        ],
      },
      {
        name: "SystemConfigProxy",
        addresses: [
          {
            network: "mainnet",
            address: "0x229047fed2591dbec1eF1118d64F7aF3dB9EB290",
          },
        ],
      },
      {
        name: "UnsafeBlockSigner",
        addresses: [
          {
            network: "mainnet",
            address: "0xAAAA45d9549EDA09E70937013520214382Ffc4A2",
          },
        ],
      },
      {
        name: "AddressManager",
        addresses: [
          {
            network: "mainnet",
            address: "0xdE1FCfB0851916CA5101820A69b13a4E276bd81F",
          },
        ],
      },
      {
        name: "L2ToL1MessagePasser",
        addresses: [
          {
            network: "optimism",
            address: "0x4200000000000000000000000000000000000016",
          },
        ],
      },
      {
        name: "L2CrossDomainMessenger",
        addresses: [
          {
            network: "optimism",
            address: "0x4200000000000000000000000000000000000007",
          },
        ],
      },
      {
        name: "L2StandardBridge",
        addresses: [
          {
            network: "optimism",
            address: "0x4200000000000000000000000000000000000010",
          },
        ],
      },
      {
        name: "L2ERC721Bridge",
        addresses: [
          {
            network: "optimism",
            address: "0x4200000000000000000000000000000000000014",
          },
        ],
      },
      {
        name: "SequencerFeeVault",
        addresses: [
          {
            network: "optimism",
            address: "0x4200000000000000000000000000000000000011",
          },
        ],
      },
      {
        name: "OptimismMintableERC20Factory",
        addresses: [
          {
            network: "optimism",
            address: "0x4200000000000000000000000000000000000012",
          },
        ],
      },
      {
        name: "OptimismMintableERC721Factory",
        addresses: [
          {
            network: "optimism",
            address: "0x4200000000000000000000000000000000000017",
          },
        ],
      },
      {
        name: "L1Block",
        addresses: [
          {
            network: "optimism",
            address: "0x4200000000000000000000000000000000000015",
          },
        ],
      },
      {
        name: "GasPriceOracle",
        addresses: [
          {
            network: "optimism",
            address: "0x420000000000000000000000000000000000000F",
          },
        ],
      },
      {
        name: "ProxyAdmin",
        addresses: [
          {
            network: "optimism",
            address: "0x4200000000000000000000000000000000000018",
          },
        ],
      },
      {
        name: "BaseFeeVault",
        addresses: [
          {
            network: "optimism",
            address: "0x4200000000000000000000000000000000000019",
          },
        ],
      },
      {
        name: "L1FeeVault",
        addresses: [
          {
            network: "optimism",
            address: "0x420000000000000000000000000000000000001A",
          },
        ],
      },
      {
        name: "GovernanceToken",
        addresses: [
          {
            network: "optimism",
            address: "0x4200000000000000000000000000000000000042",
          },
        ],
      },
      {
        name: "SchemaRegistry",
        addresses: [
          {
            network: "optimism",
            address: "0x4200000000000000000000000000000000000020",
          },
        ],
      },
      {
        name: "EAS",
        addresses: [
          {
            network: "optimism",
            address: "0x4200000000000000000000000000000000000021",
          },
        ],
      },
      {
        name: "L1MessageSender",
        addresses: [
          {
            network: "optimism",
            address: "0x4200000000000000000000000000000000000001",
          },
        ],
      },
      {
        name: "DeployerWhitelist",
        addresses: [
          {
            network: "optimism",
            address: "0x4200000000000000000000000000000000000002",
          },
        ],
      },
      {
        name: "LegacyERC20ETH",
        addresses: [
          {
            network: "optimism",
            address: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
          },
        ],
      },
      {
        name: "L1BlockNumber",
        addresses: [
          {
            network: "optimism",
            address: "0x4200000000000000000000000000000000000013",
          },
        ],
      },
      {
        name: "LegacyMessagePasser",
        addresses: [
          {
            network: "optimism",
            address: "0x4200000000000000000000000000000000000000",
          },
        ],
      },
    ],
  },
  {
    name: "Velodrome Finance",
    logoPath: "velodrome.png",
    description: "",
    contracts: [
      {
        name: "ArtProxy",
        addresses: [
          {
            network: "optimism",
            address: "0x4A9eA0dd5649eC4B6745c60d1769e2184C1782DD",
          },
        ],
      },
      {
        name: "RewardsDistributor",
        addresses: [
          {
            network: "optimism",
            address: "0x9D4736EC60715e71aFe72973f7885DCBC21EA99b",
          },
        ],
      },
      {
        name: "FactoryRegistry",
        addresses: [
          {
            network: "optimism",
            address: "0xF4c67CdEAaB8360370F41514d06e32CcD8aA1d7B",
          },
        ],
      },
      {
        name: "Forwarder",
        addresses: [
          {
            network: "optimism",
            address: "0x06824df38D1D77eADEB6baFCB03904E27429Ab74",
          },
        ],
      },
      {
        name: "GaugeFactory",
        addresses: [
          {
            network: "optimism",
            address: "0x8391fE399640E7228A059f8Fa104b8a7B4835071",
          },
        ],
      },
      {
        name: "ManagedRewardsFactory",
        addresses: [
          {
            network: "optimism",
            address: "0xcDd9585005095ac7447d1fDbC990C5CFB805cff0",
          },
        ],
      },
      {
        name: "Minter",
        addresses: [
          {
            network: "optimism",
            address: "0x6dc9E1C04eE59ed3531d73a72256C0da46D10982",
          },
        ],
      },
      {
        name: "PoolFactory",
        addresses: [
          {
            network: "optimism",
            address: "0xF1046053aa5682b4F9a81b5481394DA16BE5FF5a",
          },
        ],
      },
      {
        name: "Router",
        addresses: [
          {
            network: "optimism",
            address: "0xa062aE8A9c5e11aaA026fc2670B0D65cCc8B2858",
          },
        ],
      },
      {
        name: "VELO",
        addresses: [
          {
            network: "optimism",
            address: "0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db",
          },
        ],
      },
      {
        name: "Voter",
        addresses: [
          {
            network: "optimism",
            address: "0x41C914ee0c7E1A5edCD0295623e6dC557B5aBf3C",
          },
        ],
      },
      {
        name: "VotingEscrow",
        addresses: [
          {
            network: "optimism",
            address: "0xFAf8FD17D9840595845582fCB047DF13f006787d",
          },
        ],
      },
      {
        name: "VotingRewardsFactory",
        addresses: [
          {
            network: "optimism",
            address: "0x756E7C245C69d351FfFBfb88bA234aa395AdA8ec",
          },
        ],
      },
      {
        name: "Pool",
        addresses: [
          {
            network: "optimism",
            address: "0x95885af5492195f0754be71ad1545fe81364e531",
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
];

export default ALL_PROJECT_DATA;
