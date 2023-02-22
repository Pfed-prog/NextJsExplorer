import type { NextPage } from "next";
import React, { useState } from "react";

const Home: NextPage = () => {
  const [contractAddress, setContractAddress] = useState("");
  async function handleClick(e: any) {
    e.preventDefault();
  }
  return (
    <>
      <div className="flex justify-center items-center">
        <form className="mt-5">
          <input
            className=""
            placeholder="Enter contract address.."
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
          />

          <button type="submit" className="" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
