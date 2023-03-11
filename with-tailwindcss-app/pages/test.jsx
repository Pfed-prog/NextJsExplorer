const messages = [
    {
      id: 1,
      subject: '0xEE56e2B3D491590B5b31738cC34d5232F378a8D5',
      sender: 'owner (address)',
    },
    {
        id: 2,
        subject: '0x398eC7346DcD622eDc5ae82352F02bE94C62d119',
        sender: 'getLendingPool (address)',
      },
      {
        id: 3,
        subject: '0x3dfd23A6c5E8BbcFc9581d2E864a68feb6a076d3',
        sender: 'getLendingPoolCore (address)',
      },
      {
        id: 4,
        subject: '0x4965f6FA20fE9728deCf5165016fc338a5a85aBF',
        sender: 'getLendingPoolConfigurator (address)',
      },
      {
        id: 5,
        subject: '0x082B0cA59f2122c94E5F57Db0085907fa9584BA6',
        sender: 'getLendingPoolDataProvider (address)',
      },
      {
        id: 6,
        subject: '0xeAC99f8Fb1996AeB153E8cF0842908973a48C66F',
        sender: 'getLendingPoolParametersProvider (address)	',
      },
      {
        id: 7,
        subject: '0x2Dc9969A32E2171557b7C24A632483D03955440D',
        sender: 'getFeeProvider (address)',
      },
      {
        id: 8,
        subject: '0x31cceeb1fA3DbEAf7baaD25125b972A17624A40a',
        sender: 'getLendingPoolLiquidationManager (address)	',
      },
      {
        id: 9,
        subject: '0xEE56e2B3D491590B5b31738cC34d5232F378a8D5',
        sender: 'getLendingPoolManager (address)',
      },
      {
        id: 10,
        subject: '0x76B47460d7F7c5222cFb6b6A75615ab10895DDe4',
        sender: 'getPriceOracle (address)',
      },
      {
        id: 11,
        subject: '0x4D728A4496e4De35f218D5A214366bde3a62B51C',
        sender: 'getLendingRateOracle (address)',
      },
      {
        id: 12,
        subject: '0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c',
        sender: 'getTokenDistributor (address)',
      },
    
  ]
  
  export default function Example() {
    return (
      <ul role="list" className="divide-gray-900">
        <h1 className="text-3xl font-bold tracking-tight sm:text-center sm:text-2xl">
                Current state
                  </h1>
        {messages.map((message) => (
         
            <div className="flex justify-between space-x-3 mt-2">

              <div className="min-w-0 flex-1">
                <a href="#" className="block focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="truncate text-sm font-medium text-gray-900">{message.sender}</p>
                  
                  <p className="truncate text-sm text-gray-900 ">{message.subject}</p>
                </a>
              </div>
              
            </div>
        ))}
      </ul>
    )
  }