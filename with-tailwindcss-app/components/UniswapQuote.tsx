import Link from "next/link";

import { parseTokenPrice } from "@/utils/parseNumbers";

interface ContractProps {
  symbol: string;
  price: number;
  fee: string;
  networkNameUniswap: string;
  address: string;
}

export function UniswapQuote(props: ContractProps) {
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
