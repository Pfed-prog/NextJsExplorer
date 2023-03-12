import type { NextPage } from "next";
import React, { useState } from "react";
import Router from "next/router";

const Home: NextPage = () => {
  const [contractAddress, setContractAddress] = useState<string>("");

  return (
    <div className="min-h-screen min-w-full items-center justify-center bg-gradient-to-b from-sky-100 to-sky-900">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ethereum Contract Explorer
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            Discover and track all the transactions on the Ethereum blockchain.
          </p>
          <form className="mx-auto mt-10 flex max-w-md gap-x-4">
            <input
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Enter contract address.."
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
            />
            <button
              type="submit"
              onClick={() => Router.push(`/contracts/${contractAddress}`)}
              className="flex-none rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Submit
            </button>
          </form>
          <svg
            viewBox="0 0 256 256"
            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx={256}
              cy={256}
              r={256}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />

            <radialGradient
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(256 256) rotate(90) scale(256)"
            >
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
            </radialGradient>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
