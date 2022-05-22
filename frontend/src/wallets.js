import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { InjectedConnector } from '@web3-react/injected-connector';

const rpcNetwork = 'matic-mumbai--rpc';
const rpcUrl = `https://${rpcNetwork}.datahub.figment.io/apikey/${process.env.REACT_APP_FIGMENT_KEY}`;

export const CoinbaseWallet = new WalletLinkConnector({
  url: rpcUrl,
  appName: 'Sphere',
  supportedChainIds: [1, 3, 4, 5, 42, 56, 137],
});

export const WalletConnect = new WalletConnectConnector({
  rpcUrl: rpcUrl,
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
});

export const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 137],
});
