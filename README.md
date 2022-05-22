## Sphere

Sphere is a decentralized resource hub for uploading files to decentralized, tamper and censorship resistant storage (Storj pinned on IPFS). Data is a public good, and resources should be available for long term public utility. Tag your files to easily find them when you need them.

### Technology used

#### Web3 technology used

- Wallet connection mechanisms: [Coinbase Wallet](https://www.coinbase.com/wallet/developers), [Wallet Connect](https://walletconnect.com/), and [MetaMask Wallet](https://docs.metamask.io/guide/)
- Networks: [Polgyon Mumbai](https://docs.polygon.technology/docs/develop/network-details/network/) and [Ethereum Rinkeby](https://ethereum.org/en/developers/docs/networks/)
- RPC: [Figment](https://datahub.figment.io/)
- Decentralized file storage: [Storj](https://storj.io/) via https://demo.storj-ipfs.com/api/v0/add
- File pinning: [IPFS](https://ipfs.io/)

#### Deployed smart contracts

- [Ethereum](https://rinkeby.etherscan.io/address/0xebc499c6558C5B843292C208654D25dD1B4C0af5)
- [Polygon](https://mumbai.polygonscan.com/address/0xe92e2c072c0e9a7be958643ac5171fdda9cb7b3e)

#### Frontend technology used

- Bootstrapped with [Create-React-App](https://create-react-app.dev/)
- Component Library: [Flowbite](https://flowbite.com/docs/getting-started/react/)
- CSS Framework: [Tailwind CSS](https://tailwindcss.com/)

### Setup and first run instuctions for the web app

- Set up a [Figment](https://datahub.figment.io/) account. We are using Figment (DataHub)'s RPC endpoint to connect to the Polygon Mumbai network because it is a free, globally distributed, cloud-hosted node network. Create a new Figment app within the DataHub console and copy the project id.
- `cd frontend`
- Create an env file `touch .env` and update it with a REACT_APP_FIGMENT_KEY key
  - REACT_APP_FIGMENT_KEY='yourFigmentAppProjectId'
- `yarn install`
- `yarn start`
