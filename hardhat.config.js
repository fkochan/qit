require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const PRIVATE_KEY = process.env.PRIVATE_KEY

// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  
  const [deployer] = await ethers.getSigners();

  const Token = await ethers.getContractFactory("QIT");
  const token = await Token.deploy();

  console.log("Token address:", token.address);
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    fuji: {
      url: `https://api.avax-test.network/ext/bc/C/rpc`,
      accounts: [`${PRIVATE_KEY}`]
    }, 
    avax: {
      url: `https://api.avax.network/ext/bc/C/rpc`,
      accounts: [`${PRIVATE_KEY}`]
    }
  }
};
