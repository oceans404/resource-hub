## Decentralized Resource Hub

Frontend: Bootstrapped with Create-React-App
Wallet connection mechanisms: Coinbase Wallet, Wallet Connect, and MetaMask
Network: Polgyon Mumbai
RPC: Figment

### Setup and first run instuctions

- Set up a [Figment](https://datahub.figment.io/) account. We are using Figment (DataHub)'s RPC endpoint to connect to the Polygon Mumbai network because it is a free, globally distributed, cloud-hosted node network. Create a new Figment app within the DataHub console and copy the project id.
- Create an env file `touch .env` and update it with a REACT_APP_FIGMENT_KEY key
  - REACT_APP_FIGMENT_KEY='yourFigmentAppProjectId'
- `yarn install`
- `yarn start`
