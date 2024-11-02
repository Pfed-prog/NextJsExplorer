import type { UniswapTokenProps } from "@evmexplorer/uniswap";
import { parseTokenPrice } from "@evmexplorer/utility";
import Link from "next/link";

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
        <span className="tracking-tight"> Uniswap v3 {fee} fee Pool</span>
      </Link>
    </div>
  );
}
