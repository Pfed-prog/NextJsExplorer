import "styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import type { NextComponentType } from "next";
import type AppProps from "next/app";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { Chain } from "wagmi/chains";

import Layout from "@/components/Layout";
import { wagmiConfig } from "@/services/wagmiConfig";

type NextAppProps<P = any> = AppProps & {
  pageProps: P;
  Component: NextComponentType & {
    getLayout?: (page: React.ReactElement) => React.ReactNode;
  };
} & Omit<AppProps<P>, "pageProps">;

export interface MyWalletOptions {
  chains: Chain[];
}

function MyApp({ Component, pageProps }: NextAppProps) {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
