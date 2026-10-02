# Web3 FE Starter
<p float="left">
<img width="49%" alt="image" src="https://github.com/user-attachments/assets/2031930a-66d7-44c7-a4d0-07c9ee81c7c2" />
<img width="49%" alt="image" src="https://github.com/user-attachments/assets/cc830f8d-2e3c-4853-9ec5-3afa8020d21d" />
</p>

A small React Router starter for EVM frontend projects. It demonstrates wallet connection, account and network state, and balance reads using Reown AppKit, Wagmi, and Viem.

## Stack

- React 19 and React Router 8
- Reown AppKit with the Wagmi adapter
- Wagmi and Viem for EVM wallet and contract interactions
- TanStack Query for async state
- TypeScript and Tailwind CSS 4

## Setup

Install dependencies:

```sh
yarn install
```

Create a project ID in the [Reown Cloud dashboard](https://cloud.reown.com/) and add it to a local environment file:

```sh
VITE_WALLET_CONNECT_PROJECT_ID=your_project_id
```

Start the development server:

```sh
yarn dev
```

Open `http://localhost:5173`. Without a valid project ID, the app's wallet modal cannot connect to wallet providers.

## Example

The home route renders the reusable `WalletConnect` component from `app/components/wallet-connect.tsx`. It uses AppKit's button and account/network hooks, plus Wagmi's `useBalance` hook to show the connected wallet's address, network, and native token balance.

Wallet setup lives in `app/root.tsx`. The starter currently enables Sepolia, Ethereum, and Arbitrum, with Sepolia as the default network. Update the network list and app metadata there to match your project.

## Scripts

```sh
yarn dev        # Start the development server
yarn build      # Create a production build
yarn start      # Serve the production build
yarn typecheck  # Generate route types and run TypeScript
yarn lint       # Run ESLint
yarn test       # Run Vitest
```

## Production

Build and run with Docker:

```sh
docker build -t web3-fe-starter .
docker run --env VITE_WALLET_CONNECT_PROJECT_ID=your_project_id -p 3000:3000 web3-fe-starter
```

Set `VITE_WALLET_CONNECT_PROJECT_ID` in the build environment for deployments that bundle client-side environment values.
