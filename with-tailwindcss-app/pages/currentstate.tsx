import Link from "next/link";
export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-sky-100 py-10 sm:py-10">
      <div
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          What is current state?
        </h1>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-center">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="mt-6 text-xl leading-8 text-gray-700">
            The Aave protocol is one of the most popular decentralized finance
            platforms on the Ethereum blockchain, providing lending and
            borrowing services for cryptocurrencies. This protocol was launched
            in early 2020 and features an innovative model of financial
            relationships and risk management.
          </p>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Aave uses Ethereum smart contracts to ensure transparency and
            security of deposits and loans. It uses a set of contracts to manage
            its functionality, including contracts for setting interest rates,
            managing liquidation, and distributing tokens.
          </p>

          <p className="mt-6 text-xl leading-8 text-gray-700">
            One of the key elements of Aave's model is the ability to borrow
            using a positive deposit balance. For example, if you have a
            sufficient balance of a particular token in your Ethereum wallet,
            you can use that balance as collateral to borrow another token
            without having to sell your initial token.
          </p>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Aave also features the concept of "flash loans," which allow users
            to borrow for a very short period of time. This functionality has
            become particularly popular among traders, who use it for quick
            purchases and sales of tokens.
          </p>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            The contracts used in the Aave protocol process a huge amount of
            data about cryptocurrencies and their prices, as well as user
            actions, which allows for the identification of risks associated
            with deposits and loans. In addition, the protocol is equipped with
            mechanisms for risk control and maintaining stability in case of
            changes in market conditions.
          </p>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Aave also attracts users thanks to its low processing fees and a
            wide selection of supported tokens. This makes it very accessible
            and convenient for use as a platform for cryptocurrency lending and
            borrowing.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            In conclusion
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            In conclusion, Aave has become one of the most popular decentralized
            finance platforms due to its innovative model of financial
            relationships and risk management. Its use of Ethereum smart
            contracts provides transparency and security for deposits and loans,
            while its ability to borrow using a positive deposit balance and
            flash loans has proven popular among users. Additionally, Aave's
            extensive data processing and risk control mechanisms make it an
            attractive option for users looking for stability in a rapidly
            changing market. Overall, Aave is an accessible and convenient
            platform for cryptocurrency lending and borrowing, making it a key
            player in the world of decentralized finance.
          </p>
        </div>
      </div>
      <div className="rounded-md  p-2">
        <div className="flex items-center justify-center">
          <p className="text-sm">
            <a
              href="/explorer"
              className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
            >
              Back to the Explorer
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
