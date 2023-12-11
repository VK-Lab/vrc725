import { HardhatUserConfig } from "hardhat/config";
import dotenv from "dotenv";

import '@typechain/hardhat'
import "@nomicfoundation/hardhat-toolbox";
import '@nomicfoundation/hardhat-chai-matchers'

import "./tasks/nft";

dotenv.config();

const config: HardhatUserConfig = {
  defaultNetwork: 'viction',
  networks: {
    hardhat: {
    },
    viction: {
      url: process.env.VICTION_TESTNET_RPC_URL!,
      accounts: [process.env.PRIVATE_KEY!]
    }
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  typechain: {
    outDir: 'src/types',
    target: 'ethers-v6',
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
    dontOverrideCompile: false // defaults to false
  },
};

export default config;
