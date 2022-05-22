require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.5",
  networks: {
    ethereum: {
      url: process.env.ETH_RINKEBY_URL,
      accounts: [process.env.ETH_RINKEBY_PK]
    },
  }
};