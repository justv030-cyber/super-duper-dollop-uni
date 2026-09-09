import { defineConfig } from "hardhat/config";
import hardhatEthers from "@nomicfoundation/hardhat-ethers";

import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  plugins: [hardhatEthers],

  solidity: {
    version: "0.8.34",
  },

  networks: {
    sepolia: {
      type: "http",
      url: process.env.RPC_URL || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
});