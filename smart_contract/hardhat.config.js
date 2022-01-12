//https://eth-ropsten.alchemyapi.io/v2/SRlw1hZ1x2FcfvdcC0Vtc4p6GuMbjSd0

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url:
        "https://eth-ropsten.alchemyapi.io/v2/SRlw1hZ1x2FcfvdcC0Vtc4p6GuMbjSd0",
      accounts: [
        "4ced3d82655cb92808443fa572d32cbe468f4ed50f04b76f02f773ead7acbdf9"
      ]
    }
  }
};
