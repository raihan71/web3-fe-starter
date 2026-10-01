import { AppKitButton, useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react";
import { useBalance } from "wagmi";

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function WalletConnect() {
  const account = useAppKitAccount();
  const { caipNetwork } = useAppKitNetwork();
  const { data: balance } = useBalance({ address: account.address as `0x${string}` | undefined });

  return (
    <section className="wallet-panel" aria-labelledby="wallet-heading">
      <div className="wallet-panel__heading">
        <div>
          <p className="eyebrow">Wallet</p>
          <h2 id="wallet-heading">Connect to get started</h2>
        </div>
        <span className={`connection-state${account.isConnected ? " is-connected" : ""}`}>
          <span aria-hidden="true" />
          {account.isConnected ? "Connected" : "Not connected"}
        </span>
      </div>

      <p className="wallet-panel__description">
        Connect an EVM wallet to inspect your account, network, and balance.
      </p>

      <div className="wallet-panel__action">
        <AppKitButton />
      </div>

      {account.isConnected && account.address && (
        <dl className="wallet-details">
          <div>
            <dt>Address</dt>
            <dd title={account.address}>{shortenAddress(account.address)}</dd>
          </div>
          <div>
            <dt>Network</dt>
            <dd>{caipNetwork?.name ?? "Unknown network"}</dd>
          </div>
          <div>
            <dt>Balance</dt>
            <dd>
              {balance ? `${Number(balance.formatted).toFixed(4)} ${balance.symbol}` : "Loading..."}
            </dd>
          </div>
        </dl>
      )}
    </section>
  );
}
