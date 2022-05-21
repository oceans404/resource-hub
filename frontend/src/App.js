import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  supportedChainIds: [1, 3, 4, 5, 42, 56, 137],
});

const WalletConnect = new WalletConnectConnector({
  rpcUrl: rpcUrl,
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
});

const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 137],
});

function App(props) {
  const { updateAccount } = props;
  const { activate, deactivate, active, chainId, account } = useWeb3React();

  useEffect(() => {
    updateAccount(account);
  }, [account]);

  const content = (
    <div>
      {active && <div className='mb-2'>Connected: {account}</div>}

      <button
        onClick={() => {
          activate(CoinbaseWallet);
        }}
        type='button'
        className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
      >
        Coinbase Wallet
      </button>

      <button
        onClick={() => {
          activate(WalletConnect);
        }}
        type='button'
        className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
      >
        WalletConnect
      </button>

      <button
        onClick={() => {
          activate(Injected);
        }}
        type='button'
        className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
      >
        MetaMask
      </button>

      {active && (
        <button
          onClick={deactivate}
          className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
          type='button'
          data-modal-toggle='connect-wallet-modal'
        >
          Disconnect
        </button>
      )}
    </div>
  );

  const shortAccount =
    account && `${account.slice(0, 5)}...${account.slice(38)}`;
  return (
    <div>
      <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800'>
        <div className='container flex flex-wrap justify-between items-center mx-auto'>
          <Link to='/'>
            <div className='flex items-center'>
              {/* <img src="/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Sphere Logo" /> */}
              <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
                Sphere
              </span>
            </div>
          </Link>

          <div className='flex md:order-2'>
            <button
              className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              type='button'
              data-modal-toggle='connect-wallet-modal'
            >
              {shortAccount || 'Connect Wallet'}
            </button>
            <div
              id='connect-wallet-modal'
              aria-hidden='true'
              className='hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0'
            >
              <div className='relative px-4 w-full max-w-2xl h-full md:h-auto'>
                <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
                  <div className='flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600'>
                    <h3 className='text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white'>
                      Connect Wallet
                    </h3>
                    <button
                      type='button'
                      className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                      data-modal-toggle='connect-wallet-modal'
                    >
                      <svg
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <div className='p-6 mb-2 space-y-2'>{content}</div>
                </div>
              </div>
            </div>

            <button
              data-collapse-toggle='mobile-menu-4'
              type='button'
              className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='mobile-menu-4'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <svg
                className='hidden w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
          <div
            className='hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
            id='mobile-menu-4'
          >
            <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
              <li>
                <Link to='/uploader'>
                  <div className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                    Upload
                  </div>
                </Link>
              </li>
              <li>
                <Link to='/about'>
                  <div className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                    About
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div>Connection Status: {active ? 'connected' : 'not connected'}</div>
      <div>Account: {account}</div>
      <div>Network ID: {chainId}</div> */}
    </div>
  );
}

export default App;
