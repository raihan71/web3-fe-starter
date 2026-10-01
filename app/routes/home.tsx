import type { Route } from "./+types/home";
import { WalletConnect } from "../components/wallet-connect";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Web3 FE Starter" },
    { name: "description", content: "A React Router starter for EVM wallet-connected apps." },
  ];
}

export default function Home() {
  return (
    <main className="starter-page">
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Web3 FE Starter home">
          <span className="wordmark__mark" aria-hidden="true">
            W
          </span>
          <span>
            web3<span className="wordmark__light">/starter</span>
          </span>
        </a>
        <a
          className="docs-link"
          href="https://docs.reown.com/appkit/react/core/installation"
          target="_blank"
          rel="noreferrer"
        >
          AppKit docs <span aria-hidden="true">↗</span>
        </a>
      </header>

      <div className="page-content">
        <section className="intro">
          <p className="eyebrow">React Router · Wagmi · Reown AppKit</p>
          <h1>
            A clean starting point
            <br />
            for <span>onchain apps.</span>
          </h1>
          <p className="intro__copy">
            Wallet connection, account state, network selection, and balance reading, already wired
            together. Start building from here.
          </p>
        </section>

        <WalletConnect />

        <footer className="stack-note">
          <span>THE STARTER STACK</span>
          <p>
            React 19 <i /> React Router <i /> Wagmi <i /> Viem <i /> Reown AppKit
          </p>
        </footer>
      </div>
    </main>
  );
}
