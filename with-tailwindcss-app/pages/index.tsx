import type { NextPage } from "next";
import React, { useState } from "react";
import Router from "next/router";

const Home: NextPage = () => {
  const [contractAddress, setContractAddress] = useState<string>("");

  return (
    <>
      <div className="flex justify-center items-center">
        <form className="mt-5">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            placeholder="Enter contract address.."
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded-full"
            onClick={() => Router.push(`/contracts/${contractAddress}`)}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
