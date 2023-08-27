import "@/styles/globals.css";
import "swiper/swiper-bundle.css";
import "../styles/Home.module.css";
import styles from "../styles/swiper-custom.css";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { bsc } from "wagmi/chains";

export default function App({ Component, pageProps }) {
  const chains = [bsc];
  const projectId = "cba73ada547c01c1a64d7725fb732495";
  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 1, chains }),
    publicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, chains);
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Web3Modal
          themeMode="light"
          projectId={projectId}
          ethereumClient={ethereumClient}
        />
        <Component {...pageProps} />
      </WagmiConfig>
    </>
  );
}
