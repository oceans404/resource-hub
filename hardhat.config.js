require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.5",
  networks: {
    ethereum: {
      url: process.env.ETH_RINKEBY_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    polygon: {
      url: process.env.POLYGON_MUMBAI_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    gnosis: {
      url: process.env.GNOSIS_SOKOL_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};