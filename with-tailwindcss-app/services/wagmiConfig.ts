import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { mainnet, optimism } from "wagmi/chains";

export const wagmiConfig = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, optimism],
  transports: {
    [mainnet.id]: http(),
    [optimism.id]: http(),
  },
  ssr: true,
});

export const wagmiOpConfig = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: "YOUR_PROJECT_ID",
  chains: [optimism],
  transports: {
    [optimism.id]: http(),
  },
  ssr: true,
});
