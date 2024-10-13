import type { AddressInfo } from "@evmexplorer/blockscout";
import type { UniswapTokenProps } from "@evmexplorer/uniswap";
import type { JsonRpcProvider, FallbackProvider } from "ethers";

import { Contract } from "ethers";
import Link from "next/link";
import { Token, WETH9 } from "@uniswap/sdk-core";
import { Pool } from "@uniswap/v3-sdk";
import IUniswapV3PoolABI from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json";

import { parseTokenPrice } from "@/utils/parseNumbers";

export async function getQuote(
  addressInfo: AddressInfo,
  chainId: number,
  provider: JsonRpcProvider | FallbackProvider
) {
  if (
    addressInfo &&
    addressInfo.token &&
    addressInfo.token.address &&
    addressInfo.token.decimals
  ) {
    const TOKEN = new Token(
      chainId,
      addressInfo.token.address,
      Number(addressInfo.token.decimals)
    );

    const WETH = WETH9[chainId];

    const poolAddresses = [
      Pool.getAddress(WETH, TOKEN, 100),
      Pool.getAddress(WETH, TOKEN, 500),
      Pool.getAddress(WETH, TOKEN, 3000),
      Pool.getAddress(WETH, TOKEN, 10000),
    ];

    const poolFees = ["0.01%", "0.05%", "0.3%", "1%"];

    const poolContracts = poolAddresses.map(
      (address) => new Contract(address, IUniswapV3PoolABI.abi, provider)
    );

    let maxLiquidity = 0;
    let maxLiquidityIndex = -1;
    let maxSlot0: { 0: bigint } | undefined;

    for (let i = 0; i < poolContracts.length; i++) {
      let slot0: { 0: bigint };
      let liquidity = 0;

      try {
        slot0 = await poolContracts[i].slot0();
        liquidity = Number(await poolContracts[i].liquidity());
      } catch (error) {
        continue;
      }

      if (liquidity > maxLiquidity) {
        maxLiquidity = liquidity;
        maxLiquidityIndex = i;
        maxSlot0 = slot0;
      }
    }

    if (maxSlot0) {
      const poolContract = poolContracts[maxLiquidityIndex];
      const numerator = Number(maxSlot0[0]);
      const denominator = 2 ** 96;

      const price = (numerator / denominator) ** 2;

      const token0isWETH = (await poolContract.token0()) === WETH.address;
      const decimalScalar = 10 ** (18 - Number(addressInfo.token.decimals));
      const pricePerWETH = token0isWETH ? 1 / price : price;
      const adjDecimalsPrice = pricePerWETH / decimalScalar;
      const adjPrice = adjDecimalsPrice * Number(addressInfo?.exchange_rate);

      return {
        address: poolAddresses[maxLiquidityIndex],
        fee: poolFees[maxLiquidityIndex],
        price: adjPrice,
        poolContract: poolContract,
      };
    }
  }
  throw new Error("no pool found");
}

export function UniswapQuote(props: UniswapTokenProps) {
  const fee = props.fee;
  const price = props.price;
  const symbol = props.symbol;
  const networkNameUniswap = props.networkNameUniswap;
  const address = props.address;
  return (
    <div className="mt-2 text-xs sm:text-lg">
      <Link
        href={`https://app.uniswap.org/explore/pools/${networkNameUniswap}/${address}`}
        className="hover:text-zinc-600 text-cyan-900"
      >
        <span className="font-semibold tracking-wide">
          1 {symbol} = ${parseTokenPrice(price)}
        </span>
        <span className="tracking-tight"> Uniswap V3 {fee} fee Pool</span>
      </Link>
    </div>
  );
}
