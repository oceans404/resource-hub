import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useWeb3React } from '@web3-react/core';
import './App.css';

const rpcNetwork = 'matic-mumbai--rpc';
const rpcUrl = `https://${rpcNetwork}.datahub.figment.io/apikey/${process.env.REACT_APP_FIGMENT_KEY}`;

const CoinbaseWallet = new WalletLinkConnector({
  url: rpcUrl,
  appName: 'Web3-react Demo',
  supportedChainIds: [1, 3, 4, 5, 42],
});

const WalletConnect = new WalletConnectConnector({
  rpcUrl: rpcUrl,
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
});

const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

function App() {
  const { activate, deactivate, active, chainId, account } = useWeb3React();

  return (
    <div>
      <button
        onClick={() => {
          activate(CoinbaseWallet);
        }}
      >
        Coinbase Wallet
      </button>
      <button
        onClick={() => {
          activate(WalletConnect);
        }}
      >
        Wallet Connect
      </button>
      <button
        onClick={() => {
          activate(Injected);
        }}
      >
        Metamask
      </button>

      <button onClick={deactivate}>Disconnect</button>

      <div>Connection Status: ${active}</div>
      <div>Account: ${account}</div>
      <div>Network ID: ${chainId}</div>
    </div>
  );
}

export default App;
