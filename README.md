## Decentralized Resource Hub

### Technology used

#### Web3 technology used

- Wallet connection mechanisms: [Coinbase Wallet](https://www.coinbase.com/wallet/developers), [Wallet Connect](https://walletconnect.com/), and [MetaMask Wallet](https://docs.metamask.io/guide/)
- Network: [Polgyon Mumbai](https://docs.polygon.technology/docs/develop/network-details/network/)
- RPC: [Figment](https://datahub.figment.io/)
- Decentralized file storage: [Storj](https://storj.io/) via https://demo.storj-ipfs.com/api/v0/add
- File pinning: [IPFS](https://ipfs.io/)

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
